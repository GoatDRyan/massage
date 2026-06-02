import { HelpCircle } from "lucide-react";
import { useContent } from "../../content/ContentProvider";

export function FAQ() {
  const { faqItems } = useContent();
  return (
    <section id="faq" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
              <HelpCircle size={16} />
              Questions fréquentes
            </div>
            <h2 className="mb-4 text-3xl text-foreground md:text-4xl">
              FAQ : massages, réflexologie et réservation à Rouen
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70">
              Les réponses aux questions les plus courantes avant de réserver une séance de bien-être à domicile.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border bg-card p-5 shadow-sm transition hover:border-primary/40"
              >
                <summary className="cursor-pointer list-none font-medium text-foreground marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span className="text-primary transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
