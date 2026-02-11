// src/config/company.ts
// Source unique pour toutes les informations de l'entreprise

export const COMPANY = {
  brandName: "Pep formations",
  tagline:
    "Centre de formation professionnelle — Logistique, Sécurité, Manutention",

  address: {
    line1: "61 Rue de Lyon",
    postal: "75012",
    city: "Paris",
    country: "France",
    oneLine: "61 Rue de Lyon, 75012 Paris",
  },

  contact: {
    phoneDisplay: "06 52 83 18 77",
    phoneE164: "+33652831877",
    email: "contact@pepformation.com",
  },

  legal: {
    siret: "992 057 174 00011",
  },

  // URL de base pour canonical / OG
  publicBaseUrl:
    "https://yacoubbeltanivelle.github.io/Pep-formations-prototype-v1",
} as const;

export type Company = typeof COMPANY;
