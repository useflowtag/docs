import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  redirects() {
    return [
      {
        source: "/docs",
        destination: "/core/quickstart",
        permanent: false,
      },
      {
        source: "/",
        destination: "/core/quickstart",
        permanent: false,
      },
    ];
  },
};

export default withMDX(config);
