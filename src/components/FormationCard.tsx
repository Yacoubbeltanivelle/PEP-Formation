import type { Formation, Theme } from "@/lib/data/formations";
import { type Locale, getDictionary } from "@/lib/i18n";
import Link from "next/link";

interface FormationCardProps {
  formation: Formation;
  locale: Locale;
  variant?: "default" | "compact";
}

const themeColors: Record<Theme, string> = {
  safety: "badge-accent",
  logistics: "badge-turquoise",
  electrical: "badge-violet",
  fire: "badge-accent",
  handling: "badge-turquoise",
};

export default function FormationCard({
  formation,
  locale,
  variant = "default",
}: FormationCardProps) {
  const isCompact = variant === "compact";
  const dict = getDictionary(locale);

  return (
    <Link
      href={`/${locale}/formations/${formation.slug}`}
      className="card group block hover:border-accent transition-all duration-200"
    >
      <div className="flex flex-col h-full">
        {/* Theme badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`badge ${themeColors[formation.theme]}`}>
            {dict.themes[formation.theme]}
          </span>
          <span className="badge">{formation.durationHours}h</span>
        </div>

        {/* Title */}
        <h3
          className={`font-bold text-ink group-hover:text-accent transition-colors mb-2 ${
            isCompact ? "text-base" : "text-lg"
          }`}
        >
          {formation.title}
        </h3>

        {/* Description */}
        {!isCompact && (
          <p className="text-ink-light text-sm flex-1 mb-4">
            {formation.shortDescription}
          </p>
        )}

        {/* CTA hint */}
        <div className="flex items-center gap-1 text-accent text-sm font-medium">
          <span>{dict.common.learnMore}</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
