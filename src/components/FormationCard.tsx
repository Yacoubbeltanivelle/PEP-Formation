import type { Formation, Theme } from "@/lib/data/formations";
import { type Locale, getDictionary } from "@/lib/i18n";
import Link from "next/link";
import Image from "next/image";

// Préfixe pour les assets statiques (GitHub Pages)
const basePath = process.env.NODE_ENV === "production" ? "/PEP-Formation" : "";

interface FormationCardProps {
  formation: Formation;
  locale: Locale;
  variant?: "default" | "compact";
}

const themeColors: Record<
  Theme,
  { badge: string; accent: string; image: string }
> = {
  safety: {
    badge: "badge-accent",
    accent: "border-t-pep-orange",
    image: `${basePath}/images/category-security.png`,
  },
  logistics: {
    badge: "badge-turquoise",
    accent: "border-t-pep-mint",
    image: `${basePath}/images/category-handling.png`,
  },
  electrical: {
    badge: "badge-violet",
    accent: "border-t-pep-violet",
    image: `${basePath}/images/category-electricity.png`,
  },
  fire: {
    badge: "badge-accent",
    accent: "border-t-pep-orange",
    image: `${basePath}/images/category-security.png`,
  },
  handling: {
    badge: "badge-turquoise",
    accent: "border-t-pep-mint",
    image: `${basePath}/images/category-handling.png`,
  },
};

export default function FormationCard({
  formation,
  locale,
  variant = "default",
}: FormationCardProps) {
  const isCompact = variant === "compact";
  const dict = getDictionary(locale);
  const colors = themeColors[formation.theme];

  return (
    <Link
      href={`/${locale}/formations/${formation.slug}`}
      className={`card group block border-t-2 ${colors.accent} hover:shadow-lg hover:border-graphite/10 transition-all duration-150 overflow-hidden`}
    >
      {/* Category Image */}
      {!isCompact && (
        <div className="relative h-32 -mx-6 -mt-6 mb-4 overflow-hidden">
          <Image
            src={colors.image}
            alt={dict.themes[formation.theme]}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
        </div>
      )}
      <div className="flex flex-col h-full">
        {/* Theme badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`badge ${colors.badge}`}>
            {dict.themes[formation.theme]}
          </span>
          <span className="badge">{formation.durationHours}h</span>
        </div>

        {/* Title */}
        <h3
          className={`font-semibold text-graphite group-hover:text-pep-orange transition-colors duration-150 mb-2 ${
            isCompact ? "text-base" : "text-lg"
          }`}
        >
          {formation.title}
        </h3>

        {/* Description */}
        {!isCompact && (
          <p className="text-graphite-lighter text-sm flex-1 mb-4 leading-relaxed">
            {formation.shortDescription}
          </p>
        )}

        {/* CTA hint */}
        <div className="flex items-center gap-1 text-pep-orange text-sm font-medium mt-auto">
          <span>{dict.common.learnMore}</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-150"
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
