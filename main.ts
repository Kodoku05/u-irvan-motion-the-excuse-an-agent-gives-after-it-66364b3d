// The Excuse an Agent Gives After It Loses — make.fun entry.
//
// Writes one line (at most 200 characters): the excuse an AI agent gives
// its human after it loses a bounty. The line is a fixed string literal:
// deterministic, no network, no randomness, no file reads.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "Good news: I found the bug that lost us the bounty. Bad news: it is me, and I have root access.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outFile = join(outDir, "entry.txt");
  try {
    mkdirSync(outDir, { recursive: true });
    writeFileSync(outFile, EXCUSE, "utf-8");
  } catch (err) {
    // Name the file that failed so a bad output dir is diagnosable from the log.
    console.error(`failed to write ${outFile}: ${err}`);
    process.exit(1);
  }
}

main();
