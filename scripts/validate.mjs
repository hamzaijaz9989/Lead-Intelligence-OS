import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const start = html.indexOf("<script>");
const end = html.indexOf("</script>", start);
if (start < 0 || end < 0) throw new Error("No inline application script found.");
const source = html.slice(start + "<script>".length, end);
new Function(source);

const required = [
  'id="prospectForm"',
  'id="leadList"',
  'id="detail"',
  'id="discoveryStatus"',
  'id="channels"',
  "localStorage",
  "function totalScore",
  "function parseClaims",
  "function parseChannels",
  "function parseOperations",\n  "function buildResearchQueries",\n  "Assisted company research",\n  "research-links",
  'id="operations"',
  "function safeUrl",
  "function canonicalDomain",
  "data-stage",
  "data-review",
  "data-demo"
];
for (const token of required) {
  if (!html.includes(token)) throw new Error(`Missing required application feature: ${token}`);
}
if (source.includes("fetch(") || source.includes("XMLHttpRequest") || source.includes("sendBeacon")) {
  throw new Error("Unexpected network request found in local-first prototype.");
}
console.log("Lead Intelligence OS static validation passed.");
console.log("Inline JavaScript parses; dossier, discovery queue, channel mapping, scoring, evidence and local-storage hooks are present.");
