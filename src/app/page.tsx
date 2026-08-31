import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/Work";

export default function Home() {
  return (
    <main className="relative min-h-screen text-stone-100 selection:bg-amber-400 selection:text-black">
      <ScrollProgress />
      <ParticleBackground />
      <Navbar />

      <Hero />
      <Education />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
    </main>
  );
}