import { type Dictionary } from "@/lib/i18n";

interface FooterProps {
  dict: Dictionary;
}

export default function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-ink text-white">
      <div className="container-main py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <span className="text-accent">Pep</span>
              <span>Formations</span>
            </div>
            <p className="text-ink-lighter text-sm leading-relaxed">
              {dict.common.siteDescription}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{dict.common.contact}</h3>
            <ul className="space-y-2 text-sm text-ink-lighter">
              <li>{dict.footer.address}</li>
              <li>
                <a
                  href={`tel:${dict.footer.phone.replace(/\s/g, "")}`}
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink rounded-sm"
                >
                  {dict.footer.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${dict.footer.email}`}
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink rounded-sm"
                >
                  {dict.footer.email}
                </a>
              </li>
              <li className="pt-2 text-xs opacity-75">{dict.footer.siret}</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs text-ink-lighter leading-relaxed mb-4">
              {dict.footer.disclaimer}
            </p>
            <p className="text-xs text-ink-lighter opacity-75">
              {dict.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
