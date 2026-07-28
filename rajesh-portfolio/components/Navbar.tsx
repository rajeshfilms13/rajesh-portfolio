"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Home", href: "#" },
    { name: "Films", href: "#films" },
    { name: "Journey", href: "#journey" },
    { name: "Stories", href: "#stories" },
    { name: "Behind Scenes", href: "#bts" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={
        scrolled
          ? "fixed top-0 left-0 w-full z-40 bg-black/90 backdrop-blur-md py-4 shadow-lg transition-all duration-500"
          : "fixed top-0 left-0 w-full z-40 bg-transparent py-6 transition-all duration-500"
      }
    >

      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          className="text-3xl font-bold tracking-[0.2em] text-yellow-400"
        >
          RAJESH
        </a>


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-yellow-400 transition duration-300"
            >
              {link.name}
            </a>
          ))}

        </div>


        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 px-8 py-8">

          <div className="flex flex-col gap-6">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg text-gray-300 hover:text-yellow-400 transition"
              >
                {link.name}
              </a>
            ))}

          </div>

        </div>
      )}

    </nav>
  );
}