// The GPS Swears It Was a Shortcut — entry program (Node.js, stdlib only).
// Writes the GPS's one-line excuse to /output/entry.txt (or $OUTPUT_DIR/entry.txt
// when OUTPUT_DIR is set, for local verification runs).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I took you past the lake because the map promised a bridge. There is no bridge. There is, however, a very judgmental swan.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
