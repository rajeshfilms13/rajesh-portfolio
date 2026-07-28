import Image from "next/image";

const btsImages = [
  {
    src: "/bts/bts-1.jpg",
    title: "Building the Scene",
    description: "Planning the visual language before the camera rolls.",
  },
  {
    src: "/bts/bts-2.jpg",
    title: "On Set",
    description: "Working with the team to bring the story to life.",
  },
  {
    src: "/bts/bts-3.jpg",
    title: "Finding the Frame",
    description: "Exploring composition, movement, and emotion.",
  },
  {
    src: "/bts/bts-4.jpg",
    title: "Directing the Moment",
    description: "Shaping performances and connecting the scene.",
  },
  {
    src: "/bts/bts-5.jpg",
    title: "Creating Together",
    description: "Every film is built through collaboration.",
  },
  {
    src: "/bts/bts-6.jpg",
    title: "From Shoot to Screen",
    description: "Turning raw footage into the final story.",
  },
];

export default function BehindTheScenes() {
  return (
    <section
      id="bts"
      className="bg-[#050505] px-5 py-20 text-white sm:px-8 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        <p className="text-center text-sm uppercase tracking-[0.35em] text-yellow-400">
          The Process
        </p>

        <h2 className="mt-5 text-center text-4xl font-bold sm:text-5xl md:text-6xl">
          Behind the Scenes
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center leading-7 text-gray-400">
          A glimpse into the ideas, teamwork, experimentation, and
          moments behind the films.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {btsImages.map((image) => (
            <div
              key={image.src}
              className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950"
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

                <h3 className="text-xl font-semibold">
                  {image.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {image.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}