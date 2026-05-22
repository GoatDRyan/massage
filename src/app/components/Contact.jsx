import { Mail, MapPin, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { site } from "../../config/site";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Demande de contact — ${site.brandName}`);
    const body = encodeURIComponent(
      `Bonjour,\n\nNom : ${name}\nEmail : ${email}\n\nMessage :\n${message}\n\nMerci.`
    );
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }, [name, email, message]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("Merci de remplir votre nom, votre email et votre message.");
      return;
    }

    setStatus("Votre application email va s’ouvrir pour envoyer le message.");
    window.location.href = mailtoHref;
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">Contact</div>
            <h2 className="mb-4 text-3xl text-foreground md:text-4xl">Restons en contact</h2>
            <p className="text-lg leading-relaxed text-foreground/70">
              Une question, un besoin particulier ou une demande de rendez-vous ? Contactez la praticienne directement.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Envoyer un message</CardTitle>
                <CardDescription>
                  Ce formulaire ouvre votre application email. Il ne stocke aucune donnée sur le site.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Nom</Label>
                    <Input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Votre nom"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Votre message..."
                      rows={6}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                    />
                  </div>

                  {status && <p className="rounded-xl bg-muted p-3 text-sm text-foreground/70">{status}</p>}

                  <Button type="submit" className="w-full rounded-full bg-primary hover:bg-primary/90">
                    Préparer l’email
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-foreground">Zone d’intervention</h3>
                      <p className="text-sm leading-relaxed text-foreground/70">Déplacements à domicile dans un rayon de {site.interventionArea}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
                      <Phone className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-foreground">Téléphone</h3>
                      <a href={site.phoneHref} className="text-sm text-foreground/70 transition-colors hover:text-primary">
                        {site.phone}
                      </a>
                      <p className="mt-1 text-xs text-foreground/50">Du lundi au samedi, 9h-19h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Mail className="text-accent" size={20} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-foreground">Email</h3>
                      <a href={site.emailHref} className="break-all text-sm text-foreground/70 transition-colors hover:text-primary">
                        {site.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="overflow-hidden rounded-2xl border-2 border-border shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=M%C3%A9tropole%20Rouen%20Normandie&z=10&output=embed"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zone d’intervention sur la Métropole Rouen Normandie"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
