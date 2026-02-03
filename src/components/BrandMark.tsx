interface BrandMarkProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-3xl",
};

export default function BrandMark({
  size = "md",
  className = "",
}: BrandMarkProps) {
  return (
    <div
      className={`flex items-center gap-2 font-bold ${sizes[size]} ${className}`}
    >
      <span className="text-accent">Pep</span>
      <span className="text-ink">Formations</span>
    </div>
  );
}
