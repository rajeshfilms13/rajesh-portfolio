import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DirectorProfile from "@/components/DirectorProfile";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Filmography from "@/components/Filmography";
import StoryVault from "@/components/StoryVault";
import BehindTheScenes from "@/components/BehindTheScenes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import FilmGrain from "@/components/FilmGrain";
import AmbientLight from "@/components/AmbientLight";

export default function Home() {
  return (
    <main className="relative bg-black text-white">
      <AmbientLight />
      <Loader />
      <FilmGrain />

      <Navbar />
      <Hero />
      <DirectorProfile />
      <About />
      <Timeline />
      <Filmography />
      <StoryVault />
      <BehindTheScenes />
      <Contact />
      <Footer />
    </main>
  );
}