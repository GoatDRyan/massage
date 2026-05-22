import { useEffect } from "react";
import { absoluteUrl } from "./routes";
import { site } from "../../config/site";

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    const match = selector.match(/\[(name|property)="([^"]+)"\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

function setCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function setStructuredData(route) {
  const id = "structured-data-local-business";
  let element = document.getElementById(id);
  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.id = id;
    document.head.appendChild(element);
  }

  const data = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: site.brandName,
    description: route.description,
    url: absoluteUrl(route.path),
    image: absoluteUrl("/og-image.webp"),
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: "FR",
    },
    areaServed: [
      { "@type": "City", name: site.city },
      { "@type": "AdministrativeArea", name: "Métropole Rouen Normandie" },
    ],
    makesOffer: [
      { "@type": "Offer", name: "Massage à domicile à Rouen" },
      { "@type": "Offer", name: "Réflexologie plantaire à Rouen" },
      { "@type": "Offer", name: "Cercle de parole à Rouen" },
      { "@type": "Offer", name: "Atelier bien-être en Normandie" },
    ],
  };

  element.textContent = JSON.stringify(data);
}

export function HeadManager({ route }) {
  useEffect(() => {
    const url = absoluteUrl(route.path);
    const image = absoluteUrl("/og-image.webp");

    document.title = route.title;
    setMeta('meta[name="description"]', "content", route.description);
    setCanonical(url);

    setMeta('meta[property="og:title"]', "content", route.title);
    setMeta('meta[property="og:description"]', "content", route.description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[name="twitter:title"]', "content", route.title);
    setMeta('meta[name="twitter:description"]', "content", route.description);
    setMeta('meta[name="twitter:image"]', "content", image);

    setStructuredData(route);
  }, [route]);

  return null;
}
