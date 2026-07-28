"use client";

import { motion } from "framer-motion";

const stories = [
  {
    title: "கடல். வானம். காற்று.",
    english: "First Love Returns",
    genre: "Romantic Drama",
    status: "Feature Film",
    logline:
      "A quiet young man who struggles to express his feelings faces the regret of losing his first love because of his own hesitation.",
  },
  {
    title: "PROPOSAL",
    english: "Short Film",
    genre: "Emotional Drama",
    status: "Short Film",
    logline:
      "A lonely boy writes the proposal letter he never had the courage to give, only to confront memories of a love that existed only in his imagination.",
  },
  {
    title: "The Unknown Universe",
    english: "Sci-Fi Love Story",
    genre: "Science Fiction / Romance",
    status: "Feature Film",
    logline:
      "After an astronaut returns from a mysterious space mission, he discovers a universe where his life took a completely different path.",
  },
  {
    title: "Mental Hospital Story",
    english: "Psychological Drama",
    genre: "Psychological / Emotional",
    status: "Feature Film",
    logline:
      "A man trapped between reality and imagination struggles to understand whether the love he experiences is real or a creation of his mind.",
  },
];


export default function StoryVault() {
  return (
    <section id="stories" className="bg-black text-white py-28 px-8">

      <div className="max-w-7xl mx-auto">

        <p className="text-yellow-400 tracking-[0.3em] uppercase text-center">
          Screenplay Collection
        </p>

        <h2 className="text-6xl font-bold text-center mt-5 mb-16">
          Story Vault
        </h2>


        <div className="grid md:grid-cols-2 gap-10">

          {stories.map((story, index) => (

            <motion.div
              key={story.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group border border-neutral-800 rounded-2xl p-8 hover:border-yellow-400 transition"
            >

              <p className="text-yellow-400 text-sm">
                {story.status}
              </p>

              <h3 className="text-3xl font-bold mt-4">
                {story.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {story.english}
              </p>

              <p className="mt-5 text-sm text-gray-300">
                {story.genre}
              </p>

              <p className="mt-6 text-gray-300 leading-7">
                {story.logline}
              </p>


              <button className="mt-8 border border-yellow-400 rounded-full px-5 py-2 text-sm hover:bg-yellow-400 hover:text-black transition">
                View Concept
              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}