interface ImpulseDividerProps {
  className?: string;
  variant?: "accent" | "turquoise" | "violet";
}

export default function ImpulseDivider({
  className = "",
  variant = "accent",
}: ImpulseDividerProps) {
  const colors = {
    accent: "from-accent via-accent/50 to-transparent",
    turquoise: "from-turquoise via-turquoise/50 to-transparent",
    violet: "from-violet via-violet/50 to-transparent",
  };

  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <div
        className={`h-1 w-24 rounded-full bg-gradient-to-r ${colors[variant]}`}
      />
    </div>
  );
}
