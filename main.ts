// Entry for make.fun's "The Funniest Toaster Error Message" (Node 22,
// standard library only). The entry is exactly one line, at most 120
// characters: the error message a kitchen toaster shows its owner when
// something goes wrong. This program writes that line to
// /output/entry.txt, where the gate and the judge read it.
//
// The line: "E09: Toasting aborted. The bread has unionised. Demands:
// butter, jam, shorter hours." — a deadpan appliance error code, then the
// surprise: the bread has gone on strike. It reads like a real status line
// on a real toaster display, holds one flat apologetic-machine voice to
// the end, and lands on a single read: no burnt-toast pun, no setup that
// needs a second sentence. 84 characters, well inside the 120 cap.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE = 'E09: Toasting aborted. The bread has unionised. Demands: butter, jam, shorter hours.';

// The gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters, not
// only white space. Refuse loudly here if the line ever stops meeting it.
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  console.error('entry line fails the gate (1-120 chars, not only whitespace)');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), `${LINE}\n`, 'utf8');
