import { useMemo, useState } from "react";
import { CalendarCheck, Mail, ShieldCheck, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useContent } from "../../content/ContentProvider";

export function Booking({ onNavigate }) {
  const { site, massageServices, reflexologyServices } = useContent();
  const groupedServices = useMemo(
    () =>
      [...massageServices, ...reflexologyServices].map((service) => ({
        serviceId: service.id,
        title: service.name,
        description: service.description,
        benefits: service.benefits,
        durations: service.durations.map((duration) => ({
          id: `${service.id}-${duration.time}`,
          duration: duration.time,
          price: duration.price,
          calLink: duration.calLink,
          calOrigin: duration.calOrigin,
          bookingUrl: duration.bookingUrl,
        })),
      })),
    [massageServices, reflexologyServices]
  );

  const [selectedServiceId, setSelectedServiceId] = useState(
    () => groupedServices[0]?.durations[0]?.id || ""
  );

  const selectedService = useMemo(() => {
    const group = groupedServices.find((serviceGroup) =>
      serviceGroup.durations.some((duration) => duration.id === selectedServiceId)
    );
    const duration = group?.durations.find((item) => item.id === selectedServiceId);
    const fallbackGroup = groupedServices[0];
    const fallbackDuration = fallbackGroup?.durations[0];

    return {
      title: group?.title || fallbackGroup?.title || "",
      description: group?.description || fallbackGroup?.description || "",
      duration: duration?.duration || fallbackDuration?.duration || "",
      price: duration?.price || fallbackDuration?.price || "",
      calLink: duration?.calLink || fallbackDuration?.calLink || "",
      calOrigin: duration?.calOrigin || fallbackDuration?.calOrigin || "https://cal.com",
      bookingUrl: duration?.bookingUrl || fallbackDuration?.bookingUrl || "",
    };
  }, [groupedServices, selectedServiceId]);

  const hasCalLink =
    selectedService?.calLink &&
    !selectedService.calLink.includes("votre-lien") &&
    !selectedService.calLink.includes("REPLACE_ME");

  const calEmbedUrl = hasCalLink
    ? `${selectedService.calOrigin}/${selectedService.calLink}/embed?layout=month_view&embedType=inline`
    : "";

  return (
    <section id="reservation" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
              Réservation
            </div>

            <h2 className="mb-4 text-3xl text-foreground md:text-4xl">
              Réservez votre moment de bien-être
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70">
              Choisissez une prestation, puis sélectionnez directement un créneau disponible depuis le calendrier intégré.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-4">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <CalendarCheck size={26} />
                    Choisir une prestation
                  </CardTitle>

                  <CardDescription className="text-base leading-relaxed">
                    Chaque prestation possède sa propre durée et son propre calendrier de réservation.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {groupedServices.map((serviceGroup) => (
                    <div
                      key={serviceGroup.serviceId}
                      className="rounded-3xl border border-border bg-card p-5"
                    >
                      <div className="mb-3 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {serviceGroup.title}
                          </h3>

                          <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                            {serviceGroup.description}
                          </p>
                        </div>

                        <Sparkles className="mt-1 flex-shrink-0 text-accent" size={20} />
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {serviceGroup.durations.map((durationOption) => {
                          const isSelected = selectedServiceId === durationOption.id;

                          return (
                            <button
                              key={durationOption.id}
                              type="button"
                              onClick={() => setSelectedServiceId(durationOption.id)}
                              className={`rounded-full border px-4 py-2 text-sm transition ${
                                isSelected
                                  ? "border-primary bg-primary/10 text-primary"
                                  : "border-border bg-background text-foreground"
                              }`}
                            >
                              {durationOption.duration} · {durationOption.price}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="flex gap-4 pt-6">
                  <ShieldCheck className="mt-1 flex-shrink-0 text-accent" size={24} />
                  <div>
                    <h3 className="font-medium text-foreground">Réservation sécurisée</h3>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                      Le calendrier est géré par {site.booking.provider}. Il permet de gérer les disponibilités, les confirmations et les annulations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="flex gap-4 pt-6">
                  <Mail className="mt-1 flex-shrink-0 text-secondary" size={24} />
                  <div>
                    <h3 className="font-medium text-foreground">Besoin d’un échange avant ?</h3>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                      Vous pouvez utiliser la section contact pour poser une question avant de réserver.
                    </p>
                    <button
                      type="button"
                      onClick={() => onNavigate("contact")}
                      className="mt-3 text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Aller au contact
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-primary">{selectedService.title}</CardTitle>
                <CardDescription className="text-base">
                  {selectedService.duration}
                  {selectedService.price ? ` · ${selectedService.price}` : ""}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {!hasCalLink ? (
                  <div className="rounded-2xl bg-muted p-6 text-sm leading-relaxed text-foreground/75">
                    <strong>Calendrier à configurer :</strong> ajoute le vrai <code>calLink</code> dans <code>src/data/services.js</code>.
                    <br />
                    Exemple : <code>ryan-ndachf/massage-suedois-californien</code>
                  </div>
                ) : (
                  <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
                    <iframe
                      key={`${selectedService.calOrigin}-${selectedService.calLink}`}
                      src={calEmbedUrl}
                      title={`Réserver ${selectedService.title}`}
                      width="100%"
                      height="760"
                      loading="lazy"
                      allow="payment"
                      className="block w-full border-0"
                    />
                  </div>
                )}

                <p className="mt-4 text-xs leading-relaxed text-foreground/55">
                  Paiement sur place. Les informations demandées doivent rester limitées au nécessaire : nom, prénom, email, téléphone et prestation souhaitée.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
