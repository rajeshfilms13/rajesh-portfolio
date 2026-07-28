"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DirectorProfile() {
  return (
    <section
      id="about"
      className="bg-[#050505] text-white py-28 px-8"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">


        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="relative overflow-hidden rounded-2xl">

            <Image
              src="/profile/director.jpg"
              alt="Rajesh - Filmmaker"
              width={600}
              height={700}
              className="object-cover"
            />

          </div>

        </motion.div>



        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-yellow-400 tracking-[0.3em] uppercase">
            About The Director
          </p>


          <h2 className="mt-5 text-6xl font-bold">
            Rajesh A
          </h2>


          <p className="mt-6 text-gray-300 leading-8 text-lg">

            A filmmaker and storyteller exploring human emotions,
            relationships, loneliness, and the small moments that
            create unforgettable memories.

          </p>


          <p className="mt-5 text-gray-300 leading-8">

            Currently pursuing B.Tech Artificial Intelligence and Data Science,
            while building a journey in filmmaking through short films,
            screenwriting, editing, and visual storytelling.

          </p>



          {/* Skills */}

          <div className="mt-10">

            <h3 className="text-2xl font-semibold mb-5">
              Creative Skills
            </h3>


            <div className="flex flex-wrap gap-3">

              {[
                "Direction",
                "Screenwriting",
                "Story Development",
                "Film Editing",
                "Color Grading",
                "Music Exploration",
                "Acting",
              ].map((skill)=>(
                <span
                  key={skill}
                  className="border border-neutral-700 rounded-full px-4 py-2 text-sm hover:border-yellow-400 transition"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>



          {/* Software */}

          <div className="mt-8">

            <h3 className="text-2xl font-semibold mb-5">
              Tools
            </h3>


            <div className="flex flex-wrap gap-3">

              {[
                "Adobe Premiere Pro",
                "After Effects",
                "Photoshop",
                "Blender",
                "DaVinci Resolve",
              ].map((tool)=>(
                <span
                  key={tool}
                  className="bg-neutral-900 rounded-full px-4 py-2 text-sm"
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