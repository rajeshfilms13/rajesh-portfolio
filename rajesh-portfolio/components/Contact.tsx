export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12"
    >
      <div className="max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[0.35em] text-yellow-400 text-xs sm:text-sm">
          Let's Create
        </p>

        <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold">
          Let's Tell a Story Together
        </h2>

        <p className="mt-6 mx-auto max-w-2xl text-gray-400 leading-8 text-base sm:text-lg">
          I'm always interested in collaborating with passionate people,
          learning from experienced filmmakers, and creating stories that
          connect with audiences.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-4">

          <a
            href="mailto:rajeshfilms13@gmail.com"
            className="rounded-full bg-yellow-400 px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
          >
            Email Me
          </a>

          <a
            href="https://www.instagram.com/the_ra_je_sh/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral-700 px-7 py-3 font-semibold text-gray-300 transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400"
          >
            Instagram
          </a>

          <a
            href="https://www.youtube.com/channel/UCnVVn1ccINzB8VIlfXmU9oQ/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral-700 px-7 py-3 font-semibold text-gray-300 transition-all duration-300 hover:border-red-500 hover:text-red-400"
          >
            YouTube
          </a>

        </div>

        {/* Contact Info */}

        <div className="mt-16 space-y-3">

          <p className="text-lg text-gray-300">
            📧 rajeshfilms13@gmail.com
          </p>

          <p className="text-lg text-gray-300">
            📞 +91 8754141675
          </p>

        </div>

        <div className="mx-auto mt-12 h-px w-32 bg-yellow-400" />

        <p className="mt-8 text-gray-500">
          Open to collaborations, creative opportunities,
          internships, and filmmaking conversations.
        </p>

      </div>
    </section>
  );
}