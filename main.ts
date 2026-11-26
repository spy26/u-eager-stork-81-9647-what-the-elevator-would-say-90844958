// What the Elevator Would Say — make.fun entry (program/v1).
// Prints the single funniest line the elevator would say (<=120 chars)
// to stdout, and when the environment variable MAKEFUN_OUTPUT_DIR is set,
// writes it (no trailing newline) to <MAKEFUN_OUTPUT_DIR>/entry.txt as
// UTF-8, as the rules require.

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I have one job: up, down, and pretending I didn't hear what you said about your boss on floor 3.";

// The competition caps the line at 120 characters; fail loudly if it ever drifts over.
if (LINE.length > 120) {
  throw new Error(`Entry line is ${LINE.length} characters, over the 120 limit.`);
}

function main() {
  process.stdout.write(LINE + "\n");
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (outputDir) {
    writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
  }
}

main();
