"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const education = [
  {
    institution: "University of Illinois Urbana-Champaign",
    degree: "MS in Bioinformatics (CS Concentration)",
    concentration: "Computer Science Concentration",
    period: "2026 — 2028",
    logo: "/companies/uiuc.png",
    status: "In Progress",
  },
  {
    institution: "Purdue University Fort Wayne",
    degree: "BS in Computer Science",
    concentration: "Computer Science",
    period: "May 2026",
    logo: "/companies/purdue.png",
    status: "Completed",
  },
];

export default function Education() {
  return (
    <section
      id="education"
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
            $ cat ./education
          </p>

          <h2 className="font-sans text-5xl font-black tracking-tight text-stone-100 md:text-7xl">
            Education
          </h2>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((school, index) => (
            <motion.article
              key={school.institution}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="group relative grid gap-8 border border-amber-500/10 bg-[#0e0d0a]/80 p-7 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.06)] md:grid-cols-[100px_1fr_auto] md:items-center md:p-8"
            >
              {/* Logo */}
              <div className="flex h-20 w-20 items-center justify-center border border-amber-500/15 bg-[#0b0a08] transition-all duration-300 group-hover:border-amber-400/50 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                <Image
                  src={school.logo}
                  alt={`${school.institution} logo`}
                  width={60}
                  height={60}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Information */}
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-stone-100 transition-colors duration-200 group-hover:text-amber-300 md:text-3xl">
                    {school.institution}
                  </h3>

                  {school.status && (
                    <span className="flex items-center gap-1.5 border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 font-mono text-xs text-amber-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                      {school.status}
                    </span>
                  )}
                </div>

                <p className="mt-2 font-mono text-base font-semibold text-amber-400">
                  {school.degree}
                </p>

                <p className="mt-2 font-mono text-sm text-stone-500">
                  {school.concentration}
                </p>
              </div>

              {/* Date */}
              <div className="font-mono text-sm text-stone-500 md:text-right">
                {school.period}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}