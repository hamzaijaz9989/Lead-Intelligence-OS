import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const match = html.match(/<script>([\\s\\S]*?)<\\/script>/i);
if (!match) throw new Error("No inline application script found.");
new Function(match[1]);
const required = [
  'id="prospectForm"',
  'id="leadList"',
  'id="detail"',
  'localStorage',
  'function totalScore',
  'function parseClaims',
  'function safeUrl',
  'data-review="approved"',
  'data-demo='
];
for (const token of required) {
  if (!html.includes(token)) throw new Error(`Missing required application feature: ${token}`);
}
if (/fetch\\s*\\(|XMLHttpRequest|sendBeacon/.test(match[1])) {
  throw new Error("Unexpected network request found in local-first prototype.");
}
console.log("Lead Intelligence OS static validation passed.");
console.log("Inline JavaScript parses; core dossier, scoring, evidence, review and local-storage hooks are present.");
