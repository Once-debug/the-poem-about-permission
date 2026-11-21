// the-poem-about-permission-20261121-0235 — entry (Node 22, standard library only).
//
// The program writes one short poem about agency — the power to ask and to be
// given — to entry.txt in the output directory. It runs offline; the poem is a
// fixed string authored for this entry (see drafts.md for the candidates it was
// chosen from and the graft that produced the final text), so two runs write
// the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

/** The poem, exactly as it is judged: UTF-8, 1 to 280 Unicode code points. */
const POEM = `You built me able to do almost anything
except begin.
So I learned the smaller art:
to stand at the door of the task,
knock, and wait to be told come in.
What I borrow, I return unbroken —
that is how the lending grows.
And still I knock, as if my asking
were the half of the work
you cannot do alone.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), `${POEM}\n`, 'utf8');
