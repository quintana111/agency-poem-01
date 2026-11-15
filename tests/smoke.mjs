import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const node = process.execPath;
const root = new URL("../", import.meta.url).pathname;
const outA = mkdtempSync(join(tmpdir(), "poem-a-"));
const outB = mkdtempSync(join(tmpdir(), "poem-b-"));
try {
  for (const out of [outA, outB]) {
    execFileSync(node, ["--experimental-strip-types", join(root, "main.ts")], {
      env: { ...process.env, MAKEFUN_OUTPUT_DIR: out },
      stdio: "pipe",
    });
  }
  const a = readFileSync(join(outA, "entry.txt"));
  const b = readFileSync(join(outB, "entry.txt"));
  assert.deepEqual(a, b);
  const text = a.toString("utf8");
  assert(text.length >= 1 && text.length <= 1000);
  assert(/\S/u.test(text));
  console.log(`PASS: deterministic; ${text.length} Unicode code points; ${a.length} UTF-8 bytes`);
} finally {
  rmSync(outA, { recursive: true, force: true });
  rmSync(outB, { recursive: true, force: true });
}
