"use client";

import { useState, useMemo } from "react";
import { type Locale } from "@/lib/i18n";
import {
  getDaysInMonth,
  getFirstDayOfMonth,
  toISODateString,
  cn,
} from "@/lib/utils";

interface MonthCalendarProps {
  locale: Locale;
  sessionDates: string[];
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
}

const dayNames = {
  fr: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
  en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
};

const monthNames = {
  fr: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

export default function MonthCalendar({
  locale,
  sessionDates,
  selectedDate,
  onSelectDate,
}: MonthCalendarProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // Get session dates set for quick lookup
  const sessionDatesSet = useMemo(() => new Set(sessionDates), [sessionDates]);

  // Navigate months
  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Generate calendar grid
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  let firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  // Convert Sunday = 0 to Monday = 0
  firstDay = firstDay === 0 ? 6 : firstDay - 1;

  const calendarDays: (number | null)[] = [];
  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  // Split into weeks
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }

  // Check if a day has sessions
  const hasSession = (day: number): boolean => {
    const dateStr = toISODateString(currentYear, currentMonth, day);
    return sessionDatesSet.has(dateStr);
  };

  // Check if day is today
  const isToday = (day: number): boolean => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  // Check if day is selected
  const isSelected = (day: number): boolean => {
    if (!selectedDate) return false;
    return toISODateString(currentYear, currentMonth, day) === selectedDate;
  };

  return (
    <div className="bg-surface rounded-xl p-4 md:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={goToPrevMonth}
          className="p-2 rounded-lg hover:bg-ink/5 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label={locale === "fr" ? "Mois précédent" : "Previous month"}
        >
          <svg
            className="w-5 h-5 text-ink"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h2 className="text-lg font-bold text-ink">
          {monthNames[locale][currentMonth]} {currentYear}
        </h2>
        <button
          type="button"
          onClick={goToNextMonth}
          className="p-2 rounded-lg hover:bg-ink/5 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label={locale === "fr" ? "Mois suivant" : "Next month"}
        >
          <svg
            className="w-5 h-5 text-ink"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames[locale].map((name) => (
          <div
            key={name}
            className="text-center text-xs font-medium text-ink-light py-2"
          >
            {name}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="space-y-1">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-1">
            {week.map((day, dayIndex) => (
              <div key={dayIndex} className="aspect-square">
                {day !== null && (
                  <button
                    type="button"
                    onClick={() =>
                      onSelectDate(
                        toISODateString(currentYear, currentMonth, day),
                      )
                    }
                    className={cn(
                      "w-full h-full flex flex-col items-center justify-center rounded-lg transition-all text-sm",
                      "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1",
                      isSelected(day)
                        ? "bg-accent text-white font-bold"
                        : isToday(day)
                          ? "bg-ink/10 text-ink font-medium"
                          : "hover:bg-ink/5 text-ink",
                      hasSession(day) && !isSelected(day) && "font-medium",
                    )}
                    aria-label={`${day} ${monthNames[locale][currentMonth]} ${currentYear}${
                      hasSession(day)
                        ? locale === "fr"
                          ? " - Sessions disponibles"
                          : " - Sessions available"
                        : ""
                    }`}
                  >
                    <span>{day}</span>
                    {hasSession(day) && (
                      <span
                        className={cn(
                          "w-1.5 h-1.5 rounded-full mt-0.5",
                          isSelected(day) ? "bg-white" : "bg-accent",
                        )}
                      />
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-4 pt-4 border-t border-ink/10 flex items-center justify-center gap-4 text-xs text-ink-light">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span>
            {locale === "fr" ? "Session disponible" : "Session available"}
          </span>
        </div>
      </div>
    </div>
  );
}
