export function PersonalStory() {
  return (
    <section id="mon-parcours" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">Mon parcours</div>
            <h2 className="text-3xl text-foreground md:text-5xl">Bienvenue dans mon univers</h2>
          </div>

          <div className="grid items-start gap-12 md:grid-cols-5">
            <div className="space-y-6 text-lg leading-relaxed text-foreground/80 md:col-span-3">
              <p>
                Il y a des chemins de vie qui ne se tracent pas en ligne droite. Ils serpentent, ralentissent parfois, puis repartent plus larges, plus vrais.
              </p>

              <p>
                Depuis plus de quinze ans, j’ai choisi de mettre mes mains et mon cœur au service des autres : auprès des enfants, des personnes âgées, puis à travers le massage bien-être.
              </p>

              <p>
                Un jour, j’ai dû m’arrêter, me reconstruire, puis retrouver un souffle. C’est dans ce chemin que le massage est devenu une évidence : non pas une simple technique, mais une façon d’accompagner l’autre avec présence.
              </p>

              <p>
                Aujourd’hui, chaque séance est unique. J’accueille les bébés, les enfants, les adultes et les seniors, avec une attention particulière portée à la sécurité, à l’écoute et au respect du corps.
              </p>

              <p className="rounded-2xl bg-muted p-6 font-medium text-foreground">
                Ce que vous pouvez emporter après une séance : une sensation d’apaisement, de réconfort et d’espace intérieur retrouvé.
              </p>

              <p className="text-xl italic text-primary">
                Renaissens, c’est l’invitation à revenir à soi, par les sens, à son propre rythme.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="sticky top-24">
                <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                  <img
                    src={`${import.meta.env.BASE_URL}img/magali.png`}
                    alt="Magali Perrin, praticienne en massages bien-être et réflexologie à Rouen"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width="1200"
                    height="1800"
                  />
                </div>
                <img
                  src={`${import.meta.env.BASE_URL}img/logo.png`}
                  alt="Signature de Magali Perrin"
                  className="mt-6 mx-auto h-auto w-92 object-contain rounded-lg"
                  loading="lazy"
                  width="200"
                  height="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
