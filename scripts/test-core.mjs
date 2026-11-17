import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
function between(startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker, start + startMarker.length);
  if (start < 0 || end < 0) throw new Error(`Unable to extract ${startMarker}`);
  return html.slice(start, end);
}
const coreSource = [
  between("const categories=[", "let records="),
  between("function safeUrl", "function load"),
  between("function assessment", "function toast"),
  between("function buildResearchQueries", "function clearForm")
].join("\n");
const core = new Function(coreSource + "\nreturn { assessment, grade, safeUrl, canonicalDomain, parseClaims, parseChannels, parseOperations, parseContacts, buildResearchQueries };")();

assert.equal(core.assessment({}).coverage, 0);
assert.equal(core.grade(100, 0), "Unrated");
const partial = core.assessment({ channels: 16, catalogue: 12, returns: 12, warehouse: 12 });
assert.equal(partial.coverage, 65);
assert.equal(partial.normalized, 80);
assert.equal(core.grade(partial.normalized, partial.coverage), "A");
assert.equal(core.grade(100, 50), "Unrated");
assert.equal(core.safeUrl("javascript:alert(1)"), "");
assert.equal(core.safeUrl("https://example.com"), "https://example.com/");
assert.equal(core.canonicalDomain("https://WWW.Example.com/catalog"), "example.com");

const claims = core.parseClaims("FACT | Uses Shopify | https://example.com\nHYPOTHESIS | May need stock sync |");
assert.equal(claims.length, 2);
assert.equal(claims[1].status, "HYPOTHESIS");

const channels = core.parseChannels("CHANNEL | Shopify | https://shop.example | CONFIRMED | https://source.example\nCHANNEL | Amazon | https://amazon.example | MAYBE |");
assert.equal(channels.length, 2);
assert.equal(channels[0].status, "CONFIRMED");
assert.equal(channels[1].status, "UNVERIFIED");

const operations = core.parseOperations("inventory | FACT | Three warehouse locations | https://source.example\nreturns | HYPOTHESIS | Returns may need inspection |");
assert.equal(operations.length, 2);
assert.equal(operations[0].area, "inventory");
assert.equal(operations[1].status, "HYPOTHESIS");

const contacts = core.parseContacts("CONTACT | Jane Smith | Head of Operations | jane@company.com | +44 20 1234 5678 | SWITCHBOARD | https://linkedin.com/in/jane | https://company.com/team | VERIFIED\nCONTACT | Alex Lee | Founder | | +1 212 555 0100 | UNKNOWN | | | MAYBE");
assert.equal(contacts.length, 2);
assert.equal(contacts[0].phoneType, "SWITCHBOARD");
assert.equal(contacts[0].verification, "VERIFIED");
assert.equal(contacts[1].phoneType, "UNKNOWN");
assert.equal(contacts[1].verification, "UNVERIFIED");

const research = core.buildResearchQueries("Example Retail", "United Kingdom", "https://www.example.com");
assert.ok(research.length >= 9);
assert.ok(research.some(x => x.label === "Returns and reverse logistics"));
assert.ok(research.some(x => x.label === "Repair and refurbishment"));
assert.ok(research.some(x => x.query.includes("site:example.com")));
assert.ok(research.every(x => x.url.startsWith("https://www.google.com/search?q=")));
console.log("Lead Intelligence OS core, research and contact intelligence tests passed.");
