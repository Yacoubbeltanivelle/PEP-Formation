import { type Locale, getDictionary, locales } from "@/lib/i18n";
import { COMPANY } from "@/config/company";
import { notFound } from "next/navigation";
import Container from "@/components/Container";

interface ConfidentialitePageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ConfidentialitePage({
  params,
}: ConfidentialitePageProps) {
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
          {dict.legal.privacyTitle}
        </h1>

        <div className="prose prose-lg max-w-3xl space-y-8">
          <section className="space-y-4 text-ink-light">
            <h2 className="text-xl font-semibold text-ink">
              {isFr ? "Responsable du traitement" : "Data Controller"}
            </h2>
            <p>
              {COMPANY.brandName}
              <br />
              {COMPANY.address.oneLine}
              <br />
              {dict.legal.emailLabel} :{" "}
              <a
                href={`mailto:${COMPANY.contact.email}`}
                className="text-accent hover:underline"
              >
                {COMPANY.contact.email}
              </a>
            </p>
          </section>

          <section className="space-y-4 text-ink-light">
            <h2 className="text-xl font-semibold text-ink">
              {isFr ? "Données collectées" : "Data Collected"}
            </h2>
            <p>
              {isFr
                ? "Les données collectées via le formulaire de contact sont :"
                : "Data collected through the contact form includes:"}
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>{isFr ? "Nom et prénom" : "Full name"}</li>
              <li>{isFr ? "Adresse email" : "Email address"}</li>
              <li>{isFr ? "Numéro de téléphone" : "Phone number"}</li>
              <li>
                {isFr
                  ? "Nom de l'entreprise (optionnel)"
                  : "Company name (optional)"}
              </li>
              <li>{isFr ? "Message" : "Message"}</li>
            </ul>
          </section>

          <section className="space-y-4 text-ink-light">
            <h2 className="text-xl font-semibold text-ink">
              {isFr ? "Finalité du traitement" : "Purpose of Processing"}
            </h2>
            <p>
              {isFr
                ? "Vos données sont utilisées uniquement pour répondre à votre demande de devis ou d'information."
                : "Your data is used solely to respond to your quote or information request."}
            </p>
          </section>

          <section className="space-y-4 text-ink-light">
            <h2 className="text-xl font-semibold text-ink">
              {isFr ? "Vos droits" : "Your Rights"}
            </h2>
            <p>
              {isFr
                ? "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à :"
                : "In accordance with GDPR, you have the right to access, rectify and delete your data. To exercise these rights, contact us at:"}
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
