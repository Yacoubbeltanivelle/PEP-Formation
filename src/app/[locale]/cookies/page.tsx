import { type Locale, getDictionary, locales } from "@/lib/i18n";
import { COMPANY } from "@/config/company";
import { notFound } from "next/navigation";
import Container from "@/components/Container";

interface CookiesPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function CookiesPage({ params }: CookiesPageProps) {
  const { locale: localeParam } = await params;

  if (!locales.includes(localeParam as Locale)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  const isFr = locale === "fr";

  return (
    <section className="section">
      <Container>
        <h1 className="text-3xl font-bold text-ink mb-8">
          {dict.legal.cookiesTitle}
        </h1>

        <div className="prose prose-lg max-w-3xl space-y-8">
          <section className="space-y-4 text-ink-light">
            <h2 className="text-xl font-semibold text-ink">
              {isFr ? "Utilisation des cookies" : "Cookie Usage"}
            </h2>
            <p>
              {isFr
                ? "À ce jour, ce site n'utilise pas de cookies de tracking ou publicitaires."
                : "Currently, this website does not use tracking or advertising cookies."}
            </p>
          </section>

          <section className="space-y-4 text-ink-light">
            <h2 className="text-xl font-semibold text-ink">
              {isFr ? "Cookies techniques" : "Technical Cookies"}
            </h2>
            <p>
              {isFr
                ? "Seuls des cookies strictement nécessaires au fonctionnement du site peuvent être utilisés (ex : préférences de langue)."
                : "Only strictly necessary cookies for site operation may be used (e.g., language preferences)."}
            </p>
          </section>

          <section className="space-y-4 text-ink-light">
            <h2 className="text-xl font-semibold text-ink">
              {isFr ? "Analytics (à venir)" : "Analytics (Coming Soon)"}
            </h2>
            <p>
              {isFr
                ? "Si des outils d'analyse sont ajoutés à l'avenir (ex : Google Analytics), vous serez informé(e) et pourrez gérer vos préférences."
                : "If analytics tools are added in the future (e.g., Google Analytics), you will be informed and able to manage your preferences."}
            </p>
          </section>

          <section className="space-y-4 text-ink-light">
            <h2 className="text-xl font-semibold text-ink">
              {isFr ? "Contact" : "Contact"}
            </h2>
            <p>
              {isFr
                ? "Pour toute question concernant les cookies, contactez-nous :"
                : "For any questions about cookies, contact us:"}
            </p>
            <p>
              <a
                href={`mailto:${COMPANY.contact.email}`}
                className="text-accent hover:underline"
              >
                {COMPANY.contact.email}
              </a>
            </p>
          </section>

          <hr className="my-8 border-surface" />

          <p className="text-sm text-ink-lighter italic">{dict.legal.v0Note}</p>
        </div>
      </Container>
    </section>
  );
}
