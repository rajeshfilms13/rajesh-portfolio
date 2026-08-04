"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Started Learning Filmmaking",
    description:
      "Began learning editing, storytelling, cinematography, and filmmaking fundamentals.",
  },
  {
    year: "2025",
    title: "First Short Film",
    description:
      "Completed my first independent short film and continued improving with every project.",
  },
  {
    year: "2026",
    title: "Five Short Films",
    description:
      "Directed and edited multiple short films while developing my filmmaking style.",
  },
  {
    year: "2026",
    title: "Film Festivals",
    description:
      "Submitted short films to festivals and gained valuable experience from the process.",
  },
  {
    year: "Present",
    title: "Writing Feature Films",
    description:
      "Developing emotional feature film scripts and expanding my creative portfolio.",
  },
];

export default function Timeline() {
  return (
    <section
      id="journey"
      className="bg-black py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 text-white"
    >
      <div className="max-w-5xl mx-auto">

        <p className="text-center uppercase tracking-[0.35em] text-yellow-400 text-xs sm:text-sm">
          My Journey
        </p>

        <h2 className="mt-5 text-center text-4xl sm:text-5xl lg:text-6xl font-bold">
          The Road So Far
        </h2>

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="absolute left-4 top-0 h-full w-[2px] bg-yellow-500 md:left-1/2 md:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`relative mb-14 flex w-full items-center
                ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
            >

              {/* Dot */}

              <div className="absolute left-4 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-black bg-yellow-400 md:left-1/2" />

              {/* Card */}

              <div
                className={`ml-12 w-full rounded-2xl border border-neutral-800 bg-[#111] p-6 shadow-xl transition duration-300 hover:border-yellow-400 hover:-translate-y-1 md:ml-0 md:w-[44%]
                  ${
                    index % 2 === 0
                      ? "md:mr-auto"
                      : "md:ml-auto"
                  }`}
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
                  {item.year}
                </p>

                <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}