export function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 pb-16 pt-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {eyebrow && (
            <div className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              {eyebrow}
            </div>
          )}
          <h1 className="text-4xl font-medium leading-tight tracking-tight text-foreground md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-foreground/70 md:text-xl">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
