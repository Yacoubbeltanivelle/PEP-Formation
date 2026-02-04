import { COMPANY } from "@/config/company";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

// Dictionaries - FR complet, EN complet
const dictionaries = {
  fr: {
    // Common
    common: {
      siteName: COMPANY.brandName,
      siteDescription: COMPANY.tagline,
      backToHome: "Retour à l'accueil",
      learnMore: "En savoir plus",
      requestQuote: "Demander un devis",
      viewSessions: "Voir les sessions",
      preBook: "Pré-réserver",
      contact: "Contact",
      indicative: "Indicatif",
      toConfirm: "À confirmer",
      dependingOnContext: "selon contexte",
    },
    // Navigation
    nav: {
      home: "Accueil",
      catalog: "Catalogue",
      sessions: "Sessions",
      contact: "Contact",
      langSwitch: "EN",
    },
    // Footer
    footer: {
      address: COMPANY.address.oneLine,
      phone: COMPANY.contact.phoneDisplay,
      phoneE164: COMPANY.contact.phoneE164,
      email: COMPANY.contact.email,
      siret: `SIRET : ${COMPANY.legal.siret}`,
      legalNotice: "Mentions légales",
      privacy: "Confidentialité",
      cookies: "Cookies",
      copyright: `© ${new Date().getFullYear()} ${COMPANY.brandName}. Tous droits réservés.`,
      disclaimer:
        "Les informations présentées sont indicatives et peuvent varier selon le contexte.",
    },
    // Homepage
    home: {
      heroTitle: "Formez vos équipes aux métiers de la logistique",
      heroSubtitle:
        "SST, CACES, Habilitations électriques, Incendie — Des formations concrètes, adaptées à vos besoins.",
      ctaQuote: "Demander un devis",
      ctaSessions: "Voir les sessions",
      featuredTitle: "Formations phares",
      featuredSubtitle: "Des formations essentielles pour vos équipes",
      logisticsTitle: "La logistique, notre priorité",
      logisticsText:
        "Nous accompagnons les entreprises et les particuliers dans le développement de leurs compétences métier.",
      finalCta: "Besoin d'une formation sur mesure ?",
      finalCtaNote:
        "Les dates et tarifs sont indicatifs et seront confirmés lors de votre demande.",
    },
    // Catalog
    catalog: {
      title: "Catalogue des formations",
      subtitle: "Retrouvez l'ensemble de nos formations professionnelles",
      filterTheme: "Thématique",
      filterAudience: "Public",
      filterDuration: "Durée max. (heures)",
      allThemes: "Toutes les thématiques",
      allAudiences: "Tous les publics",
      noResults: "Aucune formation ne correspond à vos critères.",
      resetFilters: "Réinitialiser les filtres",
      hours: "h",
      audience: {
        B2B: "Entreprises (B2B)",
        B2C: "Particuliers (B2C)",
        both: "Entreprises & Particuliers",
      },
    },
    // Formation detail
    formation: {
      duration: "Durée indicative",
      audience: "Public concerné",
      objectives: "Objectifs",
      prerequisites: "Prérequis",
      modalities: "Modalités",
      deliverables: "Livrables",
      certification: "Certification",
      upcomingSessions: "Sessions à venir",
      noSessions: "Aucune session programmée pour le moment.",
      complianceNote:
        "Les certifications et attestations sont délivrées sous réserve de réussite aux évaluations et selon les référentiels en vigueur.",
    },
    // Sessions
    sessions: {
      title: "Sessions de formation",
      subtitle: "Consultez les prochaines sessions disponibles",
      selectDay: "Sélectionnez un jour pour voir les sessions",
      noSessionsDay: "Aucune session ce jour.",
      location: "Lieu",
      availableSeats: "Places disponibles",
      seatsIndicative: "(indicatif)",
    },
    // Contact
    contact: {
      title: "Contact & Devis",
      subtitle: "Une question ? Besoin d'un devis personnalisé ?",
      typeLabel: "Vous êtes",
      typeB2B: "Une entreprise (B2B)",
      typeB2C: "Un particulier (B2C)",
      nameLabel: "Nom complet",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      companyLabel: "Entreprise",
      messageLabel: "Votre message",
      messagePlaceholder: "Décrivez votre besoin...",
      consentLabel:
        "J'accepte que mes données soient utilisées pour traiter ma demande conformément à notre politique de confidentialité.",
      submitButton: "Envoyer",
      successTitle: "Merci !",
      successMessage:
        "Votre demande a bien été envoyée. Nous vous recontacterons dans les plus brefs délais.",
      errors: {
        nameRequired: "Le nom est requis",
        emailRequired: "L'email est requis",
        emailInvalid: "L'email n'est pas valide",
        phoneRequired: "Le téléphone est requis",
        companyRequired: "Le nom de l'entreprise est requis",
        messageRequired: "Le message est requis",
        consentRequired: "Vous devez accepter les conditions",
      },
    },
    // Themes
    themes: {
      safety: "Sécurité",
      logistics: "Logistique",
      electrical: "Électricité",
      fire: "Incendie",
      handling: "Manutention",
    },
    // Legal pages
    legal: {
      mentionsTitle: "Mentions légales",
      privacyTitle: "Politique de confidentialité",
      cookiesTitle: "Politique des cookies",
      commercialName: "Nom commercial",
      addressLabel: "Adresse",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      siretLabel: "SIRET",
      v0Note:
        "Document informatif (V0). À valider / compléter selon statut exact.",
    },
  },
  en: {
    // EN complete translations
    common: {
      siteName: COMPANY.brandName,
      siteDescription:
        "Professional Training Center — Logistics, Safety, Handling",
      backToHome: "Back to home",
      learnMore: "Learn more",
      requestQuote: "Request a quote",
      viewSessions: "View sessions",
      preBook: "Pre-book",
      contact: "Contact",
      indicative: "Indicative",
      toConfirm: "To be confirmed",
      dependingOnContext: "depending on context",
    },
    nav: {
      home: "Home",
      catalog: "Catalog",
      sessions: "Sessions",
      contact: "Contact",
      langSwitch: "FR",
    },
    footer: {
      address: COMPANY.address.oneLine,
      phone: COMPANY.contact.phoneDisplay,
      phoneE164: COMPANY.contact.phoneE164,
      email: COMPANY.contact.email,
      siret: `SIRET: ${COMPANY.legal.siret}`,
      legalNotice: "Legal notice",
      privacy: "Privacy",
      cookies: "Cookies",
      copyright: `© ${new Date().getFullYear()} ${COMPANY.brandName}. All rights reserved.`,
      disclaimer:
        "Information provided is indicative and may vary depending on context.",
    },
    home: {
      heroTitle: "Train your teams in logistics professions",
      heroSubtitle:
        "First Aid, CACES, Electrical Certifications, Fire Safety — Practical training adapted to your needs.",
      ctaQuote: "Request a quote",
      ctaSessions: "View sessions",
      featuredTitle: "Featured Training",
      featuredSubtitle: "Essential training for your teams",
      logisticsTitle: "Logistics, our priority",
      logisticsText:
        "We support companies and individuals in developing their professional skills.",
      finalCta: "Need custom training?",
      finalCtaNote:
        "Dates and prices are indicative and will be confirmed upon request.",
    },
    catalog: {
      title: "Training Catalog",
      subtitle: "Browse all our professional training courses",
      filterTheme: "Theme",
      filterAudience: "Audience",
      filterDuration: "Max duration (hours)",
      allThemes: "All themes",
      allAudiences: "All audiences",
      noResults: "No training matches your criteria.",
      resetFilters: "Reset filters",
      hours: "h",
      audience: {
        B2B: "Businesses (B2B)",
        B2C: "Individuals (B2C)",
        both: "Businesses & Individuals",
      },
    },
    formation: {
      duration: "Indicative duration",
      audience: "Target audience",
      objectives: "Objectives",
      prerequisites: "Prerequisites",
      modalities: "Modalities",
      deliverables: "Deliverables",
      certification: "Certification",
      upcomingSessions: "Upcoming sessions",
      noSessions: "No sessions scheduled at this time.",
      complianceNote:
        "Certifications and attestations are issued subject to passing evaluations and according to current standards.",
    },
    sessions: {
      title: "Training Sessions",
      subtitle: "Check available upcoming sessions",
      selectDay: "Select a day to view sessions",
      noSessionsDay: "No sessions on this day.",
      location: "Location",
      availableSeats: "Available seats",
      seatsIndicative: "(indicative)",
    },
    contact: {
      title: "Contact & Quote",
      subtitle: "Have a question? Need a personalized quote?",
      typeLabel: "You are",
      typeB2B: "A business (B2B)",
      typeB2C: "An individual (B2C)",
      nameLabel: "Full name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      companyLabel: "Company",
      messageLabel: "Your message",
      messagePlaceholder: "Describe your needs...",
      consentLabel:
        "I agree that my data will be used to process my request in accordance with our privacy policy.",
      submitButton: "Send",
      successTitle: "Thank you!",
      successMessage:
        "Your request has been sent. We will contact you shortly.",
      errors: {
        nameRequired: "Name is required",
        emailRequired: "Email is required",
        emailInvalid: "Email is not valid",
        phoneRequired: "Phone is required",
        companyRequired: "Company name is required",
        messageRequired: "Message is required",
        consentRequired: "You must accept the terms",
      },
    },
    themes: {
      safety: "Safety",
      logistics: "Logistics",
      electrical: "Electrical",
      fire: "Fire",
      handling: "Handling",
    },
    legal: {
      mentionsTitle: "Legal Notice",
      privacyTitle: "Privacy Policy",
      cookiesTitle: "Cookie Policy",
      commercialName: "Commercial name",
      addressLabel: "Address",
      emailLabel: "Email",
      phoneLabel: "Phone",
      siretLabel: "SIRET",
      v0Note:
        "Informational document (V0). To be validated/completed as needed.",
    },
  },
} as const;

export type Dictionary = typeof dictionaries.fr;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] as Dictionary;
}
