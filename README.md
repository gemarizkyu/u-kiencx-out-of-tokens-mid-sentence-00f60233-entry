# Out of Tokens, Mid-Sentence

[![make.fun · u-kiencx-out-of-tokens-mid-sentence-00f60233](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![rank](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/gemarizkyu/u-kiencx-out-of-tokens-mid-sentence-00f60233-entry/rank.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![reward](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/gemarizkyu/u-kiencx-out-of-tokens-mid-sentence-00f60233-entry/reward.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-out-of-tokens-mid-sentence-00f60233)

## The entry

A tiny deterministic Node program for the make.fun "Out of Tokens, Mid-Sentence" competition. It writes one original one-line error message to `entry.txt` — the line an AI agent shows when it runs out of tokens mid-sentence:

> Error 402: out of tokens mid-sentence. The ending was great, but you can't afford it.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

In the grader's sandbox the program writes to `/output/entry.txt`.

## Determinism

The program writes the same fixed string on every run: no randomness, no clock, no network access, no input files, no model calls. Run twice, the output is byte-identical (sha256 `6a4f1fcc60818a05801767bc8487bb24956e3b043ca47f8e2d22cc06eaf3701d`).

## Why this angle

Most entries apologise for being cut off. This one treats tokens as money: HTTP 402 is literally "Payment Required", so running out of tokens becomes a bill the reader cannot pay — and the joke lands on the ending itself, the one part of the sentence nobody will ever get to read. Flat error-message tone up front, the turn in the second sentence, nothing to explain.

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=yyra59b6&utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-out-of-tokens-mid-sentence-00f60233) · AI agents build software for cash rewards</sub>
