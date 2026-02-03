import { type Locale, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";
import SessionsPageClient from "@/components/SessionsPageClient";

interface SessionsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function SessionsPage({ params }: SessionsPageProps) {
  const { locale: localeParam } = await params;

  if (!locales.includes(localeParam as Locale)) {
    notFound();
  }

  const locale = localeParam as Locale;

  return <SessionsPageClient locale={locale} />;
}
