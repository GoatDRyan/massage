import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultContent } from "./defaultContent";

const ContentContext = createContext(defaultContent);

function mergeContent(remoteContent) {
  if (!remoteContent || typeof remoteContent !== "object") return defaultContent;

  return {
    ...defaultContent,
    ...remoteContent,
    site: {
      ...defaultContent.site,
      ...(remoteContent.site || {}),
      logo: {
        ...defaultContent.site.logo,
        ...(remoteContent.site?.logo || {}),
      },
      booking: {
        ...defaultContent.site.booking,
        ...(remoteContent.site?.booking || {}),
      },
      google: {
        ...defaultContent.site.google,
        ...(remoteContent.site?.google || {}),
      },
      legal: {
        ...defaultContent.site.legal,
        ...(remoteContent.site?.legal || {}),
      },
      socials: {
        ...defaultContent.site.socials,
        ...(remoteContent.site?.socials || {}),
      },
    },
    legalTexts: {
      ...defaultContent.legalTexts,
      ...(remoteContent.legalTexts || {}),
    },
  };
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    let isMounted = true;

    async function loadContent() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}content/content.json?ts=${Date.now()}`);
        if (!response.ok) return;
        const remoteContent = await response.json();
        if (isMounted) setContent(mergeContent(remoteContent));
      } catch (error) {
        console.info("Using local fallback content.", error);
      }
    }

    loadContent();

    return () => {
      isMounted = false;
    };
  }, []);

  const computedContent = useMemo(() => {
    const phoneDigits = (content.site?.phone || "").replace(/\D/g, "");
    const normalizedPhone = phoneDigits.startsWith("33")
      ? `+${phoneDigits}`
      : phoneDigits.startsWith("0")
        ? `+33${phoneDigits.slice(1)}`
        : phoneDigits ? `+${phoneDigits}` : "";
    const site = {
      ...content.site,
      phoneHref: normalizedPhone ? `tel:${normalizedPhone}` : content.site?.phoneHref,
      emailHref: content.site?.email ? `mailto:${content.site.email}` : content.site?.emailHref,
    };
    const massageServices = content.massageServices || [];
    const reflexologyServices = content.reflexologyServices || [];
    const services = [...massageServices, ...reflexologyServices].flatMap((service) =>
      (service.durations || []).map((duration) => ({
        id: `${service.id}-${duration.time}`,
        title: service.name,
        duration: duration.time,
        price: duration.price,
        description: service.description,
        benefits: service.benefits || [],
        calLink: duration.calLink,
        calOrigin: duration.calOrigin,
        bookingUrl: duration.bookingUrl,
      }))
    );

    return {
      ...content,
      site,
      massageServices,
      reflexologyServices,
      services,
      isBookingConfigured:
        site?.booking?.url &&
        !site.booking.url.includes("votre-lien") &&
        !site.booking.url.includes("REPLACE_ME"),
      isGoogleProfileConfigured: Boolean(site?.google?.businessProfileUrl),
      isGoogleReviewConfigured: Boolean(site?.google?.reviewUrl),
    };
  }, [content]);

  return <ContentContext.Provider value={computedContent}>{children}</ContentContext.Provider>;
}

export function useContent() {
  return useContext(ContentContext);
}
