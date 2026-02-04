"use client";

import { useState, useMemo } from "react";
import { type Locale, getDictionary } from "@/lib/i18n";
import { getSessionsByDate, getSessionDates } from "@/lib/data/sessions";
import { getFormationBySlug } from "@/lib/data/formations";
import { formatDate } from "@/lib/utils";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import MonthCalendar from "@/components/MonthCalendar";
import Link from "next/link";

interface SessionsPageClientProps {
  locale: Locale;
}

export default function SessionsPageClient({
  locale,
}: SessionsPageClientProps) {
  const dict = getDictionary(locale);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Get all session dates
  const sessionDates = useMemo(() => getSessionDates(), []);

  // Get sessions for selected date
  const selectedSessions = useMemo(() => {
    if (!selectedDate) return [];
    return getSessionsByDate(selectedDate);
  }, [selectedDate]);

  return (
    <section className="section">
      <Container>
        <SectionTitle
          title={dict.sessions.title}
          subtitle={dict.sessions.subtitle}
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendar */}
          <MonthCalendar
            locale={locale}
            sessionDates={sessionDates}
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
          />

          {/* Sessions List */}
          <div>
            {selectedDate ? (
              <>
                <h3 className="text-xl font-bold text-ink mb-4">
                  {formatDate(selectedDate, locale)}
                </h3>
                {selectedSessions.length > 0 ? (
                  <div className="space-y-4">
                    {selectedSessions.map((session) => {
                      const formation = getFormationBySlug(
                        session.formationSlug,
                      );
                      if (!formation) return null;

                      return (
                        <div key={session.id} className="card">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                              <Link
                                href={`/${locale}/formations/${formation.slug}`}
                                className="font-semibold text-ink hover:text-accent transition-colors"
                              >
                                {formation.title}
                              </Link>
                              <p className="text-sm text-ink-light mt-1">
                                {session.startTime} - {session.endTime}
                              </p>
                              <p className="text-sm text-ink-lighter">
                                {dict.sessions.location}: {session.location}
                              </p>
                              <p className="text-sm text-ink-lighter">
                                {dict.sessions.availableSeats}:{" "}
                                {session.availableSeats}/{session.totalSeats}{" "}
                                {dict.sessions.seatsIndicative}
                              </p>
                            </div>
                            <Link
                              href={`/${locale}/contact?formation=${formation.slug}&date=${session.date}`}
                              className="btn-primary text-sm whitespace-nowrap"
                            >
                              {dict.common.preBook} →
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="card text-center py-8">
                    <p className="text-ink-light">
                      {dict.sessions.noSessionsDay}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="card text-center py-12 bg-surface">
                <p className="text-ink-light">{dict.sessions.selectDay}</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
