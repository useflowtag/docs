import { openapi } from "@/lib/openapi";

const proxy = openapi.createProxy({
  allowedOrigins: ["https://variables.flowtagservices.com"],
  overrides: {
    response: (res) => {
      const headers = new Headers(res.headers);
      headers.delete("content-encoding");
      headers.delete("content-length");
      return new Response(res.body, {
        status: res.status,
        statusText: res.statusText,
        headers,
      });
    },
  },
});

export const GET = proxy.GET;
export const POST = proxy.POST;
export const PUT = proxy.PUT;
export const DELETE = proxy.DELETE;
export const PATCH = proxy.PATCH;
export const HEAD = proxy.HEAD;
