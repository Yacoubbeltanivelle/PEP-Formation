export interface Session {
  id: string;
  formationSlug: string;
  date: string; // ISO date string YYYY-MM-DD
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  location: string;
  availableSeats: number;
  totalSeats: number;
}

// Helper to generate dates
function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function formatDateISO(date: Date): string {
  return date.toISOString().split("T")[0];
}

// Generate sessions starting from today, spanning 4 months
const today = new Date();
const startDate = new Date(today.getFullYear(), today.getMonth(), 1); // First of current month

export const sessions: Session[] = [
  // SST Sessions
  {
    id: "sst-001",
    formationSlug: "sst-sauveteur-secouriste",
    date: formatDateISO(addDays(startDate, 5)),
    startTime: "09:00",
    endTime: "17:00",
    location: "Paris",
    availableSeats: 6,
    totalSeats: 10,
  },
  {
    id: "sst-002",
    formationSlug: "sst-sauveteur-secouriste",
    date: formatDateISO(addDays(startDate, 19)),
    startTime: "09:00",
    endTime: "17:00",
    location: "Paris",
    availableSeats: 4,
    totalSeats: 10,
  },
  {
    id: "sst-003",
    formationSlug: "sst-sauveteur-secouriste",
    date: formatDateISO(addDays(startDate, 45)),
    startTime: "09:00",
    endTime: "17:00",
    location: "Paris",
    availableSeats: 10,
    totalSeats: 10,
  },

  // Habilitation électrique Sessions
  {
    id: "elec-001",
    formationSlug: "habilitation-electrique",
    date: formatDateISO(addDays(startDate, 8)),
    startTime: "09:00",
    endTime: "17:00",
    location: "Paris",
    availableSeats: 5,
    totalSeats: 8,
  },
  {
    id: "elec-002",
    formationSlug: "habilitation-electrique",
    date: formatDateISO(addDays(startDate, 36)),
    startTime: "09:00",
    endTime: "17:00",
    location: "Paris",
    availableSeats: 8,
    totalSeats: 8,
  },

  // CACES R489 Sessions
  {
    id: "caces489-001",
    formationSlug: "caces-r489-chariot",
    date: formatDateISO(addDays(startDate, 12)),
    startTime: "08:30",
    endTime: "17:00",
    location: "Paris",
    availableSeats: 3,
    totalSeats: 6,
  },
  {
    id: "caces489-002",
    formationSlug: "caces-r489-chariot",
    date: formatDateISO(addDays(startDate, 40)),
    startTime: "08:30",
    endTime: "17:00",
    location: "Paris",
    availableSeats: 6,
    totalSeats: 6,
  },
  {
    id: "caces489-003",
    formationSlug: "caces-r489-chariot",
    date: formatDateISO(addDays(startDate, 68)),
    startTime: "08:30",
    endTime: "17:00",
    location: "Paris",
    availableSeats: 6,
    totalSeats: 6,
  },

  // CACES R486 Sessions
  {
    id: "caces486-001",
    formationSlug: "caces-r486-nacelle",
    date: formatDateISO(addDays(startDate, 15)),
    startTime: "08:30",
    endTime: "17:00",
    location: "Paris",
    availableSeats: 4,
    totalSeats: 6,
  },
  {
    id: "caces486-002",
    formationSlug: "caces-r486-nacelle",
    date: formatDateISO(addDays(startDate, 50)),
    startTime: "08:30",
    endTime: "17:00",
    location: "Paris",
    availableSeats: 6,
    totalSeats: 6,
  },

  // Incendie EPI Sessions
  {
    id: "epi-001",
    formationSlug: "incendie-epi",
    date: formatDateISO(addDays(startDate, 10)),
    startTime: "09:00",
    endTime: "13:00",
    location: "Paris",
    availableSeats: 8,
    totalSeats: 12,
  },
  {
    id: "epi-002",
    formationSlug: "incendie-epi",
    date: formatDateISO(addDays(startDate, 24)),
    startTime: "14:00",
    endTime: "18:00",
    location: "Paris",
    availableSeats: 12,
    totalSeats: 12,
  },
  {
    id: "epi-003",
    formationSlug: "incendie-epi",
    date: formatDateISO(addDays(startDate, 55)),
    startTime: "09:00",
    endTime: "13:00",
    location: "Paris",
    availableSeats: 12,
    totalSeats: 12,
  },

  // Gestes et Postures Sessions
  {
    id: "gp-001",
    formationSlug: "gestes-postures",
    date: formatDateISO(addDays(startDate, 7)),
    startTime: "09:00",
    endTime: "17:00",
    location: "Paris",
    availableSeats: 6,
    totalSeats: 10,
  },
  {
    id: "gp-002",
    formationSlug: "gestes-postures",
    date: formatDateISO(addDays(startDate, 28)),
    startTime: "09:00",
    endTime: "17:00",
    location: "Paris",
    availableSeats: 10,
    totalSeats: 10,
  },
  {
    id: "gp-003",
    formationSlug: "gestes-postures",
    date: formatDateISO(addDays(startDate, 60)),
    startTime: "09:00",
    endTime: "17:00",
    location: "Paris",
    availableSeats: 10,
    totalSeats: 10,
  },
];

export function getSessionsByFormation(formationSlug: string): Session[] {
  return sessions.filter((s) => s.formationSlug === formationSlug);
}

export function getSessionsByDate(date: string): Session[] {
  return sessions.filter((s) => s.date === date);
}

export function getUpcomingSessions(): Session[] {
  const todayStr = formatDateISO(new Date());
  return sessions
    .filter((s) => s.date >= todayStr)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getSessionDates(): string[] {
  return [...new Set(sessions.map((s) => s.date))].sort();
}
