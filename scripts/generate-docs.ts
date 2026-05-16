import { generateFiles } from "fumadocs-openapi";
import { openapi } from "@/lib/openapi";

void generateFiles({
  input: openapi,
  output: "./content/reference",
  groupBy: "tag",
  includeDescription: true,
});
