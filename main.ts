import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I blocked one hour on my calendar to do nothing, and by lunch three people had booked it to ask why I needed an hour to do nothing.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The gate only accepts 1-200 characters, so refuse to write anything
// outside it instead of shipping an entry the judge never sees.
if (joke.length < 1 || joke.length > 200 || joke.includes("\n")) {
  throw new Error(`entry must be one line of 1-200 characters, got ${joke.length}`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, joke, "utf8");
