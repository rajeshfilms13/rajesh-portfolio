export default function Footer() {
  return (
    <footer
      className="border-t border-neutral-900 bg-[#030303] px-5 py-12 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          <div>
            <h3 className="text-3xl font-bold">
              RAJESH<span className="text-yellow-400">.</span>
            </h3>

            <p className="mt-2 text-gray-500">
              Writer • Director • Editor
            </p>
          </div>

          <div className="text-center md:text-right">

            <p className="text-gray-400">
               rajeshfilms13@gmail.com
            </p>

            <p className="mt-2 text-gray-400">
               +91 8754141675
            </p>

          </div>

        </div>

        <div className="my-8 h-px bg-neutral-900" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 Rajesh. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a href="/#films" className="hover:text-yellow-400">
              Films
            </a>

            <a href="/#stories" className="hover:text-yellow-400">
              Stories
            </a>

            <a href="/#contact" className="hover:text-yellow-400">
              Contact
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}