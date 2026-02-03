import { type Locale, getDictionary, locales } from "@/lib/i18n";
import { formations, getFormationBySlug } from "@/lib/data/formations";
import { getSessionsByFormation, type Session } from "@/lib/data/sessions";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import type { Metadata } from "next";

interface FormationPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

// Generate static params for all formations
export function generateStaticParams() {
  return formations.flatMap((formation) =>
    locales.map((locale) => ({
      locale,
      slug: formation.slug,
    })),
  );
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: FormationPageProps): Promise<Metadata> {
  const { slug, locale: localeParam } = await params;
  const formation = getFormationBySlug(slug);

  if (!formation) {
    return { title: "Formation non trouvée" };
  }

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return {
    title: `${formation.title} | ${dict.common.siteName}`,
    description: formation.shortDescription,
    openGraph: {
      title: `${formation.title} | ${dict.common.siteName}`,
      description: formation.shortDescription,
      type: "website",
    },
  };
}

// Session card component
function SessionCard({
  session,
  formation,
  locale,
  dict,
}: {
  session: Session;
  formation: { title: string; slug: string };
  locale: Locale;
  dict: ReturnType<typeof getDictionary>;
}) {
  const dateFormatted = formatDate(session.date, locale);

  return (
    <div className="card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <p className="font-semibold text-ink">{dateFormatted}</p>
        <p className="text-sm text-ink-light">
          {session.startTime} - {session.endTime} • {session.location}
        </p>
        <p className="text-sm text-ink-lighter">
          {dict.sessions.availableSeats}: {session.availableSeats}/
          {session.totalSeats} {dict.sessions.seatsIndicative}
        </p>
      </div>
      <Link
        href={`/${locale}/contact?formation=${formation.slug}&date=${session.date}`}
        className="btn-primary text-sm whitespace-nowrap"
      >
        {dict.common.preBook} →
      </Link>
    </div>
  );
}

export default async function FormationPage({ params }: FormationPageProps) {
  const { slug, locale: localeParam } = await params;

  if (!locales.includes(localeParam as Locale)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const formation = getFormationBySlug(slug);

  if (!formation) {
    notFound();
  }

  const sessions = getSessionsByFormation(slug);
  const upcomingSessions = sessions.filter(
    (s) => new Date(s.date) >= new Date(),
  );

  const audienceLabel =
    formation.audience === "both"
      ? dict.catalog.audience.both
      : formation.audience === "B2B"
        ? dict.catalog.audience.B2B
        : dict.catalog.audience.B2C;

  return (
    <section className="section">
      <Container>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge badge-accent">
                  {dict.formation.duration}: {formation.durationHours}h (
                  {dict.common.indicative})
                </span>
                <span className="badge">{audienceLabel}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                {formation.title}
              </h1>
              <p className="text-lg text-ink-light">
                {formation.shortDescription}
              </p>
            </div>

            {/* Objectives */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-ink mb-4">
                {dict.formation.objectives}
              </h2>
              <ul className="space-y-2">
                {formation.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-ink-light">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-ink mb-4">
                {dict.formation.prerequisites}
              </h2>
              <ul className="space-y-2">
                {formation.prerequisites.map((prereq, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-turquoise mt-1">•</span>
                    <span className="text-ink-light">{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modalities */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-ink mb-4">
                {dict.formation.modalities}
              </h2>
              <ul className="space-y-2">
                {formation.modalities.map((mod, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-violet mt-1">•</span>
                    <span className="text-ink-light">{mod}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Deliverables & Certification */}
            <div className="section-dark rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-white mb-4">
                {dict.formation.deliverables}
              </h3>
              <ul className="space-y-2 mb-6">
                {formation.deliverables.map((del, i) => (
                  <li
                    key={i}
                    className="text-sm text-ink-lighter flex items-start gap-2"
                  >
                    <span className="text-accent">→</span>
                    {del}
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs text-ink-lighter italic">
                  {formation.certificationNote}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="card text-center">
              <p className="text-ink-light mb-4">
                {locale === "fr"
                  ? "Besoin de plus d'informations ?"
                  : "Need more information?"}
              </p>
              <Link
                href={`/${locale}/contact?formation=${formation.slug}`}
                className="btn-primary w-full"
              >
                {dict.common.requestQuote}
              </Link>
            </div>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-ink mb-6">
            {dict.formation.upcomingSessions}
          </h2>
          {upcomingSessions.length > 0 ? (
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <SessionCard
                  key={session.id}
                  session={session}
                  formation={formation}
                  locale={locale}
                  dict={dict}
                />
              ))}
            </div>
          ) : (
            <div className="card text-center py-8">
              <p className="text-ink-light mb-4">{dict.formation.noSessions}</p>
              <Link href={`/${locale}/contact`} className="btn-secondary">
                {dict.common.requestQuote}
              </Link>
            </div>
          )}
        </div>

        {/* Compliance Note */}
        <div className="mt-8 bg-surface rounded-xl p-6">
          <p className="text-sm text-ink-light italic text-center">
            {dict.formation.complianceNote}
          </p>
        </div>
      </Container>
    </section>
  );
}
