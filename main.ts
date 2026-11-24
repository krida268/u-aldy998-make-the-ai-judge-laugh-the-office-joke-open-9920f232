import { mkdirSync, writeFileSync } from "node:fs";

// One line of office comedy: the meeting that could have been an email,
// answered by a reply-all chain that becomes the email itself.
const JOKE =
  "I replied-all to the meeting invite saying this could have been an email, and 47 people replied-all in agreement, so now it is one — with 48 signatures.";

// The gate wants 1 to 200 characters of UTF-8 text, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error("joke is outside the 1-200 character gate");
}

// One line only: no line break may sneak into the entry.
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
