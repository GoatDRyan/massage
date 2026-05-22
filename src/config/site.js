export const site = {
  brandName: "Renaissens",
  url: "https://www.renaissens-bienetre.fr",
  logo: {
    src: `${import.meta.env.BASE_URL}img/logo.png`,
  },
  practitionerName: "Magali Perrin",
  baseline:
    "Massages bien-être holistiques, réflexologie plantaire et accompagnement émotionnel à domicile",
  city: "Rouen",
  region: "Normandie",
  interventionArea: "30 km autour de Rouen Métropole",
  experienceYears: 6,
  phone: "06.60.21.51.09",
  phoneHref: "tel:+33660215109",
  email: "magaliperrin.bienetre@gmail.com",
  emailHref: "mailto:magaliperrin.bienetre@gmail.com",

  booking: {
    url: "https://cal.eu/ryan-ndachf",
    provider: "Cal.com",
  },

  google: {
    businessProfileUrl: "",
    reviewUrl: "",
  },

  legal: {
    editor: "Magali Perrin",
    businessName: "Renaissens",
    siret: "À compléter",
    host: "Vercel Inc.",
    hostUrl: "https://vercel.com",
  },

  socials: {
    instagram: "https://www.instagram.com/bienetremag/",
    facebook: "https://www.facebook.com/magaliperrin.bienetre/",
    linkedin: "",
    pinterest: "",
  },
};

export const isBookingConfigured =
  site.booking.url &&
  !site.booking.url.includes("votre-lien") &&
  !site.booking.url.includes("REPLACE_ME");

export const isGoogleProfileConfigured = Boolean(site.google.businessProfileUrl);
export const isGoogleReviewConfigured = Boolean(site.google.reviewUrl);
