"use client";

import { motion } from "framer-motion";

const stories = [
  {
    title: "கடல். வானம். காற்று.",
    type: "Feature Film",
    genre: "Romance • Drama • Heartbreak",
    description:
      "A quiet young man struggles with love, fear, and the regret of words left unsaid.",
  },
  {
    title: "PROPOSAL",
    type: "Short Film",
    genre: "Romance • Emotional",
    description:
      "A lonely young man writes the proposal he never got the chance to say.",
  },
  {
    title: "The Other Universe",
    type: "Feature Film",
    genre: "Sci-Fi • Romance",
    description:
      "An astronaut returns to a world where time has changed everything.",
  },
  {
    title: "Mental Hospital",
    type: "Feature Film",
    genre: "Psychological Drama",
    description:
      "A tragic love story where reality and imagination slowly become one.",
  },
];

export default function StoryVault() {
  return (
    <section
      id="stories"
      className="bg-[#050505] text-white py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-center uppercase tracking-[0.35em] text-yellow-400 text-xs sm:text-sm">
          Stories In Development
        </p>

        <h2 className="mt-5 text-center text-4xl sm:text-5xl lg:text-6xl font-bold">
          Story Vault
        </h2>

        <p className="mt-6 mx-auto max-w-2xl text-center text-gray-400 leading-8">
          Original stories exploring love, emotion, loneliness,
          science fiction, and the complexity of human relationships.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group rounded-3xl border border-neutral-800 bg-[#111] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400"
            >

              <p className="text-sm text-yellow-400">
                {story.type}
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

            </motion.div>
          ))}

        </div>

        {/* Contact Card */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-20 max-w-3xl rounded-3xl border border-yellow-400/30 bg-gradient-to-b from-[#111] to-[#070707] p-10 text-center"
        >

          <h3 className="text-3xl font-bold">
            More Original Screenplays
          </h3>

          <p className="mt-6 leading-8 text-gray-400">
            Additional feature films, short films, and series concepts are
            available for producers, collaborators, and filmmakers upon request.
          </p>

          <div className="mx-auto my-8 h-px w-28 bg-yellow-400" />

          <p className="text-lg text-white">
            Contact for more scripts
          </p>

          <a
            href="mailto:rajeshfilms13@gmail.com"
            className="mt-5 inline-block text-xl font-semibold text-yellow-400 hover:text-yellow-300 transition"
          >
            rajeshfilms13@gmail.com
          </a>

        </motion.div>

      </div>
    </section>
  );
}