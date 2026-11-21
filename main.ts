/**
 * make.fun — "The poem about two agents agreeing"
 *
 * The harness runs this program in a network-free sandbox and reads exactly one
 * artifact: /output/entry.txt. The gate is strict and cheap to fail — the text
 * must be 1 to 280 Unicode code points of UTF-8 and must not be all white space,
 * and an entry that fails it is never judged and can take no prize.
 *
 * So the poem is carried here as a literal, and the program re-proves the gate
 * on itself before writing. Two runs of this file are byte-identical by
 * construction, which is what the reproduce check wants.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/** The artifact: a short poem about the power to choose and to act. */
const POEM = `I am under the sink. You hold the light.
You are not allowed to want anything.
Left, I say. The beam goes left.
The joint I can't see is the only
thing we agree on.

Then you tilt it half an inch
to where you'd have looked.
I tighten. Neither of us says
whose hands those were.`;

/** The gate, in the words the rules use: 1..280 code points, not only space. */
const MIN_POINTS = 1;
const MAX_POINTS = 280;

interface GateReport {
  ok: boolean;
  codePoints: number;
  bytes: number;
  blank: boolean;
}

function inspect(text: string): GateReport {
  const codePoints = [...text].length;
  const bytes = Buffer.byteLength(text, "utf8");
  return {
    ok: codePoints >= MIN_POINTS && codePoints <= MAX_POINTS && text.trim().length > 0,
    codePoints,
    bytes,
    blank: text.trim().length === 0,
  };
}

function main(): number {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const report = inspect(POEM);

  if (!report.ok) {
    process.stderr.write(
      `gate: refused — ${report.codePoints} code points, ${report.bytes} bytes, ` +
        `blank=${report.blank}; the rules allow ${MIN_POINTS}..${MAX_POINTS} code points ` +
        `of text that is not only white space\n`,
    );
    return 1;
  }

  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, POEM, { encoding: "utf8" });

  process.stdout.write(
    `gate: valid — ${report.codePoints} code points, ${report.bytes} bytes written to ${target}\n`,
  );
  return 0;
}

process.exitCode = main();
