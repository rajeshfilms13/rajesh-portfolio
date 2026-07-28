import { films } from "@/lib/films";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function FilmPage({ params }: PageProps) {
  const { slug } = await params;

  const film = films.find((item) => item.slug === slug);

  if (!film) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Top navigation */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-8 md:px-10">

        <Link
          href="/#films"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-yellow-400"
        >
          ← Back to Films
        </Link>

      </div>


      {/* Film details */}

      <section className="relative overflow-hidden px-6 pb-24 pt-14 md:px-10">

        {/* Background glow */}

        <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />


        <div className="relative mx-auto grid max-w-7xl items-start gap-10 md:gap-14 lg:grid-cols-[420px_1fr]">

          {/* Poster */}

          <div className="mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px]">

            <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl">

              <Image
                src={film.poster}
                alt={`${film.title} poster`}
                width={700}
                height={1000}
                priority
                className="h-auto w-full object-cover"
              />

            </div>

          </div>


          {/* Information */}

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
              {film.status}
            </p>


            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
              {film.title}
            </h1>


            <p className="mt-5 text-lg text-gray-400">
              {film.year} • {film.genre}
            </p>


            {/* Metadata */}

            <div className="mt-9 grid max-w-xl grid-cols-2 gap-4">

              <div className="rounded-xl border border-neutral-800 bg-neutral-950/80 p-5">

                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Duration
                </p>

                <p className="mt-2 text-lg font-semibold">
                  {film.duration}
                </p>

              </div>


              <div className="rounded-xl border border-neutral-800 bg-neutral-950/80 p-5">

                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Format
                </p>

                <p className="mt-2 text-lg font-semibold">
                  Short Film
                </p>

              </div>

            </div>


            {/* Synopsis */}

            <div className="mt-10 max-w-2xl">

              <h2 className="text-2xl font-semibold">
                Synopsis
              </h2>

              <p className="mt-4 leading-8 text-gray-300">
                {film.synopsis}
              </p>

            </div>


            {/* Roles */}

            <div className="mt-10">
              <h2 className="text-2xl font-semibold">My Contribution</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {film.roles.map((role) => (
                <span key={role} className="rounded-full border border-yellow-400/40 bg-yellow-400/5 px-5 py-2 text-sm text-yellow-300">
                  {role}
                </span>
              ))}
            </div>
            </div>


            {/* Button */}

            <div className="mt-12 flex flex-wrap gap-4">
              {film.youtubeUrl && (
                <a href={film.youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-red-600 px-7 py-3 font-medium text-white transition hover:scale-105 hover:bg-red-500">
                  ▶ Watch on YouTube
                </a>
  )}

  <Link
    href="/#films"
    className="inline-flex items-center rounded-full border border-yellow-400 px-7 py-3 font-medium text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
  >
    Explore More Films
  </Link>

</div>

          </div>

        </div>

      </section>

    </main>
  );
}