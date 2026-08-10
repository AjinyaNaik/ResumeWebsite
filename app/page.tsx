import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import { getProfile } from "@/lib/profile";
import { getExperiences } from "@/lib/experience";

export default async function Home() {
   const [profile, experiences] = await Promise.all([
    getProfile(),
    getExperiences(),
  ]);

  

  return (
    <>
      <Navbar />

      <main>
        <Hero profile={profile} />

        <About profile={profile} />

        <Experience experiences={experiences} />

        <section id="about" className="min-h-screen">
          {/* About - coming next */}
        </section>

        <section id="experience" className="min-h-screen">
          {/* Experience - coming next */}
        </section>

        <section id="skills" className="min-h-screen">
          {/* Skills - coming next */}
        </section>

        <section id="projects" className="min-h-screen">
          {/* Projects - coming next */}
        </section>

        <section id="education" className="min-h-screen">
          {/* Education - coming next */}
        </section>

        <section id="contact" className="min-h-screen">
          {/* Contact - coming next */}
        </section>
      </main>
    </>
  );
}