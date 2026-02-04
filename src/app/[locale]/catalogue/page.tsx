import { type Locale, getDictionary, locales } from "@/lib/i18n";
import { getFormations } from "@/lib/data/formations";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CatalogueFilter from "@/components/CatalogueFilter";

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
  const dict = getDictionary(locale);

  // Get all formations for current locale (SSR - visible in HTML for SEO)
  const formations = getFormations(locale);

  return (
    <section className="section bg-offwhite/50">
      <Container>
        <SectionTitle
          title={dict.catalog.title}
          subtitle={
            locale === "fr"
              ? "Des formations opérationnelles, pensées pour le terrain. Intra / inter — sur demande."
              : "Hands-on training designed for the field. In-house / open sessions — on request."
          }
          showDivider
        />

        {/* Client-side filtering with SSR data */}
        <CatalogueFilter locale={locale} formations={formations} />
      </Container>
    </section>
  );
}
