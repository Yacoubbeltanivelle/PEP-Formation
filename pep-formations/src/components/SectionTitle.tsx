interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-ink-light max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
