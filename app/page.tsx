import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skill";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import { getEducation } from "@/lib/education";
import { getProjects } from "@/lib/projects";
import { getProfile } from "@/lib/profile";
import { getExperiences } from "@/lib/experience";
import { getSkills } from "@/lib/skills";


export default async function Home() {
   const [profile, experiences,skills,projects, education] = await Promise.all([
    getProfile(),
    getExperiences(),
    getSkills(),
    getProjects(),
    getEducation(),
  ]);

  

  return (
    <>
      <Navbar />

      <main>
        <Hero profile={profile} />

        <About profile={profile} />

        <Experience experiences={experiences} />

         <Skills skills={skills} />

         <Projects projects={projects} />

         <Education education={education} />

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