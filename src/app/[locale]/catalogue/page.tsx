import { type Locale, getDictionary, locales } from "@/lib/i18n";
import { getFormations, type Theme } from "@/lib/data/formations";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import FormationCard from "@/components/FormationCard";

interface CataloguePageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const THEMES: Theme[] = [
  "safety",
  "logistics",
  "electrical",
  "fire",
  "handling",
];

export default async function CataloguePage({ params }: CataloguePageProps) {
  const { locale: localeParam } = await params;

  if (!locales.includes(localeParam as Locale)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  // Get all formations for current locale (no server-side filtering for static export)
  const allFormations = getFormations(locale);

  return (
    <section className="section">
      <Container>
        <SectionTitle
          title={dict.catalog.title}
          subtitle={dict.catalog.subtitle}
        />

        {/* Filter Links - All formations shown, JS can hide/show if enabled */}
        <nav aria-label={dict.catalog.filterTheme} className="mb-8">
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/${locale}/catalogue`}
              className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-accent text-white"
            >
              {dict.catalog.allThemes}
            </Link>
            {THEMES.map((theme) => (
              <Link
                key={theme}
                href={`/${locale}/catalogue#${theme}`}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-surface text-ink hover:bg-surface-dark"
              >
                {dict.themes[theme]}
              </Link>
            ))}
          </div>
        </nav>

        {/* Formations Grid - Fully SSR, all formations shown for SEO */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allFormations.map((formation) => (
            <FormationCard
              key={formation.slug}
              formation={formation}
              locale={locale}
            />
          ))}
        </div>

        {/* SEO: Show total count */}
        <p className="text-center text-ink-lighter text-sm mt-8">
          {allFormations.length}{" "}
          {locale === "fr"
            ? "formation(s) disponible(s)"
            : "training(s) available"}
        </p>
      </Container>
    </section>
  );
}
