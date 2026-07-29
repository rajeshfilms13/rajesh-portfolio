export default function StoryVault() {
  const stories = [
    {
      title: "கடல். வானம். காற்று.",
      format: "Feature Film",
      genre: "Romance / Drama",
      description:
        "A quiet young man struggles with love, fear, and the regret of words left unsaid.",
    },
    {
      title: "PROPSAL",
      format: "Short Film",
      genre: "Romance / Emotional",
      description:
        "A lonely young man writes the proposal he never got the chance to say.",
    },
    {
      title: "The Other Universe",
      format: "Feature Film",
      genre: "Sci-Fi / Romance",
      description:
        "An astronaut returns to a world where time has changed everything.",
    },
    {
      title: "Mental Hospital",
      format: "Feature Film",
      genre: "Psychological Drama",
      description:
        "A tragic love story where reality and imagination slowly become one.",
    },
  ];

  return (
    <section
      id="stories"
      className="bg-black py-28 px-8 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <p className="text-center text-sm uppercase tracking-[0.35em] text-yellow-400">
          Stories In Development
        </p>

        <h2 className="mt-5 text-center text-6xl font-bold">
          Story Vault
        </h2>

        <p className="mx-auto mt-6 mb-20 max-w-2xl text-center text-gray-400 leading-8">
          Original stories exploring love, emotion, loneliness,
          science fiction, and the complexity of human relationships.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stories.map((story) => (
            <div
              key={story.title}
              className="rounded-2xl border border-neutral-800 bg-[#090909] p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-400"
            >
              <p className="text-sm text-yellow-400">
                {story.format}
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                {story.title}
              </h3>

              <p className="mt-2 text-gray-500">
                {story.genre}
              </p>

              <p className="mt-6 leading-7 text-gray-400">
                {story.description}
              </p>
            </div>
          ))}

        </div>

        {/* Contact Card */}

        <div className="mx-auto mt-20 max-w-3xl rounded-3xl border border-yellow-400/30 bg-gradient-to-b from-[#111] to-[#070707] p-10 text-center">

          <h3 className="text-3xl font-bold">
            More Original Screenplays
          </h3>

          <p className="mt-6 leading-8 text-gray-400">
            Additional feature films, short films, and series concepts
            are available for producers, collaborators, and filmmakers
            upon request.
          </p>

          <div className="mx-auto my-8 h-px w-32 bg-yellow-400" />

          <p className="text-lg text-white">
            Contact for more scripts
          </p>

          <a
            href="mailto:rajeshfilms13@gmail.com"
            className="mt-5 inline-block text-xl font-semibold text-yellow-400 transition hover:text-yellow-300"
          >
            rajeshfilms13@gmail.com
          </a>

        </div>

      </div>
    </section>
  );
}