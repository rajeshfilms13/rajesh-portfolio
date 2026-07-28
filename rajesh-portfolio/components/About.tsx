"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0a0a0a] text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-8 py-24">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image src="/images/profile.jpg" alt="Rajesh" width={500} height={700} className="rounded-xl w-full shadow-2xl object-cover"/>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[6px] text-yellow-400 mb-3">
            About Me
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Stories that stay after the credits.
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            I'm Rajesh, an aspiring filmmaker, writer, and editor currently
            pursuing B.Tech in Artificial Intelligence and Data Science.
          </p>

          <p className="text-gray-300 leading-8 mt-6 text-lg">
            My passion lies in creating emotional stories that explore love,
            loneliness, friendship, and the quiet moments that shape people's
            lives.
          </p>

          <p className="text-gray-300 leading-8 mt-6 text-lg">
            Every short film I make is another step toward my dream of directing
            feature films that connect deeply with audiences.
          </p>
        </motion.div>

      </div>
    </section>
  );
}