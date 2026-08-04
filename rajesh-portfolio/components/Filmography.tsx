"use client";

import { useState } from "react";
import Filmcard from "./Filmcard";
import { films } from "@/lib/films";

const filters = ["All Films", "Drama", "Social", "Comedy"];

export default function Filmography() {
  const [activeFilter, setActiveFilter] = useState("All Films");

  const filteredFilms = films.filter((film) => {
    if (activeFilter === "All Films") return true;

    return film.genre
      .toLowerCase()
      .includes(activeFilter.toLowerCase());
  });

  return (
    <section
      id="films"
      className="bg-black text-white py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[0.35em] text-yellow-400 text-center text-xs sm:text-sm">
          Selected Work
        </p>

        <h2 className="mt-5 text-center text-4xl sm:text-5xl lg:text-6xl font-bold">
          Featured Films
        </h2>

        <p className="mt-6 mx-auto max-w-2xl text-center text-gray-400 leading-8 text-base sm:text-lg">
          A collection of short films exploring emotion,
          relationships, comedy, and social themes.
        </p>

        {/* Filters */}

        <div className="mt-12 flex flex-wrap justify-center gap-3">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm transition-all duration-300
              ${
                activeFilter === filter
                  ? "bg-yellow-400 text-black"
                  : "border border-neutral-700 text-gray-300 hover:border-yellow-400 hover:text-yellow-400"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* Cards */}

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {filteredFilms.map((film) => (
            <Filmcard
              key={film.slug}
              {...film}
            />
          ))}

        </div>

        {filteredFilms.length === 0 && (
          <p className="text-center text-gray-500 mt-16">
            No films available.
          </p>
        )}

      </div>
    </section>
  );
}