import Image from "next/image";
import Link from "next/link";
import { type Locale } from "@/lib/i18n";

interface LogoProps {
  locale: Locale;
  variant?: "full" | "mark";
  theme?: "dark" | "light";
  className?: string;
}

export default function Logo({
  locale,
  variant = "full",
  theme = "dark",
  className = "",
}: LogoProps) {
  // Map variants to actual logo files
  const logoSrc =
    variant === "mark"
      ? "/brand/logo-petit.svg"
      : theme === "light"
        ? "/brand/logo-Blanc.svg"
        : "/brand/logo-Long-Entier.svg";

  const sizes =
    variant === "mark" ? { width: 40, height: 40 } : { width: 160, height: 48 };

  return (
    <Link
      href={`/${locale}`}
      className={`inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-pep-mint focus-visible:ring-offset-2 rounded ${className}`}
      aria-label="PEP Formations - Retour à l'accueil"
    >
      <Image
        src={logoSrc}
        alt="PEP Formations"
        width={sizes.width}
        height={sizes.height}
        priority
        className="h-auto"
      />
    </Link>
  );
}
