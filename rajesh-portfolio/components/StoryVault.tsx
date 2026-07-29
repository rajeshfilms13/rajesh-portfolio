"use client";

import { useState } from "react";

const stories = [
  {
    title: "கடல். வானம். காற்று.",
    genre: "Romance / Drama",
    format: "Feature Film",
    description:
      "A quiet young man struggles with love, fear, and the regret of words left unsaid.",
    concept:
      "A reserved young man finds it difficult to express his feelings. When love enters his life, his silence and hesitation slowly create consequences he never expected. The story explores first love, emotional confusion, regret, and the pain of realizing that some moments cannot be brought back.",
  },
  {
    title: "PROPOSAL",
    genre: "Romance / Emotional Drama",
    format: "Short Film",
    description:
      "A lonely young man writes the proposal he never got the chance to say.",
    concept:
      "After learning that the girl he loved has left before he could express his feelings, a lonely young man returns to his room and writes a proposal letter. The words take him into a dream where he finally says everything he wanted to say. When reality returns, the unsent letter becomes a symbol of a love that remained only in his imagination.",
  },
  {
    title: "The Other Universe",
    genre: "Science Fiction / Romance",
    format: "Feature Film",
    description:
      "An astronaut returns from a mission to discover that time has changed the life he left behind.",
    concept:
      "After a dangerous space mission involving a wormhole and an unstable star, an astronaut returns to a world where time has moved differently. His wife is now much older while he remains almost the same age. Messages from another version of himself force him to choose between an improved alternate life and the original life he once knew.",
  },
];

export default function StoryVault() {
  const [selectedStory, setSelectedStory] = useState<
    (typeof stories)[number] | null
  >(null);

  return (
    <section
      id="stories"
      className="bg-black px-5 py-20 text-white sm:px-8 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-yellow-400">
          Stories in Development
        </p>

        <h2 className="mt-5 text-center text-4xl font-bold sm:text-5xl md:text-6xl">
          Story Vault
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center leading-7 text-gray-400">
          Original stories exploring love, emotion, loneliness, memory,
          and the choices that shape people.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.title}
              className="group rounded-2xl border border-neutral-800 bg-neutral-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-400/50"
            >
              <p className="text-sm text-yellow-400">
                {story.format}
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                {story.title}
              </h3>

              <p className="mt-3 text-sm text-gray-500">
                {story.genre}
              </p>

              <p className="mt-6 leading-7 text-gray-400">
                {story.description}
              </p>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-12 flex justify-center"><button
    className="rounded-full border border-yellow-400 px-8 py-3 text-yellow-400 transition hover:bg-yellow-400 hover:text-black">
    MORE →</button>
      </div>
      {/* Concept popup */}

      {selectedStory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-5 py-8 backdrop-blur-sm"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-neutral-700 bg-[#111] p-7 shadow-2xl sm:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedStory(null)}
              aria-label="Close concept"
              className="absolute right-5 top-4 text-3xl text-gray-400 transition hover:text-yellow-400"
            >
              ×
            </button>

            <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
              {selectedStory.format}
            </p>

            <h3 className="mt-4 pr-10 text-3xl font-bold sm:text-4xl">
              {selectedStory.title}
            </h3>

            <p className="mt-3 text-gray-500">
              {selectedStory.genre}
            </p>

            <div className="my-8 h-px bg-neutral-800" />

            <h4 className="text-lg font-semibold text-white">
              Concept
            </h4>

            <p className="mt-4 leading-8 text-gray-300">
              {selectedStory.concept}
            </p>

            <button
              type="button"
              onClick={() => setSelectedStory(null)}
              className="mt-10 rounded-full bg-yellow-400 px-6 py-3 font-medium text-black transition hover:bg-yellow-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}