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

export const formations: Formation[] = [
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

export function getFormationBySlug(slug: string): Formation | undefined {
  return formations.find((f) => f.slug === slug);
}

export function getFormationsByTheme(theme: Theme): Formation[] {
  return formations.filter((f) => f.theme === theme);
}

export function getFormationsByAudience(audience: Audience): Formation[] {
  return formations.filter(
    (f) => f.audience === audience || f.audience === "both",
  );
}
