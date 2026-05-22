import { Calendar, Leaf, Users } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { experiences } from "../../data/experiences";

const icons = {
  users: Users,
  leaf: Leaf,
};

export function Experiences() {
  return (
    <section id="experiences" className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-2 text-sm text-secondary">Expériences bien-être</div>
            <h2 className="mb-4 text-3xl text-foreground md:text-4xl">Cercles de parole à Rouen et ateliers bien-être en Normandie</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70">
              Au-delà des séances individuelles, je propose des cercles de parole, des ateliers bien-être et des week-ends ressourçants en Normandie pour une vraie déconnexion et une reconnexion corporelle.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {experiences.map((experience) => {
              const Icon = icons[experience.icon] ?? Leaf;
              return (
                <Card key={experience.title} className="overflow-hidden border-2 transition-colors hover:border-secondary/50">
                  <img src={experience.img.startsWith("/") ? experience.img : `${import.meta.env.BASE_URL}${experience.img.replace(/^\.\//, "")}`} alt={experience.alt} loading="lazy" width="800" height="520" className="h-64 w-full object-cover" />
                  <CardHeader className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                        <Icon className="text-secondary" size={20} />
                      </div>
                      <div>
                        <CardTitle className="text-primary">{experience.title}</CardTitle>
                        <div className="mt-1 flex items-center gap-1 text-sm text-foreground/70">
                          <Calendar size={14} />
                          <span>{experience.schedule}</span>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">{experience.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
