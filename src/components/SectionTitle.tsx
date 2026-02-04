import ImpulseDivider from "./ImpulseDivider";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  showDivider?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  showDivider = false,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""} ${className}`}>
      {showDivider && (
        <ImpulseDivider
          variant="short"
          className={`mb-6 ${centered ? "mx-auto" : ""}`}
        />
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-graphite mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-graphite-lighter max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
