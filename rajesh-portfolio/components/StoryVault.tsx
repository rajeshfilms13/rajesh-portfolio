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
      "A reserved young man finds it difficult to express his feelings. His silence slowly changes the course of his life, exploring first love, emotional confusion, and regret.",
  },
  {
    title: "PROPSAL",
    genre: "Romance / Emotional",
    format: "Short Film",
    description:
      "A lonely young man writes the proposal he never got the chance to say.",
    concept:
      "After hearing that the girl he loved has left, he writes a heartfelt proposal letter. The letter becomes a dream where he finally expresses everything he couldn't say.",
  },
  {
    title: "The Other Universe",
    genre: "Sci-Fi / Romance",
    format: "Feature Film",
    description:
      "An astronaut returns to a world where time has changed everything.",
    concept:
      "A wormhole mission causes time dilation. The hero returns to find his wife much older while he remains almost the same age.",
  },
  {
    title: "Mental Hospital",
    genre: "Psychological Drama",
    format: "Feature Film",
    description:
      "A tragic love story told through the eyes of a mentally disturbed patient.",
    concept:
      "Reality and imagination slowly merge until the audience questions what was ever real.",
  },
];

export default function StoryVault() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="stories"
        className="bg-black text-white py-28 px-8"
      >
        <div className="max-w-7xl mx-auto">

          <p className="text-center uppercase tracking-[0.3em] text-yellow-400">
            Stories In Development
          </p>

          <h2 className="text-6xl font-bold text-center mt-5">
            Story Vault
          </h2>

          <p className="text-center text-gray-400 max-w-2xl mx-auto mt-6 mb-16">
            Original stories exploring emotion, relationships,
            loneliness, science fiction and humanity.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {stories.map((story) => (
              <div
                key={story.title}
                className="border border-neutral-800 rounded-2xl p-8 hover:border-yellow-400 transition duration-300"
              >
                <p className="text-yellow-400 text-sm">
                  {story.format}
                </p>

                <h3 className="text-2xl font-bold mt-4">
                  {story.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {story.genre}
                </p>

                <p className="text-gray-400 mt-6 leading-7">
                  {story.description}
                </p>
              </div>
            ))}

          </div>

          <div className="flex justify-center mt-14">
            <button
              onClick={() => setOpen(true)}
              className="border border-yellow-400 px-8 py-3 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
            >
              MORE →
            </button>
          </div>

        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center px-5"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#111] border border-neutral-700 rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto p-8"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">
                Story Archive
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-3xl text-gray-400 hover:text-yellow-400"
              >
                ×
              </button>
            </div>

            <div className="space-y-10">

              {stories.map((story) => (
                <div
                  key={story.title}
                  className="border-b border-neutral-800 pb-8"
                >
                  <h3 className="text-2xl font-bold">
                    {story.title}
                  </h3>

                  <p className="text-yellow-400 mt-1">
                    {story.genre} • {story.format}
                  </p>

                  <p className="text-gray-300 mt-5 leading-8">
                    {story.concept}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      )}
    </>
  );
}