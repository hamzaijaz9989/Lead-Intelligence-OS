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
  between("function parseChannels", "function clearForm")
].join("\n");
const core = new Function(coreSource + "\nreturn { assessment, grade, safeUrl, canonicalDomain, parseClaims, parseChannels, parseOperations };")();

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
