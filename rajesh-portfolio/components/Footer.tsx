export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-[#030303] text-white">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

          {/* Left */}

          <div className="text-center lg:text-left">

            <h3 className="text-3xl font-bold tracking-wider">
              RAJESH
              <span className="text-yellow-400">.</span>
            </h3>

            <p className="mt-3 text-gray-500">
              Writer • Director • Editor
            </p>

          </div>

          {/* Right */}

          <div className="text-center lg:text-right">

            <p className="text-gray-300">
              📧 rajeshfilms13@gmail.com
            </p>

            <p className="mt-3 text-gray-300">
              📞 +91 8754141675
            </p>

          </div>

        </div>

        <div className="my-10 h-px bg-neutral-900" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-sm text-center">
            © 2026 Rajesh. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <a
              href="#films"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              Films
            </a>

            <a
              href="#stories"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              Stories
            </a>

            <a
              href="#contact"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              Contact
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}