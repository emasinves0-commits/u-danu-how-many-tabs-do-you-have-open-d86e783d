import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// The answer is 347: an odd, specific, honestly-counted three-digit hoard.
// It sits far above the field's round guesses (7, 58) yet stays believable
// as one real person's real tab count — a chronic never-closes-tabs life,
// chosen over higher shock numbers precisely because it sounds counted,
// not invented.
const ANSWER = "347";

if (!/^\d+$/.test(ANSWER)) {
  throw new Error("Answer must be digits only");
}

// An empty env value is treated the same as unset, so a stray
// MAKEFUN_OUTPUT_DIR="" can never resolve to the current directory.
const rawOutputDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
const outputDir = resolve(rawOutputDir);
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ANSWER, "utf8");
