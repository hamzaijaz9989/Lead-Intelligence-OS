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
  between("function buildResearchQueries", "function parseChannels"),\n  between("function parseChannels", "function clearForm")
].join("\n");
const core = new Function(coreSource + "\nreturn { assessment, grade, safeUrl, canonicalDomain, parseClaims, parseChannels, parseOperations, parseContacts, buildResearchQueries };")();

assert.equal(core.assessment({}).coverage, 0, "blank criteria should have zero evidence coverage");
assert.equal(core.grade(100, 0), "Unrated", "no evidence must not receive a grade");
const partial = core.assessment({ channels: 16, catalogue: 12, returns: 12, warehouse: 12 });
assert.equal(partial.coverage, 65, "coverage must equal assessed rubric weight");
assert.equal(partial.normalized, 80, "score should normalise only over assessed criteria");
assert.equal(core.grade(partial.normalized, partial.coverage), "A");
assert.equal(core.grade(100, 50), "Unrated", "grade must be withheld below 60% evidence coverage");
assert.equal(core.safeUrl("javascript:alert(1)"), "", "unsafe protocols must be rejected");
assert.equal(core.safeUrl("https://example.com"), "https://example.com/", "HTTP(S) links should be accepted");
assert.equal(core.canonicalDomain("https://WWW.Example.com/catalog"), "example.com");
const claims = core.parseClaims("FACT | Uses Shopify | https://example.com\nHYPOTHESIS | May need stock sync |");
assert.equal(claims.length, 2);
assert.equal(claims[0].status, "FACT");
assert.equal(claims[1].status, "HYPOTHESIS");
console.log("Lead Intelligence OS core tests passed.");

const channels = core.parseChannels("CHANNEL | Shopify | https://shop.example | CONFIRMED | https://source.example\nCHANNEL | Amazon | https://amazon.example | MAYBE |");
assert.equal(channels.length, 2);
assert.equal(channels[0].status, "CONFIRMED");
assert.equal(channels[1].status, "UNVERIFIED", "unknown channel states must default to unverified");
assert.equal(channels[1].name, "Amazon");
console.log("Discovery and channel mapping tests passed.");

const operations = core.parseOperations("inventory | FACT | Three warehouse locations | https://source.example\nreturns | HYPOTHESIS | Returns may need inspection |");
assert.equal(operations.length, 2);
assert.equal(operations[0].area, "inventory");
assert.equal(operations[0].status, "FACT");
assert.equal(operations[1].status, "HYPOTHESIS");
assert.equal(operations[1].url, "");
console.log("Operational intelligence parsing tests passed.");

const research = core.buildResearchQueries("Example Retail", "United Kingdom", "https://www.example.com");
assert.ok(research.length >= 9, "research pack should cover core operational themes");
assert.ok(research.some(x => x.label === "Returns and reverse logistics"));
assert.ok(research.some(x => x.label === "Repair and refurbishment"));
assert.ok(research.some(x => x.query.includes("site:example.com")), "official-domain query should use canonical domain");
assert.ok(research.every(x => x.url.startsWith("https://www.google.com/search?q=")), "search links must be encoded HTTPS Google searches");
assert.ok(research.some(x => decodeURIComponent(x.url).includes("warehouse fulfilment")), "warehouse research query should be present");
console.log("Assisted company research tests passed.");

const contacts = core.parseContacts("CONTACT | Jane Smith | Head of Operations | jane@company.com | +44 20 1234 5678 | SWITCHBOARD | https://linkedin.com/in/jane | https://company.com/team | VERIFIED\\nCONTACT | Alex Lee | Founder | | +1 212 555 0100 | UNKNOWN | | | MAYBE");
assert.equal(contacts.length, 2);
assert.equal(contacts[0].phoneType, "SWITCHBOARD");
assert.equal(contacts[0].verification, "VERIFIED");
assert.equal(contacts[1].phoneType, "UNKNOWN");
assert.equal(contacts[1].verification, "UNVERIFIED");
assert.equal(contacts[1].name, "Alex Lee");
console.log("Professional contact intelligence tests passed.");
