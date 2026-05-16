import { createOpenAPI } from "fumadocs-openapi/server";

export const openapi = createOpenAPI({
  input: ["https://variables.flowtagservices.com/openapi.json"],
  proxyUrl: "/api/proxy",
});
