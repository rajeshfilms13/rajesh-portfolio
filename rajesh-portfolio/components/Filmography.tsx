"use client";

import { useState } from "react";
import Filmcard from "./Filmcard";
import { films } from "@/lib/films";

const filters = ["All Films", "Drama", "Social", "Comedy"];

export default function Filmography() {
  const [activeFilter, setActiveFilter] = useState("All Films");

  const filteredFilms = films.filter((film) => {
    if (activeFilter === "All Films") {
      return true;
    }

    return film.genre.toLowerCase().includes(
      activeFilter.toLowerCase()
    );
  });

  return (
    <section id="films" className="bg-black px-5 py-20 text-white sm:px-8 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl">

        <p className="text-center text-sm uppercase tracking-[0.35em] text-yellow-400">
          Selected Work
        </p>

        <h2 className="mt-5 text-center text-4xl font-bold sm:text-5xl md:text-6xl">
          Featured Films
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center leading-7 text-gray-400">
          A collection of short films exploring emotion, relationships,
          comedy, and social themes.
        </p>

        {/* Filter buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? "rounded-full bg-yellow-400 px-5 py-2 text-sm font-medium text-black transition"
                  : "rounded-full border border-neutral-700 px-5 py-2 text-sm text-gray-300 transition hover:border-yellow-400 hover:text-yellow-400"
              }
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Film cards */}

        <div className="mt-12 grid gap-7 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
          {filteredFilms.map((film) => (
            <Filmcard key={film.slug} {...film} />
          ))}
        </div>

        {/* Empty state */}

        {filteredFilms.length === 0 && (
          <p className="mt-14 text-center text-gray-500">
            No films found in this category.
          </p>
        )}

      </div>
    </section>
  );
}