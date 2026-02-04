"use client";

import { useState } from "react";
import { type Locale, getDictionary } from "@/lib/i18n";
import { type Formation, type Theme } from "@/lib/data/formations";
import FormationCard from "@/components/FormationCard";

interface CatalogueFilterProps {
  locale: Locale;
  formations: Formation[];
}

const THEMES: Theme[] = [
  "safety",
  "logistics",
  "electrical",
  "fire",
  "handling",
];

export default function CatalogueFilter({
  locale,
  formations,
}: CatalogueFilterProps) {
  const [activeTheme, setActiveTheme] = useState<Theme | null>(null);
  const dict = getDictionary(locale);

  // Filter formations based on selected theme
  const filteredFormations = activeTheme
    ? formations.filter((f) => f.theme === activeTheme)
    : formations;

  return (
    <>
      {/* Interactive Filter Buttons */}
      <nav aria-label={dict.catalog.filterTheme} className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTheme(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              activeTheme === null
                ? "bg-accent text-white"
                : "bg-surface text-ink hover:bg-surface-dark"
            }`}
          >
            {dict.catalog.allThemes}
          </button>
          {THEMES.map((theme) => (
            <button
              key={theme}
              type="button"
              onClick={() => setActiveTheme(theme)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeTheme === theme
                  ? "bg-accent text-white"
                  : "bg-surface text-ink hover:bg-surface-dark"
              }`}
            >
              {dict.themes[theme]}
            </button>
          ))}
        </div>
      </nav>

      {/* Filtered Formations Grid */}
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
          <button
            type="button"
            onClick={() => setActiveTheme(null)}
            className="btn-primary"
          >
            {dict.catalog.resetFilters}
          </button>
        </div>
      )}

      {/* Count */}
      <p className="text-center text-ink-lighter text-sm mt-8">
        {filteredFormations.length}{" "}
        {locale === "fr"
          ? "formation(s) disponible(s)"
          : "training(s) available"}
      </p>
    </>
  );
}
