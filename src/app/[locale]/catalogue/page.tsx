import { type Locale, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";
import CatalogueClient from "@/components/CatalogueClient";
import { Suspense } from "react";

interface CataloguePageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function CataloguePage({ params }: CataloguePageProps) {
  const { locale: localeParam } = await params;

  if (!locales.includes(localeParam as Locale)) {
    notFound();
  }

  const locale = localeParam as Locale;

  return (
    <Suspense
      fallback={
        <div className="section">
          <div className="container-main animate-pulse">
            <div className="h-8 bg-surface rounded mb-4 w-1/3" />
            <div className="h-12 bg-surface rounded mb-8" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-48 bg-surface rounded" />
              ))}
            </div>
          </div>
        </div>
      }
    >
      <CatalogueClient locale={locale} />
    </Suspense>
  );
}
