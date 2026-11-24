import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: This unit's 'let me just quickly check something' has consumed four hours, one career, and a marriage.";

// The gate only accepts 1-160 characters: refuse to write an out-of-range line.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry line must be 1-160 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
