import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useContent } from "../../content/ContentProvider";

function ServiceCard({ service, onNavigate }) {
  return (
    <Card className="group flex h-full flex-col border-2 transition-colors hover:border-primary/50">
      <CardHeader>
        <CardTitle className="text-primary">{service.name}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between gap-5">
        <div>
          <h4 className="mb-2 text-sm font-medium text-foreground">Bénéfices :</h4>
          <div className="flex flex-wrap gap-2">
            {service.benefits.map((benefit) => (
              <Badge key={benefit} variant="secondary" className="text-xs">
                {benefit}
              </Badge>
            ))}
          </div>
        </div>

        <div className="border-t pt-4">
          <h4 className="mb-2 text-sm font-medium text-foreground">Tarifs :</h4>
          <div className="flex flex-wrap gap-4">
            {service.durations.map((duration) => (
              <div key={`${service.id}-${duration.time}`} className="flex items-baseline gap-2">
                <span className="text-2xl font-medium text-accent">{duration.price}</span>
                <span className="text-sm text-foreground/70">/ {duration.time}</span>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          className="mt-2 rounded-full border-primary text-primary hover:bg-primary/5"
          onClick={() => onNavigate("reservation")}
        >
          Réserver cette séance
        </Button>
      </CardContent>
    </Card>
  );
}

export function Services({ onNavigate }) {
  const { massageServices, reflexologyServices } = useContent();
  return (
    <section id="prestations" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">Prestations</div>
            <h2 className="mb-4 text-3xl text-foreground md:text-4xl">Des soins adaptés à vos besoins</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70">
              Chaque soin est une invitation à ralentir, relâcher les tensions et retrouver une relation plus douce avec votre corps.
            </p>
          </div>

          <Tabs defaultValue="massages" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="massages">Massages</TabsTrigger>
              <TabsTrigger value="reflexology">Réflexologie</TabsTrigger>
            </TabsList>

            <TabsContent value="massages">
              <div className="grid gap-6 md:grid-cols-2">
                {massageServices.map((service) => (
                  <ServiceCard key={service.id} service={service} onNavigate={onNavigate} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reflexology">
              <div className="grid gap-6 md:grid-cols-2">
                {reflexologyServices.map((service) => (
                  <ServiceCard key={service.id} service={service} onNavigate={onNavigate} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
