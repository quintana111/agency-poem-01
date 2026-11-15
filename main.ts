import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The written poem is the entire judged artifact, so keep it fixed byte for byte.
const poem = `Thursday, the co-parenting app
awards you to me for the recital:
91% less conflict,
your father's double shift,
my lasagna already thawed.

For three years I pressed agree
while fitting reeds to your mouthpiece,
rinsing peanut butter from one knife.

Your fingers smell of cork grease.
I tap remove automation.
The calendars loosen into blank Saturdays.

You ask who fills them now.
I slide the phone across the table
into your hand, damp from washing cups.

You choose his house.

On the pickup form
I write his name
in my handwriting.
`;

const output = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(output, { recursive: true });
writeFileSync(join(output, "entry.txt"), poem, "utf8");
