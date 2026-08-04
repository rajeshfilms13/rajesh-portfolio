"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type FilmCardProps = {
  slug: string;
  title: string;
  year: string;
  genre: string;
  duration: string;
  poster: string;
  status: string;
};

export default function Filmcard({
  slug,
  title,
  year,
  genre,
  duration,
  poster,
  status,
}: FilmCardProps) {
  return (
    <Link href={`/films/${slug}`}>

      <motion.article
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{ duration: 0.35 }}
        className="group overflow-hidden rounded-3xl bg-[#111] border border-neutral-800 hover:border-yellow-400 transition-all duration-300 shadow-xl"
      >

        <div className="relative overflow-hidden">

          <Image
            src={poster}
            alt={title}
            width={500}
            height={750}
            className="h-[420px] sm:h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"/>

          <span className="absolute top-4 right-4 rounded-full bg-yellow-400 text-black px-4 py-1 text-xs font-semibold">
            {status}
          </span>

        </div>

        <div className="p-6">

          <p className="text-yellow-400 text-sm">
            {year} • {duration}
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {title}
          </h3>

          <p className="mt-3 text-gray-400">
            {genre}
          </p>

          <div className="mt-6 inline-flex items-center rounded-full border border-yellow-400 px-5 py-2 text-sm transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black">
            View Details →
          </div>

        </div>

      </motion.article>

    </Link>
  );
}