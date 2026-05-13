import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Geist, JetBrains_Mono } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});
const _jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
});

export const metadata = {
  title: {
    default: "Flowtag Docs",
    template: "%s – Flowtag Docs",
  },
  description: "Documentation for Flowtag",
};
export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen antialiased selection:bg-white selection:text-black">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
