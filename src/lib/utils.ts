/**
 * Format a date string to French locale
 */
export function formatDateFR(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Format a date string to English locale
 */
export function formatDateEN(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Format a date based on locale
 */
export function formatDate(dateStr: string, locale: "fr" | "en"): string {
  return locale === "fr" ? formatDateFR(dateStr) : formatDateEN(dateStr);
}

/**
 * Format a short date (day/month)
 */
export function formatShortDate(dateStr: string, locale: "fr" | "en"): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", {
    day: "numeric",
    month: "short",
  });
}

/**
 * Get month name from date
 */
export function getMonthName(dateStr: string, locale: "fr" | "en"): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", {
    month: "long",
    year: "numeric",
  });
}

/**
 * Get day of month from date
 */
export function getDayOfMonth(dateStr: string): number {
  return new Date(dateStr).getDate();
}

/**
 * Get days in month for a given year and month
 */
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Get first day of week for a month (0 = Sunday, 1 = Monday, etc.)
 */
export function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

/**
 * Format ISO date from year, month, day
 */
export function toISODateString(
  year: number,
  month: number,
  day: number,
): string {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

/**
 * Merge class names conditionally
 */
export function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
