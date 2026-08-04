"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DirectorProfile() {
  const skills = [
    "Direction",
    "Screenwriting",
    "Story Development",
    "Film Editing",
    "Color Grading",
    "Music Exploration",
    "Acting",
  ];

  const tools = [
    "Adobe Premiere Pro",
    "After Effects",
    "Photoshop",
    "Blender",
    "DaVinci Resolve",
  ];

  return (
    <section
      id="about"
      className="bg-[#050505] py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 text-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative overflow-hidden rounded-3xl border border-neutral-800 shadow-2xl">

            <Image
              src="/profile/director.jpg"
              alt="Rajesh - Filmmaker"
              width={650}
              height={800}
              priority
              className="h-auto w-full max-w-md object-cover transition duration-500 hover:scale-105"
            />

          </div>
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-yellow-400">
            About The Director
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Rajesh A
          </h2>

          <p className="mt-8 text-base leading-8 text-gray-300 sm:text-lg">
            A filmmaker and storyteller exploring human emotions,
            relationships, loneliness, and the small moments that
            create unforgettable memories.
          </p>

          <p className="mt-6 text-base leading-8 text-gray-400">
            Currently pursuing B.Tech Artificial Intelligence and Data
            Science while building a filmmaking journey through short
            films, screenwriting, editing, and visual storytelling.
          </p>

          {/* Skills */}

          <div className="mt-12">

            <h3 className="mb-5 text-xl font-semibold sm:text-2xl">
              Creative Skills
            </h3>

            <div className="flex flex-wrap gap-3">

              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* Tools */}

          <div className="mt-10">

            <h3 className="mb-5 text-xl font-semibold sm:text-2xl">
              Tools
            </h3>

            <div className="flex flex-wrap gap-3">

              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-gray-300 transition duration-300 hover:bg-neutral-800"
                >
                  {tool}
                </span>
              ))}

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}