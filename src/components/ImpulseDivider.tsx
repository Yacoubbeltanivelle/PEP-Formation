interface ImpulseDividerProps {
  className?: string;
  variant?: "full" | "short" | "micro";
}

export default function ImpulseDivider({
  className = "",
  variant = "short",
}: ImpulseDividerProps) {
  const widthClasses = {
    full: "w-full",
    short: "w-24",
    micro: "w-6",
  };

  return (
    <div
      className={`${widthClasses[variant]} h-0.5 bg-gradient-to-r from-pep-orange via-pep-mint to-pep-violet rounded-full ${className}`}
      role="separator"
      aria-hidden="true"
    />
  );
}
