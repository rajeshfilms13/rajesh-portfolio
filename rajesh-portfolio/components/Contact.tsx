export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black px-5 py-20 text-white sm:px-8 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-4xl text-center">

        <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
          Let&apos;s Create
        </p>

        <h2 className="mt-5 text-4xl font-bold sm:text-5xl md:text-6xl">
          Let&apos;s Tell a Story Together
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
          I&apos;m always interested in collaborating, learning from
          experienced creators, and developing meaningful stories for the
          screen.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <a
            href="mailto:rajeshfilms13@gmail.com"
            className="rounded-full bg-yellow-400 px-7 py-3 font-medium text-black transition hover:scale-105 hover:bg-yellow-300"
          >
            Email Me
          </a>

          <a
            href="https://www.instagram.com/the_ra_je_sh/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral-700 px-7 py-3 font-medium text-gray-200 transition hover:border-yellow-400 hover:text-yellow-400"
          >
            Instagram
          </a>

          <a
            href="https://www.youtube.com/channel/UCnVVn1ccINzB8VIlfXmU9oQ/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral-700 px-7 py-3 font-medium text-gray-200 transition hover:border-red-500 hover:text-red-400"
          >
            YouTube
          </a>

        </div>

        <p className="mt-12 text-sm text-gray-600">
          Open to collaborations, creative opportunities, and filmmaking
          conversations.
        </p>

      </div>
    </section>
  );
}