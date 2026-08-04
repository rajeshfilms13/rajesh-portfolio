"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const btsImages = [
  {
    src: "/bts/bts-1.jpg",
    title: "Building the Scene",
    description:
      "Planning the visual language before the camera rolls.",
  },
  {
    src: "/bts/bts-2.jpg",
    title: "On Set",
    description:
      "Working with the team to bring the story to life.",
  },
  {
    src: "/bts/bts-3.jpg",
    title: "Finding the Frame",
    description:
      "Exploring composition, movement, and emotion.",
  },
  {
    src: "/bts/bts-4.jpg",
    title: "Directing the Moment",
    description:
      "Shaping performances and connecting the scene.",
  },
  {
    src: "/bts/bts-5.jpg",
    title: "Creating Together",
    description:
      "Every film is built through collaboration.",
  },
  {
    src: "/bts/bts-6.jpg",
    title: "From Shoot to Screen",
    description:
      "Turning raw footage into the final story.",
  },
];

export default function BehindTheScenes() {
  return (
    <section
      id="bts"
      className="bg-[#050505] text-white py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-center uppercase tracking-[0.35em] text-yellow-400 text-xs sm:text-sm">
          The Process
        </p>

        <h2 className="mt-5 text-center text-4xl sm:text-5xl lg:text-6xl font-bold">
          Behind the Scenes
        </h2>

        <p className="mt-6 mx-auto max-w-2xl text-center text-gray-400 leading-8 text-base sm:text-lg">
          A glimpse into the ideas, teamwork,
          experimentation, and moments behind every film.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {btsImages.map((image, index) => (

            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-3xl border border-neutral-800 bg-[#111] shadow-xl hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2"
            >

              <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {image.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {image.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}