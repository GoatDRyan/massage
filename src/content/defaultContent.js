import { site } from "../config/site";
import { massageServices, reflexologyServices, services } from "../data/services";
import { faqItems } from "../data/faq";
import { clientReviews } from "../data/reviews";
import { experiences } from "../data/experiences";

export const defaultContent = {
  site,
  massageServices,
  reflexologyServices,
  services,
  faqItems,
  clientReviews,
  experiences,
  legalTexts: {
    legalNotice: [
      "Le site Renaissens est édité par Magali Perrin, praticienne bien-être intervenant autour de Rouen.",
      "Nom commercial : Renaissens.",
      "Les prestations proposées sont des soins de bien-être non médicaux. Elles ne remplacent pas un avis médical, un diagnostic ou un traitement."
    ],
    privacyPolicy: [
      "Les données personnelles collectées via le site sont limitées au nécessaire : nom, email, téléphone éventuel et contenu du message envoyé par l'utilisateur.",
      "Le formulaire de contact prépare un email via l'application de messagerie de l'utilisateur. Le site ne stocke pas les messages dans une base de données.",
      "Les données ne sont pas revendues. Elles servent uniquement à répondre aux demandes de contact ou à organiser les rendez-vous."
    ],
    bookingConditions: [
      "Les rendez-vous peuvent être pris en ligne via le calendrier de réservation ou par contact direct.",
      "Le paiement est effectué selon les modalités communiquées par la praticienne. Le site ne gère pas de paiement en ligne dans sa version actuelle.",
      "En cas d'annulation ou de demande de report, il est recommandé de prévenir le plus tôt possible afin de libérer le créneau pour une autre personne.",
      "Les prestations proposées sont des soins de bien-être non médicaux. Elles ne se substituent pas à un avis médical, un diagnostic ou un traitement."
    ]
  }
};
