import Link from "next/link";
import Image from "next/image";
import { type Dictionary, type Locale } from "@/lib/i18n";

const basePath = process.env.NODE_ENV === "production" ? "/PEP-Formation" : "";

interface FooterProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Footer({ dict, locale }: FooterProps) {
  return (
    <footer className="bg-graphite text-white">
      <div className="container-main py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand with logo blanc */}
          <div>
            <Link
              href={`/${locale}`}
              className="inline-block mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-pep-mint focus-visible:ring-offset-2 focus-visible:ring-offset-graphite rounded"
              aria-label="PEP Formations - Accueil"
            >
              <Image
                src={`${basePath}/brand/logo-Blanc.svg`}
                alt="PEP Formations"
                width={140}
                height={42}
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-offwhite/60 text-sm leading-relaxed">
              {dict.common.siteDescription}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-offwhite">
              {dict.common.contact}
            </h3>
            <ul className="space-y-2 text-sm text-offwhite/60">
              <li>{dict.footer.address}</li>
              <li>
                <a
                  href={`tel:${dict.footer.phoneE164}`}
                  className="hover:text-pep-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pep-mint focus-visible:ring-offset-2 focus-visible:ring-offset-graphite rounded-sm"
                >
                  {dict.footer.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${dict.footer.email}`}
                  className="hover:text-pep-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pep-mint focus-visible:ring-offset-2 focus-visible:ring-offset-graphite rounded-sm"
                >
                  {dict.footer.email}
                </a>
              </li>
              <li className="pt-2 text-xs opacity-50">{dict.footer.siret}</li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4 text-offwhite">
              {locale === "fr" ? "Informations légales" : "Legal Information"}
            </h3>
            <ul className="space-y-2 text-sm text-offwhite/60">
              <li>
                <Link
                  href={`/${locale}/mentions-legales`}
                  className="hover:text-pep-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pep-mint focus-visible:ring-offset-2 focus-visible:ring-offset-graphite rounded-sm"
                >
                  {dict.footer.legalNotice}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/confidentialite`}
                  className="hover:text-pep-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pep-mint focus-visible:ring-offset-2 focus-visible:ring-offset-graphite rounded-sm"
                >
                  {dict.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cookies`}
                  className="hover:text-pep-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pep-mint focus-visible:ring-offset-2 focus-visible:ring-offset-graphite rounded-sm"
                >
                  {dict.footer.cookies}
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <p className="text-xs text-offwhite/50 leading-relaxed mb-4">
              {dict.footer.disclaimer}
            </p>
            <p className="text-xs text-offwhite/40">{dict.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
