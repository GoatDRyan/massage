export function SeoTextBlock({ title, children, className = "" }) {
  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed text-foreground/75">
          {title && <h2 className="text-3xl font-medium text-foreground md:text-4xl">{title}</h2>}
          {children}
        </div>
      </div>
    </section>
  );
}
