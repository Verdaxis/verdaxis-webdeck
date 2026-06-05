import type { Metadata } from "next";
import { DM_Serif_Display, Lato, Montserrat } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const displayFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
});

const headingFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const bodyFont = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Verdaxis Decks",
  description: "Interactive presentations for Verdaxis — the trusted exchange for low-carbon fuels.",
  icons: { icon: "/images/logos/verdaxis-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${headingFont.variable} ${bodyFont.variable} font-body antialiased`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
