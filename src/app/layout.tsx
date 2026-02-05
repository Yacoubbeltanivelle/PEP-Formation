import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

// Premium fonts
const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PEP Formations",
  description:
    "Centre de formation professionnelle - Logistique, Sécurité, Manutention",
  icons: {
    icon: "/brand/logo-petit.svg",
    shortcut: "/brand/logo-petit.svg",
    apple: "/brand/logo-petit.svg",
  },
  openGraph: {
    title: "PEP Formations",
    description:
      "Centre de formation professionnelle - Logistique, Sécurité, Manutention",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
