"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] =useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#"
          className="text-yellow-400 font-bold tracking-[0.18em] text-2xl sm:text-3xl"
        >
          RAJESH
        </a>

        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-8 lg:gap-10">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Navigation */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-neutral-800">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition"
            >
              {link.name}
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
}