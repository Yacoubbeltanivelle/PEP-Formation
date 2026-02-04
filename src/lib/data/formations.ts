import type { Locale } from "@/lib/i18n";

export type Theme = "safety" | "logistics" | "electrical" | "fire" | "handling";
export type Audience = "B2B" | "B2C" | "both";

export interface Formation {
  slug: string;
  title: string;
  shortDescription: string;
  theme: Theme;
  audience: Audience;
  durationHours: number;
  objectives: string[];
  prerequisites: string[];
  modalities: string[];
  deliverables: string[];
  certificationNote: string;
}

// Formations data - FR only (primary language)
const formationsFR: Formation[] = [
  {
    slug: "sst-sauveteur-secouriste",
    title: "SST — Sauveteur Secouriste du Travail",
    shortDescription:
      "Formation initiale SST pour intervenir lors d'un accident et contribuer à la prévention des risques.",
    theme: "safety",
    audience: "both",
    durationHours: 14,
    objectives: [
      "Maîtriser les gestes de premiers secours",
      "Savoir alerter les secours de manière appropriée",
      "Contribuer à la prévention des risques professionnels",
    ],
    prerequisites: [
      "Aucun prérequis spécifique",
      "Aptitude physique à effectuer les gestes de secours",
    ],
    modalities: [
      "Formation en présentiel",
      "2 jours consécutifs (14 heures)",
      "Groupes de 4 à 10 participants",
      "Exercices pratiques sur mannequins et mises en situation",
    ],
    deliverables: [
      "Certificat SST (validité indicative : 24 mois, à confirmer selon référentiel INRS)",
      "Livret de formation",
    ],
    certificationNote:
      "Certification délivrée sous réserve de réussite aux épreuves, selon les référentiels en vigueur.",
  },
  {
    slug: "habilitation-electrique",
    title: "Habilitation électrique — B0/H0/H0V",
    shortDescription:
      "Formation à la prévention du risque électrique pour les personnels non électriciens.",
    theme: "electrical",
    audience: "B2B",
    durationHours: 7,
    objectives: [
      "Identifier les dangers du courant électrique",
      "Connaître les prescriptions de sécurité électrique",
      "Appliquer les consignes de sécurité lors de travaux à proximité d'installations électriques",
    ],
    prerequisites: [
      "Aucune connaissance technique en électricité requise",
      "Maîtrise de la langue française (oral et écrit)",
    ],
    modalities: [
      "Formation en présentiel",
      "1 jour (7 heures)",
      "Partie théorique et exercices pratiques",
    ],
    deliverables: [
      "Avis après formation (l'habilitation est délivrée par l'employeur)",
      "Attestation de formation",
    ],
    certificationNote:
      "L'habilitation est délivrée par l'employeur sur la base de l'avis émis après formation.",
  },
  {
    slug: "caces-r489-chariot",
    title: "CACES® R489 — Chariots de manutention",
    shortDescription:
      "Formation et certification pour la conduite de chariots élévateurs (catégories 1A, 3, 5).",
    theme: "handling",
    audience: "both",
    durationHours: 21,
    objectives: [
      "Conduire un chariot de manutention en sécurité",
      "Effectuer les vérifications et l'entretien courant",
      "Maîtriser les règles de circulation et de chargement",
    ],
    prerequisites: [
      "Être âgé de 18 ans minimum",
      "Aptitude médicale à la conduite d'engins",
      "Maîtrise de la lecture et du calcul de base",
    ],
    modalities: [
      "Formation en présentiel",
      "3 jours (21 heures, durée indicative selon catégories)",
      "Pratique sur site avec différents types de chariots",
    ],
    deliverables: [
      "Certificat CACES® (validité indicative : 5 ans, à confirmer selon catégorie)",
      "Attestation de compétences",
    ],
    certificationNote:
      "Certification délivrée par un organisme testeur certifié, sous réserve de réussite aux tests théoriques et pratiques.",
  },
  {
    slug: "caces-r486-nacelle",
    title: "CACES® R486 — Nacelles et PEMP",
    shortDescription:
      "Formation à la conduite des plateformes élévatrices mobiles de personnel (PEMP).",
    theme: "handling",
    audience: "both",
    durationHours: 14,
    objectives: [
      "Utiliser en sécurité les PEMP",
      "Connaître les risques liés au travail en hauteur",
      "Maîtriser les vérifications et procédures de sécurité",
    ],
    prerequisites: [
      "Être âgé de 18 ans minimum",
      "Aptitude médicale au travail en hauteur",
      "Pas de contre-indication médicale (vertige, etc.)",
    ],
    modalities: [
      "Formation en présentiel",
      "2 jours (14 heures, durée indicative)",
      "Exercices pratiques sur différents types de PEMP",
    ],
    deliverables: [
      "Certificat CACES® R486 (validité indicative : 5 ans)",
      "Attestation de formation",
    ],
    certificationNote:
      "La certification CACES® est délivrée sous réserve de réussite aux épreuves, selon les référentiels en vigueur.",
  },
  {
    slug: "incendie-epi",
    title: "Formation Incendie — Équipier de Première Intervention",
    shortDescription:
      "Savoir réagir face à un départ de feu : alerte, évacuation, première intervention.",
    theme: "fire",
    audience: "B2B",
    durationHours: 4,
    objectives: [
      "Connaître les principes de base de la combustion",
      "Utiliser les moyens de première intervention (extincteurs)",
      "Maîtriser les procédures d'alerte et d'évacuation",
    ],
    prerequisites: [
      "Aucun prérequis spécifique",
      "Aptitude physique à manipuler un extincteur",
    ],
    modalities: [
      "Formation en présentiel",
      "Demi-journée (4 heures)",
      "Exercices pratiques sur feux réels (bac à feu écologique)",
    ],
    deliverables: ["Attestation de formation EPI", "Support pédagogique"],
    certificationNote:
      "Attestation de participation délivrée à l'issue de la formation.",
  },
  {
    slug: "gestes-postures",
    title: "Gestes et Postures — Prévention TMS",
    shortDescription:
      "Apprenez les bons gestes pour préserver votre santé au travail et prévenir les TMS.",
    theme: "safety",
    audience: "both",
    durationHours: 7,
    objectives: [
      "Identifier les risques liés à la manutention manuelle",
      "Appliquer les principes d'économie d'effort",
      "Adopter les bonnes postures de travail",
    ],
    prerequisites: [
      "Aucun prérequis",
      "Formation ouverte à tous les salariés exposés aux risques de manutention",
    ],
    modalities: [
      "Formation en présentiel",
      "1 jour (7 heures)",
      "Exercices pratiques adaptés au poste de travail",
    ],
    deliverables: ["Attestation de formation", "Mémo des bonnes pratiques"],
    certificationNote:
      "Attestation de participation remise en fin de formation.",
  },
];

// EN translations
const formationsEN: Formation[] = [
  {
    slug: "sst-sauveteur-secouriste",
    title: "SST — Occupational First Aid",
    shortDescription:
      "Initial first aid training to respond to accidents and contribute to risk prevention.",
    theme: "safety",
    audience: "both",
    durationHours: 14,
    objectives: [
      "Master first aid techniques",
      "Know how to alert emergency services appropriately",
      "Contribute to occupational risk prevention",
    ],
    prerequisites: [
      "No specific prerequisites",
      "Physical ability to perform first aid gestures",
    ],
    modalities: [
      "In-person training",
      "2 consecutive days (14 hours)",
      "Groups of 4 to 10 participants",
      "Practical exercises on mannequins and simulations",
    ],
    deliverables: [
      "SST Certificate (indicative validity: 24 months, to be confirmed per INRS standards)",
      "Training booklet",
    ],
    certificationNote:
      "Certification issued subject to passing evaluations, according to current standards.",
  },
  {
    slug: "habilitation-electrique",
    title: "Electrical Authorization — B0/H0/H0V",
    shortDescription:
      "Training on electrical risk prevention for non-electrical personnel.",
    theme: "electrical",
    audience: "B2B",
    durationHours: 7,
    objectives: [
      "Identify electrical current hazards",
      "Know electrical safety requirements",
      "Apply safety instructions when working near electrical installations",
    ],
    prerequisites: [
      "No technical electrical knowledge required",
      "Proficiency in French (oral and written)",
    ],
    modalities: [
      "In-person training",
      "1 day (7 hours)",
      "Theoretical and practical exercises",
    ],
    deliverables: [
      "Post-training assessment (authorization is issued by the employer)",
      "Training certificate",
    ],
    certificationNote:
      "Authorization is issued by the employer based on post-training assessment.",
  },
  {
    slug: "caces-r489-chariot",
    title: "CACES® R489 — Forklift Operation",
    shortDescription:
      "Training and certification for forklift operation (categories 1A, 3, 5).",
    theme: "handling",
    audience: "both",
    durationHours: 21,
    objectives: [
      "Operate a forklift safely",
      "Perform routine checks and maintenance",
      "Master traffic and loading rules",
    ],
    prerequisites: [
      "Minimum 18 years old",
      "Medical fitness for equipment operation",
      "Basic reading and calculation skills",
    ],
    modalities: [
      "In-person training",
      "3 days (21 hours, indicative duration by category)",
      "On-site practice with various forklift types",
    ],
    deliverables: [
      "CACES® Certificate (indicative validity: 5 years, to be confirmed by category)",
      "Skills attestation",
    ],
    certificationNote:
      "Certification issued by a certified testing organization, subject to passing theoretical and practical tests.",
  },
  {
    slug: "caces-r486-nacelle",
    title: "CACES® R486 — Aerial Work Platforms (MEWP)",
    shortDescription:
      "Training for operating mobile elevating work platforms (MEWP).",
    theme: "handling",
    audience: "both",
    durationHours: 14,
    objectives: [
      "Use MEWP safely",
      "Understand risks associated with working at height",
      "Master verification and safety procedures",
    ],
    prerequisites: [
      "Minimum 18 years old",
      "Medical fitness for working at height",
      "No medical contraindications (vertigo, etc.)",
    ],
    modalities: [
      "In-person training",
      "2 days (14 hours, indicative)",
      "Practical exercises on various MEWP types",
    ],
    deliverables: [
      "CACES® R486 Certificate (indicative validity: 5 years)",
      "Training certificate",
    ],
    certificationNote:
      "CACES® certification is issued subject to passing evaluations, according to current standards.",
  },
  {
    slug: "incendie-epi",
    title: "Fire Safety — First Response Team Member",
    shortDescription:
      "Learn to respond to fires: alert, evacuation, first intervention.",
    theme: "fire",
    audience: "B2B",
    durationHours: 4,
    objectives: [
      "Understand basic combustion principles",
      "Use first response equipment (extinguishers)",
      "Master alert and evacuation procedures",
    ],
    prerequisites: [
      "No specific prerequisites",
      "Physical ability to handle an extinguisher",
    ],
    modalities: [
      "In-person training",
      "Half-day (4 hours)",
      "Practical exercises on real fires (eco-friendly fire tray)",
    ],
    deliverables: ["First Response training certificate", "Training materials"],
    certificationNote:
      "Participation certificate issued upon training completion.",
  },
  {
    slug: "gestes-postures",
    title: "Ergonomics & Posture — MSD Prevention",
    shortDescription:
      "Learn proper techniques to protect your health at work and prevent musculoskeletal disorders.",
    theme: "safety",
    audience: "both",
    durationHours: 7,
    objectives: [
      "Identify risks related to manual handling",
      "Apply effort-saving principles",
      "Adopt proper work postures",
    ],
    prerequisites: [
      "No prerequisites",
      "Open to all employees exposed to handling risks",
    ],
    modalities: [
      "In-person training",
      "1 day (7 hours)",
      "Practical exercises adapted to the workstation",
    ],
    deliverables: ["Training certificate", "Best practices memo"],
    certificationNote:
      "Participation certificate issued upon training completion.",
  },
];

// Export formations based on locale
export const formations = formationsFR;

export function getFormations(locale: Locale): Formation[] {
  return locale === "en" ? formationsEN : formationsFR;
}

export function getFormationBySlug(
  slug: string,
  locale: Locale = "fr",
): Formation | undefined {
  const data = getFormations(locale);
  return data.find((f) => f.slug === slug);
}

export function getFormationsByTheme(
  theme: Theme,
  locale: Locale = "fr",
): Formation[] {
  const data = getFormations(locale);
  return data.filter((f) => f.theme === theme);
}

export function getFormationsByAudience(
  audience: Audience,
  locale: Locale = "fr",
): Formation[] {
  const data = getFormations(locale);
  return data.filter((f) => f.audience === audience || f.audience === "both");
}
