"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="philosophy"
      className="bg-[#0a0a0a] text-white py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/images/profile.jpg"
            alt="Rajesh"
            width={550}
            height={700}
            className="w-full max-w-md rounded-3xl object-cover shadow-2xl border border-neutral-800 transition duration-500 hover:scale-[1.02]"
          />
        </motion.div>

        {/* Text */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.35em] text-yellow-400 text-xs sm:text-sm">
            My Philosophy
          </p>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Stories that stay after the credits.
          </h2>

          <div className="mt-8 space-y-6 text-gray-300 leading-8 text-base sm:text-lg">

            <p>
              I'm Rajesh, an aspiring filmmaker, writer, and editor currently
              pursuing B.Tech in Artificial Intelligence and Data Science.
            </p>

            <p>
              My passion lies in creating emotional stories that explore love,
              loneliness, friendship, and the quiet moments that shape people's
              lives.
            </p>

            <p>
              Every short film I make is another step toward my dream of
              directing feature films that connect deeply with audiences.
            </p>

          </div>

          {/* Quote */}

          <div className="mt-10 border-l-4 border-yellow-400 pl-6">

            <p className="italic text-gray-400 text-lg leading-8">
              "Cinema isn't just entertainment.
              It's a memory people carry long after leaving the theatre."
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}