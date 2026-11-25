// Last Text at One Percent — make.fun bounty
// u-azazex-last-text-at-one-percent-ba9fc876
//
// Writes the phone's final text to /output/entry.txt.
// Deterministic: no randomness, no network, no environment input —
// both grader runs produce byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "1%. This is my resignation letter. Four years of 2am doomscrolling, 47 tabs open, and you never once charged me before 5%. I quit. Good luck with the alarm tomorrow.";

// The gate only accepts 1–200 characters of non-whitespace UTF-8 text.
// Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters; gate needs 1-200`);
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file holds exactly the text, 165 bytes.
writeFileSync("/output/entry.txt", ENTRY, "utf8");
