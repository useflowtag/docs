import { docs } from "collections/server";
import { loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/plugins/lucide-icons";
import type { DistributiveOmit, OperationOutput, PagesBuilder, WebhookOutput } from "fumadocs-openapi";
import { openapiPlugin, openapiSource } from "fumadocs-openapi/server";
import { openapi } from "./openapi";
import { docsContentRoute, docsImageRoute, docsRoute } from "./shared";

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader(
  {
    docs: docs.toFumadocsSource(),
    openapi: await openapiSource(openapi, {
      baseDir: "reference",
      name(output: DistributiveOmit<OperationOutput | WebhookOutput, "path">, document: PagesBuilder["document"]["dereferenced"]) {
        const prefix = (document.info?.title ?? "api")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");
        const itemPath = output.type === "operation" ? output.item.path : output.item.name;
        const slug = itemPath
          .split("/")
          .filter((s: string) => s && !/^v\d+$/.test(s))
          .map((s: string) => s.replace(/\{[^}]+\}/g, ""))
          .filter(Boolean)
          .join("-");
        return `${prefix}/${output.item.method}-${slug}`;
      },
    }),
  },
  {
    baseUrl: docsRoute,
    plugins: [lucideIconsPlugin(), openapiPlugin()],
  },
);

export function getPageImage(page: (typeof source)["$inferPage"]) {
  const segments = [...page.slugs, "image.png"];

  return {
    segments,
    url: `${docsImageRoute}/${segments.join("/")}`,
  };
}

export function getPageMarkdownUrl(page: (typeof source)["$inferPage"]) {
  const segments = [...page.slugs, "content.md"];

  return {
    segments,
    url: `${docsContentRoute}/${segments.join("/")}`,
  };
}

export async function getLLMText(page: (typeof source)["$inferPage"]) {
  const processed =
    "getText" in page.data
      ? await (page.data as { getText(key: string): Promise<string> }).getText("processed")
      : "";

  return `# ${page.data.title} (${page.url})

${processed}`;
}
