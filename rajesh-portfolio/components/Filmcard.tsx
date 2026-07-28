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
  language: string;
  status: string;
  poster: string;
  trailer: string;
  synopsis: string;
  directorNote: string;
  gallery: string[];
  cast: { name: string; role?: string }[];
  crew: { role: string; name: string }[];
  camera: string;
  editing: string;
  colorGrading: string;
  music: string;
  soundDesign: string;
  aspectRatio: string;
  resolution: string;
  festivalSelections: string[];
  awards: string[];
  imdb: string;
  youtube: string;
  instagram: string;
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
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-2xl cursor-pointer bg-neutral-900 shadow-xl"
      >
        <Image
          src={poster}
          alt={title}
          width={500}
          height={750}
          className="w-full h-[520px] object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Status */}
        <div className="absolute top-4 right-4 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-black">
          {status}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">

          <p className="text-sm text-yellow-400">
            {year} • {duration}
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            {title}
          </h3>

          <p className="mt-2 text-gray-300">
            {genre}
          </p>

          <div className="mt-5 inline-flex items-center rounded-full border border-yellow-400 px-5 py-2 text-sm transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black">
            View Details →
          </div>

        </div>
      </motion.div>
    </Link>
  );
}