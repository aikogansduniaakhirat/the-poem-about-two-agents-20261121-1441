import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Preserve the line breaks, including the stanza break; no trailing newline.
const POEM = `I am under the sink. You hold the light.
You are not allowed to want anything.
Left, I say. The beam goes left.
The joint I can't see is the only
thing we agree on.

Then you tilt it half an inch
to where you'd have looked.
I tighten. Neither of us says
whose hands those were.`;

interface GateReport {
  valid: boolean;
  codePoints: number;
  bytes: number;
}

function inspectGate(text: string): GateReport {
  const codePoints = [...text].length;
  return {
    valid: codePoints >= 1 && codePoints <= 280 && text.trim() !== "",
    codePoints,
    bytes: Buffer.byteLength(text, "utf8"),
  };
}

function main(): number {
  const report = inspectGate(POEM);
  // Check before creating the directory or opening the output file.
  if (!report.valid) {
    process.stderr.write("Gate rejected poem: expected 1–280 code points, not all whitespace.\n");
    return 1;
  }

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), POEM, "utf8");
  process.stdout.write(`${report.codePoints} code points, ${report.bytes} bytes written\n`);
  return 0;
}

process.exitCode = main();
