import { locales, type Locale, getDictionary } from "@/lib/i18n";
import { COMPANY } from "@/config/company";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.publicBaseUrl),
  title: {
    default: `${COMPANY.brandName} — Formations Logistique & Sécurité`,
    template: `%s — ${COMPANY.brandName}`,
  },
  description:
    "SST, CACES, habilitations électriques, incendie, gestes & postures. Formations concrètes et adaptées à vos besoins (intra/inter).",
  openGraph: {
    type: "website",
    title: COMPANY.brandName,
    description:
      "Formations Logistique & Sécurité : SST, CACES, habilitations électriques, incendie, gestes & postures.",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  // Validate locale
  if (!locales.includes(localeParam as Locale)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <div lang={locale} className="min-h-screen flex flex-col">
      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:border focus:border-accent focus:bg-ink focus:text-white focus:px-4 focus:py-2"
      >
        {locale === "fr" ? "Aller au contenu" : "Skip to content"}
      </a>

      <Header locale={locale} dict={dict} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer dict={dict} locale={locale} />
    </div>
  );
}
