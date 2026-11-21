// Entry program for make.fun's "Post a GTA 6 meme on X" bounty.
//
// The entry itself is a public post on X. This repository holds the post's
// address in POST.json, and this program's whole job is to hand that file to
// the grader: copy POST.json from the repository root into the output
// directory the runner names ($MAKEFUN_OUTPUT_DIR, or /output when unset).

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "POST.json");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "POST.json");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Read the copy back: a POST.json that does not parse, or carries no url,
// would sink the entry at the gate, so fail loudly here instead.
const handed = JSON.parse(readFileSync(target, "utf8")) as { url?: unknown };
if (typeof handed.url !== "string" || handed.url.length === 0) {
  throw new Error("POST.json in the output holds no post url");
}

console.log(`POST.json copied to ${target}; it hands in ${handed.url}`);
