"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaAws,
  FaJava,
} from "react-icons/fa";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiSpringboot,
  SiLangchain,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiOpencv,
  SiOllama,
  SiN8N,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: IconType;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "C", icon: SiC },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "LangChain", icon: SiLangchain },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
    ],
  },
  {
    name: "Tools & AI",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "OpenCV", icon: SiOpencv },
      { name: "Ollama", icon: SiOllama },
      { name: "n8n", icon: SiN8N },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-amber-500/10 px-6 py-28 md:px-14"
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
            $ cat ./skills
          </p>

          <h2 className="font-sans text-5xl font-black tracking-tight text-stone-100 md:text-7xl">
            Skills
          </h2>

          <p className="mt-5 max-w-2xl font-mono text-sm leading-7 text-stone-500">
            Technologies and tools I use to build full-stack applications,
            distributed systems, and AI-powered software.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.article
              key={category.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.08,
              }}
              className="group border border-amber-500/10 bg-[#0e0d0a] p-7 transition-colors duration-300 hover:border-amber-400/30 md:p-8"
            >
              {/* Category title */}
              <div className="mb-7 flex items-center gap-3">
                <span className="font-mono text-xs text-amber-500">
                  //
                </span>

                <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-stone-300">
                  {category.name}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay:
                          categoryIndex * 0.08 +
                          skillIndex * 0.04,
                      }}
                      whileHover={{
                        y: -4,
                        scale: 1.03,
                      }}
                      className="group/skill flex cursor-default items-center gap-3 border border-amber-500/10 bg-[#0b0a08] px-4 py-3 transition-colors duration-200 hover:border-amber-400/40 hover:bg-amber-400/[0.03]"
                    >
                      <Icon
                        className="h-5 w-5 text-stone-500 transition-colors duration-200 group-hover/skill:text-amber-400"
                        aria-hidden="true"
                      />

                      <span className="font-mono text-sm text-stone-400 transition-colors duration-200 group-hover/skill:text-stone-100">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Terminal footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 border border-amber-500/10 bg-[#0b0a08] px-5 py-4 font-mono text-xs text-stone-600"
        >
          <span className="text-amber-400">$</span>{" "}
          echo &quot;always learning...&quot;
          <span className="ml-2 animate-pulse text-amber-400">
            _
          </span>
        </motion.div>
      </div>
    </section>
  );
}