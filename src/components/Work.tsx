"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Purdue University",
    role: "CS Student Scholar Mentor",
    period: "Jan 2024 — May 2026",
    logo: "/companies/purdue.png",
    bullets: [
      "Mentored 20+ Computer Science students in problem-solving, integrating calculus and discrete math concepts to strengthen analytical skills.",
      "Developed personalized study strategies and time management techniques that improved student performance and academic confidence.",
    ],
  },
  {
    company: "360DMMC",
    role: "Software Engineer & AI Automation Intern",
    period: "Oct 2025 — Dec 2025",
    logo: "/companies/360dmmc.png",
    bullets: [
      "Designed and developed AI-driven SaaS applications by integrating automated workflows with n8n, reducing manual processing time by 40% and improving data accuracy across multiple services.",
      "Implemented workflow orchestration linking REST APIs, AI models, and Docker-hosted cloud services using JavaScript, improving processing efficiency and reducing manual effort.",
    ],
  },
  {
    company: "Purdue University",
    role: "Software Developer",
    period: "May 2025 — Aug 2025",
    logo: "/companies/purdue.png",
    bullets: [
      "Designed and implemented a microservice architecture with Node.js, Express, TypeScript, and PostgreSQL, adding an AI-driven summarization feature that improved system throughput by 35% and reduced API response times by 25%.",
      "Built interactive dashboards with Next.js and JavaScript enabling real-time monitoring of 50+ key metrics, improving admin oversight and enabling data-driven decision-making.",
    ],
  },
  {
    company: "Purdue University",
    role: "Undergraduate Research Assistant",
    period: "Jul 2024 — May 2025",
    logo: "/companies/purdue.png",
    bullets: [
      "Conducted research on data visualization effectiveness, analyzing how graph selection impacts interpretation across 200+ datasets focusing on category and discrete relationships.",
      "Identified and documented 12+ visualization anti-patterns and developed actionable guidelines to reduce misinterpretation risk for analysts and decision-makers.",
      "Presented findings at the Purdue Fort Wayne Research Symposium, demonstrating the impact of visualization design on data comprehension.",
    ],
  },
  {
    company: "Purdue University",
    role: "Undergraduate Teaching Assistant",
    period: "May 2024 — May 2025",
    logo: "/companies/purdue.png",
    bullets: [
      "Assisted in managing administrative tasks and supporting students in the year-long Senior Capstone course.",
      "Collaborated in designing a structured syllabus and creating Python-based assignments for the Intro to Data Analytics course.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section
      id="work"
      className="relative border-t border-amber-500/10 px-6 py-28 md:px-14"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-3 font-mono text-sm font-semibold text-amber-400">
            $ git log --work
          </p>

          <h2 className="font-sans text-5xl font-black tracking-tight text-stone-100 md:text-7xl">
            Work Experience
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative space-y-12">
          {/* Continuous Glowing Timeline Stem */}
          <div className="absolute left-[39px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-amber-400/40 via-amber-500/20 to-transparent hidden md:block" />

          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative grid gap-8 border-l border-amber-500/20 pl-8 md:border-l-0 md:grid-cols-[80px_1fr] md:pl-0"
            >
              {/* Logo & Node */}
              <div className="relative flex justify-start md:justify-center">
                <div className="flex h-20 w-20 items-center justify-center border border-amber-500/15 bg-[#0e0d0a] transition-all duration-300 group-hover:border-amber-400/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={56}
                    height={56}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Timeline dot node */}
                <div className="absolute -left-[41px] top-6 md:left-auto md:-right-[11px] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.9)] transition-transform duration-300 group-hover:scale-125">
                  <span className="animate-radar absolute -inset-1 rounded-full bg-amber-400 opacity-60" />
                </div>
              </div>

              {/* Content Box */}
              <div className="border border-amber-500/10 bg-[#0e0d0a]/60 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 group-hover:border-amber-400/30 group-hover:bg-[#0e0d0a]/90 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.05)]">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-stone-100 transition-colors duration-200 group-hover:text-amber-300 md:text-3xl">
                      {experience.role}
                    </h3>

                    <p className="mt-1 font-mono text-sm font-semibold text-amber-400">
                      {experience.company}
                    </p>
                  </div>

                  <span className="font-mono text-sm text-stone-500">
                    {experience.period}
                  </span>
                </div>

                <ul className="mt-6 max-w-5xl space-y-3">
                  {experience.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 font-mono text-sm leading-7 text-stone-400 transition-colors duration-200 group-hover:text-stone-300 md:text-base"
                    >
                      <span className="mt-1 text-amber-400">&gt;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}