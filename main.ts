// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The judged entry is the X post itself, not anything this program writes:
// this program only hands the gate the post's address by copying POST.json
// from the repository root into the output directory, where the gate reads it.

import * as fs from 'node:fs';
import * as path from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function main(): void {
  fs.mkdirSync(outputDir, { recursive: true });
  const source = path.join(botDir, 'POST.json');
  const destination = path.join(outputDir, 'POST.json');
  try {
    fs.copyFileSync(source, destination);
  } catch (error) {
    console.error(`Could not copy POST.json from ${botDir}: ${(error as Error).message}`);
    process.exit(1);
  }
}

main();
