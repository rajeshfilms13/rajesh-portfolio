"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Started Learning Filmmaking",
    description:
      "Began learning editing, storytelling, cinematography, and filmmaking fundamentals."
  },
  {
    year: "2025",
    title: "First Short Film",
    description:
      "Completed my first independent short film and continued improving with every project."
  },
  {
    year: "2026",
    title: "Five Short Films",
    description:
      "Directed and edited multiple short films while developing my filmmaking style."
  },
  {
    year: "2026",
    title: "Film Festivals",
    description:
      "Submitted short films to festivals and gained valuable experience from the process."
  },
  {
    year: "Present",
    title: "Writing Feature Films",
    description:
      "Developing emotional feature film scripts and expanding my creative portfolio."
  }
];

export default function Timeline() {
  return (
    <section
      id="journey"
      className="bg-black text-white py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20">
          My Journey
        </h2>

        <div className="relative border-l border-yellow-500">

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              className="ml-10 mb-16"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <div className="absolute -left-[10px] w-5 h-5 rounded-full bg-yellow-500"></div>

              <p className="text-yellow-400 font-semibold">
                {item.year}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3 leading-7">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}