import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: This unit's 'let me just quickly check something' has consumed four hours, one career, and a marriage.";

// The gate only accepts a single line of 1-160 characters: refuse to write
// an out-of-range line, and refuse any control character (newlines included)
// that would silently split or corrupt this one-line entry.
if (LINE.length < 1 || LINE.length > 160 || /[\x00-\x1F\x7F]/.test(LINE)) {
  throw new Error(`entry line must be a single line of 1-160 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
