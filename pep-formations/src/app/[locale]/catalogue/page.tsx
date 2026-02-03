import { type Locale, getDictionary, locales } from "@/lib/i18n";
import { formations, type Theme, type Audience } from "@/lib/data/formations";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import FormationCard from "@/components/FormationCard";
import FiltersBar from "@/components/FiltersBar";
import Link from "next/link";

interface CataloguePageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    theme?: string;
    audience?: string;
    maxHours?: string;
  }>;
}

export default async function CataloguePage({
  params,
  searchParams,
}: CataloguePageProps) {
  const { locale: localeParam } = await params;
  const filters = await searchParams;

  if (!locales.includes(localeParam as Locale)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  // Get unique themes from formations
  const themes = [...new Set(formations.map((f) => f.theme))] as Theme[];

  // Filter formations
  let filteredFormations = [...formations];

  if (filters.theme) {
    filteredFormations = filteredFormations.filter(
      (f) => f.theme === filters.theme,
    );
  }

  if (filters.audience) {
    filteredFormations = filteredFormations.filter(
      (f) => f.audience === filters.audience || f.audience === "both",
    );
  }

  if (filters.maxHours) {
    const maxHours = parseInt(filters.maxHours, 10);
    filteredFormations = filteredFormations.filter(
      (f) => f.durationHours <= maxHours,
    );
  }

  return (
    <section className="section">
      <Container>
        <SectionTitle
          title={dict.catalog.title}
          subtitle={dict.catalog.subtitle}
        />

        <FiltersBar
          locale={locale}
          dict={dict}
          themes={themes}
          currentTheme={filters.theme}
          currentAudience={filters.audience}
          currentMaxHours={filters.maxHours}
        />

        {filteredFormations.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFormations.map((formation) => (
              <FormationCard
                key={formation.slug}
                formation={formation}
                locale={locale}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-ink-light text-lg mb-4">
              {dict.catalog.noResults}
            </p>
            <Link href={`/${locale}/catalogue`} className="btn-primary">
              {dict.catalog.resetFilters}
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
