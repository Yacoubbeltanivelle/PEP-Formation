import { type Locale, getDictionary, locales } from "@/lib/i18n";
import { formations } from "@/lib/data/formations";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ImpulseDivider from "@/components/ImpulseDivider";
import FormationCard from "@/components/FormationCard";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: localeParam } = await params;

  if (!locales.includes(localeParam as Locale)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  // Get featured formations (first 3)
  const featuredFormations = formations.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-surface">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-tight">
              {dict.home.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-ink-light mb-8 max-w-2xl">
              {dict.home.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/${locale}/contact`} className="btn-primary">
                {dict.home.ctaQuote}
              </Link>
              <Link href={`/${locale}/sessions`} className="btn-secondary">
                {dict.home.ctaSessions}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <ImpulseDivider />

      {/* Featured Formations */}
      <section className="section">
        <Container>
          <SectionTitle
            title={dict.home.featuredTitle}
            subtitle={dict.home.featuredSubtitle}
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredFormations.map((formation) => (
              <FormationCard
                key={formation.slug}
                formation={formation}
                locale={locale}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`/${locale}/catalogue`} className="btn-secondary">
              {locale === "fr"
                ? "Voir toutes les formations"
                : "View all training"}
            </Link>
          </div>
        </Container>
      </section>

      {/* Dark Section - Logistics Priority */}
      <section className="section section-dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {dict.home.logisticsTitle}
            </h2>
            <p className="text-lg text-ink-lighter mb-8">
              {dict.home.logisticsText}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="badge-turquoise badge">SST</span>
              <span className="badge-accent badge">CACES®</span>
              <span className="badge-violet badge">Habilitations</span>
              <span className="badge-turquoise badge">Incendie</span>
            </div>
          </div>
        </Container>
      </section>

      <ImpulseDivider variant="turquoise" />

      {/* Final CTA */}
      <section className="section">
        <Container>
          <div className="bg-surface rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">
              {dict.home.finalCta}
            </h2>
            <p className="text-ink-light mb-8 max-w-xl mx-auto">
              {dict.home.finalCtaNote}
            </p>
            <Link href={`/${locale}/contact`} className="btn-primary">
              {dict.common.requestQuote}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
