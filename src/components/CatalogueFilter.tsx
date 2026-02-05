"use client";

import { useState, useCallback, useMemo } from "react";
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

// Helper to get initial theme from hash (client-side only)
function getInitialTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.replace("#", "") as Theme;
  return THEMES.includes(hash) ? hash : null;
}

export default function CatalogueFilter({
  locale,
  formations,
}: CatalogueFilterProps) {
  // Initialize state lazily from URL hash
  const [activeTheme, setActiveTheme] = useState<Theme | null>(() =>
    getInitialTheme(),
  );
  const dict = getDictionary(locale);

  // Update hash when filter changes
  const handleFilterChange = useCallback((theme: Theme | null) => {
    setActiveTheme(theme);
    if (theme) {
      window.history.replaceState(null, "", `#${theme}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  // Filter formations
  const filteredFormations = useMemo(
    () =>
      activeTheme
        ? formations.filter((f) => f.theme === activeTheme)
        : formations,
    [activeTheme, formations],
  );

  return (
    <>
      {/* Sticky Filter Bar */}
      <div className="sticky top-16 z-40 -mx-6 px-6 py-4 bg-white/95 backdrop-blur-sm border-b border-graphite/5 mb-8">
        <div className="flex items-center justify-between gap-4">
          {/* Filter Chips - Horizontal scroll on mobile */}
          <nav
            aria-label={dict.catalog.filterTheme}
            className="flex-1 overflow-x-auto scrollbar-hide"
          >
            <div className="flex gap-2 pb-1">
              <button
                type="button"
                onClick={() => handleFilterChange(null)}
                className={`chip whitespace-nowrap relative ${
                  activeTheme === null ? "chip-active" : ""
                }`}
              >
                {dict.catalog.allThemes}
                {activeTheme === null && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-pep-orange via-pep-mint to-pep-violet rounded-full" />
                )}
              </button>
              {THEMES.map((theme) => (
                <button
                  key={theme}
                  type="button"
                  onClick={() => handleFilterChange(theme)}
                  className={`chip whitespace-nowrap relative ${
                    activeTheme === theme ? "chip-active" : ""
                  }`}
                >
                  {dict.themes[theme]}
                  {activeTheme === theme && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-pep-orange via-pep-mint to-pep-violet rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* Result count - Right aligned */}
          <span className="text-sm text-graphite-lighter shrink-0 hidden sm:block">
            {filteredFormations.length}{" "}
            {locale === "fr" ? "formation(s)" : "training(s)"}
          </span>
        </div>
      </div>

      {/* Formations Grid */}
      {filteredFormations.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFormations.map((formation) => (
            <FormationCard
              key={formation.slug}
              formation={formation}
              locale={locale}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-graphite-lighter text-lg mb-6">
            {dict.catalog.noResults}
          </p>
          <button
            type="button"
            onClick={() => handleFilterChange(null)}
            className="btn-primary"
          >
            {dict.catalog.resetFilters}
          </button>
        </div>
      )}

      {/* Mobile count */}
      <p className="text-center text-graphite-lighter text-sm mt-10 sm:hidden">
        {filteredFormations.length}{" "}
        {locale === "fr"
          ? "formation(s) disponible(s)"
          : "training(s) available"}
      </p>
    </>
  );
}
