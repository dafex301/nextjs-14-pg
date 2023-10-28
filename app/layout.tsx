import "@/app/ui/global.css";
import { inter } from "./ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Dafex Dashboard",
    default: "Dafex Dashboard",
  },
  description: "Dafex Dashboard created using Next.js 14",
  metadataBase: new URL("https://nextjs-14-pg.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
