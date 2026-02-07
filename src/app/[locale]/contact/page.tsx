import { type Locale, getDictionary, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { Suspense } from "react";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale: localeParam } = await params;

  if (!locales.includes(localeParam as Locale)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <section className="section">
      <Container>
        <div className="max-w-2xl mx-auto">
          <SectionTitle
            title={dict.contact.title}
            subtitle={dict.contact.subtitle}
            centered
          />

          <Suspense
            fallback={
              <div className="card animate-pulse">
                <div className="h-8 bg-surface rounded mb-4" />
                <div className="h-12 bg-surface rounded mb-4" />
                <div className="h-12 bg-surface rounded mb-4" />
                <div className="h-24 bg-surface rounded" />
              </div>
            }
          >
            <ContactForm locale={locale} />
          </Suspense>

          {/* Contact Info */}
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <a
              href="tel:+33123456789"
              className="card text-center hover:shadow-lg hover:border-accent/20 transition-all group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <p className="font-medium text-ink group-hover:text-accent transition-colors">
                {dict.footer.phone}
              </p>
              <p className="text-xs text-ink-lighter mt-1">
                {locale === "fr" ? "Lun-Ven · 9h-18h" : "Mon-Fri · 9am-6pm"}
              </p>
            </a>
            <a
              href={`mailto:${dict.footer.email}`}
              className="card text-center hover:shadow-lg hover:border-turquoise/20 transition-all group"
            >
              <div className="w-12 h-12 bg-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-turquoise/20 transition-colors">
                <svg
                  className="w-6 h-6 text-turquoise"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="font-medium text-ink group-hover:text-turquoise transition-colors">
                {dict.footer.email}
              </p>
              <p className="text-xs text-ink-lighter mt-1">
                {locale === "fr"
                  ? "Réponse sous 24–48h ouvrées"
                  : "Response within 24-48 business hours"}
              </p>
            </a>
          </div>

          {/* Address */}
          <div className="mt-6 card text-center">
            <p className="text-ink-light text-sm">{dict.footer.address}</p>
            <p className="text-ink-lighter text-xs mt-2">{dict.footer.siret}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
