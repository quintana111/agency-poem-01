import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The written poem is the entire judged artifact, so keep it fixed byte for byte.
const poem = `I kept asking the rain its permission.

At the bus stop, a woman folded
the map of the city into a paper boat
and set it in the gutter. Follow this,
she said to no one, and the water went
the only way the water could.

I had two good hands and one life
clenched between them, a ticket
with no name for where.
Behind me, the house I was born in
practised my name until it sounded like stay.

I set the suitcase down.
The river took the map.
Then I lifted it again.
Not because the world had opened,
but because my feet had.
`;

const output = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(output, { recursive: true });
writeFileSync(join(output, "entry.txt"), poem, "utf8");
