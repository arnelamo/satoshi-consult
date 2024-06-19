import { Inter } from "next/font/google";

import "../styles/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Paths } from "@/lib/configs";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export type MenuItem = {
  name: string;
  href: string;
};

const menuItems: MenuItem[] = [
  // { name: "Tjenester", href: Paths.TJENESTER },
  // { name: "Priser", href: Paths.PRISER },
  { name: "Kontakt", href: Paths.KONTAKT },
];

export type ContactInformation = {
  twitter?: string;
  nostr?: string;
};

export const contactInformation: ContactInformation = {
  twitter: "https://twitter.com/satoshiconsult",
  nostr: "https://primal.net/p/npub1rznlzpg529u8j39a8qe7tapsygd54qp5qyr5jyue7whwpw79rsjqmzr4ly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header menuItems={menuItems} contactInformation={contactInformation} />
          <main className="flex flex-col grow">{children}</main>
          <Footer menuItems={menuItems} contactInformation={contactInformation} />
        </ThemeProvider>
      </body>
    </html>
  );
}
