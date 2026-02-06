"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { type Locale, type Dictionary, locales } from "@/lib/i18n";

const basePath = process.env.NODE_ENV === "production" ? "/PEP-Formation" : "";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname();

  // Get path without locale prefix for language switch
  const getPathWithNewLocale = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    return `/${newLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
  };

  const navItems = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/catalogue`, label: dict.nav.catalog },
    { href: `/${locale}/sessions`, label: dict.nav.sessions },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const otherLocale = locales.find((l) => l !== locale) as Locale;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-graphite/5">
      <nav className="container-main flex items-center justify-between h-16">
        {/* Logo - Full on desktop, Small on mobile */}
        <Link
          href={`/${locale}`}
          className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-pep-mint focus-visible:ring-offset-2 rounded"
          aria-label="PEP Formations - Accueil"
        >
          {/* Mobile: Logo petit */}
          <Image
            src={`${basePath}/brand/logo-petit.svg`}
            alt="PEP Formations"
            width={40}
            height={40}
            priority
            className="md:hidden"
          />
          {/* Desktop: Logo horizontal complet */}
          <Image
            src={`${basePath}/brand/logo-Long-Entier.svg`}
            alt="PEP Formations"
            width={160}
            height={48}
            priority
            className="hidden md:block"
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4 md:gap-6">
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pep-mint focus-visible:ring-offset-2 rounded px-3 py-2 ${
                    pathname === item.href
                      ? "text-pep-orange"
                      : "text-graphite/70 hover:text-graphite"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Switch */}
          <Link
            href={getPathWithNewLocale(otherLocale)}
            className="text-sm font-medium px-3 py-1.5 rounded-full border border-graphite/10 hover:border-pep-orange hover:text-pep-orange transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-pep-mint focus-visible:ring-offset-2"
            aria-label={`Switch to ${otherLocale === "en" ? "English" : "Français"}`}
          >
            {dict.nav.langSwitch}
          </Link>

          {/* CTA */}
          <Link
            href={`/${locale}/contact`}
            className="hidden sm:inline-flex btn-primary text-sm"
          >
            {dict.common.requestQuote}
          </Link>
        </div>
      </nav>
    </header>
  );
}
