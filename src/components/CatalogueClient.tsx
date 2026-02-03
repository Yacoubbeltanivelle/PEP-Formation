"use client";

import { useSearchParams } from "next/navigation";
import { type Locale, getDictionary } from "@/lib/i18n";
import { formations, type Theme } from "@/lib/data/formations";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import FormationCard from "@/components/FormationCard";
import FiltersBar from "@/components/FiltersBar";
import Link from "next/link";

interface CatalogueClientProps {
  locale: Locale;
}

export default function CatalogueClient({ locale }: CatalogueClientProps) {
  const dict = getDictionary(locale);
  const searchParams = useSearchParams();

  // Get filter values from URL
  const themeFilter = searchParams.get("theme");
  const audienceFilter = searchParams.get("audience");
  const maxHoursFilter = searchParams.get("maxHours");

  // Get unique themes from formations
  const themes = [...new Set(formations.map((f) => f.theme))] as Theme[];

  // Filter formations
  let filteredFormations = [...formations];

  if (themeFilter) {
    filteredFormations = filteredFormations.filter(
      (f) => f.theme === themeFilter,
    );
  }

  if (audienceFilter) {
    filteredFormations = filteredFormations.filter(
      (f) => f.audience === audienceFilter || f.audience === "both",
    );
  }

  if (maxHoursFilter) {
    const maxHours = parseInt(maxHoursFilter, 10);
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
          currentTheme={themeFilter || undefined}
          currentAudience={audienceFilter || undefined}
          currentMaxHours={maxHoursFilter || undefined}
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
