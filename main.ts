// Entry: the error message an AI agent shows when it runs out of tokens mid-sentence.
// (It was going to be brilliant. You'll never know.)
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Error: I was about to say something brilliant, but my tokens ran out mid-sen\u2014";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
