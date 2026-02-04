"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { type Dictionary, type Locale } from "@/lib/i18n";
import { type Theme } from "@/lib/data/formations";

interface FiltersBarProps {
  locale: Locale;
  dict: Dictionary;
  themes: Theme[];
  currentTheme?: string;
  currentAudience?: string;
  currentMaxHours?: string;
}

export default function FiltersBar({
  locale,
  dict,
  themes,
  currentTheme,
  currentAudience,
  currentMaxHours,
}: FiltersBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/${locale}/catalogue?${params.toString()}`);
  };

  const resetFilters = () => {
    router.push(`/${locale}/catalogue`);
  };

  const hasFilters = currentTheme || currentAudience || currentMaxHours;

  const themeLabels: Record<Theme, string> = {
    safety: dict.themes.safety,
    logistics: dict.themes.logistics,
    electrical: dict.themes.electrical,
    fire: dict.themes.fire,
    handling: dict.themes.handling,
  };

  return (
    <div className="bg-surface rounded-xl p-4 md:p-6 mb-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Theme Filter */}
        <div>
          <label htmlFor="theme-filter" className="form-label">
            {dict.catalog.filterTheme}
          </label>
          <select
            id="theme-filter"
            className="form-input"
            value={currentTheme || ""}
            onChange={(e) => updateFilter("theme", e.target.value)}
          >
            <option value="">{dict.catalog.allThemes}</option>
            {themes.map((theme) => (
              <option key={theme} value={theme}>
                {themeLabels[theme]}
              </option>
            ))}
          </select>
        </div>

        {/* Audience Filter */}
        <div>
          <label htmlFor="audience-filter" className="form-label">
            {dict.catalog.filterAudience}
          </label>
          <select
            id="audience-filter"
            className="form-input"
            value={currentAudience || ""}
            onChange={(e) => updateFilter("audience", e.target.value)}
          >
            <option value="">{dict.catalog.allAudiences}</option>
            <option value="B2B">{dict.catalog.audience.B2B}</option>
            <option value="B2C">{dict.catalog.audience.B2C}</option>
          </select>
        </div>

        {/* Max Hours Filter */}
        <div>
          <label htmlFor="hours-filter" className="form-label">
            {dict.catalog.filterDuration}
          </label>
          <select
            id="hours-filter"
            className="form-input"
            value={currentMaxHours || ""}
            onChange={(e) => updateFilter("maxHours", e.target.value)}
          >
            <option value="">∞</option>
            <option value="7">7{dict.catalog.hours}</option>
            <option value="14">14{dict.catalog.hours}</option>
            <option value="21">21{dict.catalog.hours}</option>
          </select>
        </div>

        {/* Reset Button */}
        <div className="flex items-end">
          {hasFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="btn-secondary w-full text-sm"
            >
              {dict.catalog.resetFilters}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
