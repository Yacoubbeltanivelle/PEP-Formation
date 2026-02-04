import { type Locale, getDictionary, locales } from "@/lib/i18n";
import { COMPANY } from "@/config/company";
import { notFound } from "next/navigation";
import Container from "@/components/Container";

interface MentionsLegalesPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function MentionsLegalesPage({
  params,
}: MentionsLegalesPageProps) {
  const { locale: localeParam } = await params;

  if (!locales.includes(localeParam as Locale)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <section className="section">
      <Container>
        <h1 className="text-3xl font-bold text-ink mb-8">
          {dict.legal.mentionsTitle}
        </h1>

        <div className="prose prose-lg max-w-3xl">
          <section className="space-y-4 text-ink-light">
            <p>
              <strong>{dict.legal.commercialName} :</strong> {COMPANY.brandName}
            </p>
            <p>
              <strong>{dict.legal.addressLabel} :</strong>{" "}
              {COMPANY.address.oneLine}
            </p>
            <p>
              <strong>{dict.legal.emailLabel} :</strong>{" "}
              <a
                href={`mailto:${COMPANY.contact.email}`}
                className="text-accent hover:underline"
              >
                {COMPANY.contact.email}
              </a>
            </p>
            <p>
              <strong>{dict.legal.phoneLabel} :</strong>{" "}
              <a
                href={`tel:${COMPANY.contact.phoneE164}`}
                className="text-accent hover:underline"
              >
                {COMPANY.contact.phoneDisplay}
              </a>
            </p>
            <p>
              <strong>{dict.legal.siretLabel} :</strong> {COMPANY.legal.siret}
            </p>
          </section>

          <hr className="my-8 border-surface" />

          <section className="space-y-4 text-ink-light">
            <h2 className="text-xl font-semibold text-ink">
              {locale === "fr" ? "Hébergeur" : "Hosting"}
            </h2>
            <p>
              GitHub Pages
              <br />
              GitHub, Inc.
              <br />
              88 Colin P Kelly Jr St, San Francisco, CA 94107, USA
            </p>
          </section>

          <hr className="my-8 border-surface" />

          <p className="text-sm text-ink-lighter italic mt-8">
            {dict.legal.v0Note}
          </p>
        </div>
      </Container>
    </section>
  );
}
