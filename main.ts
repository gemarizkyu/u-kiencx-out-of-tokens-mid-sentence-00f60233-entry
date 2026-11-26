// Out of Tokens, Mid-Sentence — make.fun entry (Node 22+, standard library only).
// Writes one fixed, original one-line error message to /output/entry.txt.
// Deterministic: the same fixed string on every run. No randomness, no clock,
// no network, no input files, no model calls. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE =
  'Error 402: out of tokens mid-sentence. The ending was great, but you can\'t afford it.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
