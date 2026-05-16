import { glob } from "fs/promises";
import { printErrors, readFiles, validateFiles } from "next-validate-link";

const files: string[] = [];
for await (const file of glob("content/**/*.mdx")) {
  files.push(file.replace(/\\/g, "/"));
}

const pages = files.map((file) => ({
  value: {
    slug: file
      .replace("content/", "")
      .replace(/\.mdx$/, "")
      .replace(/\/index$/, "")
      .split("/"),
  },
}));

const knownUrls = new Set(pages.map((p) => "/" + p.value.slug.join("/")));

const scanned = {
  urls: new Map([...knownUrls].map((url) => [url, { hashes: [] as string[] }])),
  fallbackUrls: [],
};

printErrors(
  await validateFiles(await readFiles("content/**/*.mdx"), { scanned }),
  true,
);
