export default function Footer() {

  return (
    <footer className="border-t border-neutral-900 bg-[#030303] px-5 py-12 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">

        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold tracking-wide">
            RAJESH<span className="text-yellow-400">.</span>
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Writer • Director • Editor
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
          <a
            href="/#"
            className="transition hover:text-yellow-400"
          >
            Home
          </a>

          <a
            href="/#films"
            className="transition hover:text-yellow-400"
          >
            Films
          </a>

          <a
            href="/#journey"
            className="transition hover:text-yellow-400"
          >
            Journey
          </a>

          <a
            href="/#stories"
            className="transition hover:text-yellow-400"
          >
            Stories
          </a>

          <a
            href="/#bts"
            className="transition hover:text-yellow-400"
          >
            Behind the Scenes
          </a>

          <a
            href="/#contact"
            className="transition hover:text-yellow-400"
          >
            Contact
          </a>
        </div>

        <p className="text-center text-sm text-gray-600 md:text-right">
          © 2026 Rajesh. All rights reserved.
        </p>

      </div>
    </footer>
  );
}