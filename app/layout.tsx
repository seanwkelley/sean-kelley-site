import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Hanken_Grotesk } from "next/font/google";
import { profile } from "./content";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swkelley.com"),
  title: `${profile.name} — ${profile.tag}`,
  description: profile.subhead,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.name} — ${profile.tag}`,
    description: profile.subhead,
    url: "https://swkelley.com",
    siteName: profile.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} ${body.variable}`}>
      <head>
        {/* Add `.js` before paint so reveal-on-scroll is a true progressive
            enhancement — content is never permanently hidden if JS fails. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
