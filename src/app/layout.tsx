import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { profile } from "@/content";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${profile.company.legalName} — ${profile.name}`,
    template: `%s — ${profile.company.legalName}`,
  },
  description: profile.homeIntro[0] ?? profile.subheadline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
