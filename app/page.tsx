import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skill";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import { getAchievements } from "@/lib/achievements";
import { getEducation } from "@/lib/education";
import { getProjects } from "@/lib/projects";
import { getProfile } from "@/lib/profile";
import { getExperiences } from "@/lib/experience";
import { getSkills } from "@/lib/skills";


export default async function Home() {
   const [profile, experiences,skills,projects, education, achievements] = await Promise.all([
    getProfile(),
    getExperiences(),
    getSkills(),
    getProjects(),
    getEducation(),
    getAchievements(),
  ]);

  

  return (
    <>
      <Navbar />

      <main>
        <Hero profile={profile} />

       



       

    

        

        <section id="about" className="min-h-screen">
          {/* About - coming next */}
           <About profile={profile} />
        </section>

        <section id="experience" className="min-h-screen">
          {/* Experience - coming next */}

        <Experience experiences={experiences} />
        </section>

        <section id="skills" className="min-h-screen">
          {/* Skills - coming next */}

         <Skills skills={skills} />
        </section>

        <section id="projects" className="min-h-screen">
          {/* Projects - coming next */}
            <Projects projects={projects} />
        </section>

        <section id="education" className="min-h-screen">
          {/* Education - coming next */}
               <Education education={education} />
        </section>

        <section id="achievements" className="min-h-screen">
          {/* Achievements - coming next */}
            <Achievements achievements={achievements} />
        </section>

        <section id="contact" className="min-h-screen">
          {/* Contact - coming next */}
          <Contact />
        </section>
      </main>
    </>
  );
}