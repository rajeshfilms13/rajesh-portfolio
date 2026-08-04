"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">

      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/55 to-black/80" />

      {/* Content */}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[0.35em] text-yellow-400 text-xs sm:text-sm md:text-base"
        >
          Filmmaker
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-5 text-5xl font-bold leading-none sm:text-6xl md:text-7xl lg:text-8xl"
        >
          RAJESH
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg md:max-w-2xl md:text-xl"
        >
          Director • Writer • Editor
        </motion.p>

        <motion.a
          href="#films"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 rounded-full border border-yellow-400 px-8 py-3 text-sm font-medium text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-black sm:px-10 sm:py-4 sm:text-base"
        >
          Explore My Films
        </motion.a>

      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}