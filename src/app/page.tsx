import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/Work";

export default function Home() {
  return (
    <main className="min-h-screen text-stone-100">
      <Navbar />

      <Hero />
       <Education/>
       <Skills/>
      <WorkExperience/>
     
      <Projects/>
      <Contact/>

    </main>
  );
}