"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, type Dictionary, locales } from "@/lib/i18n";

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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-ink/10">
      <nav className="container-main flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 font-bold text-xl text-ink hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm"
        >
          <span className="text-accent">Pep</span>
          <span>Formations</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm px-2 py-1 ${
                    pathname === item.href
                      ? "text-accent"
                      : "text-ink-light hover:text-ink"
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
            className="text-sm font-medium px-3 py-1.5 rounded-full border border-ink/20 hover:border-accent hover:text-accent transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
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
