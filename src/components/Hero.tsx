"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import TerminalPrompt from "./TerminalPrompt";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pb-20 pt-32 md:px-14">
      <div className="mx-auto grid w-full max-w-[1800px] items-center gap-16 lg:grid-cols-[1fr_450px] xl:grid-cols-[1fr_500px]">
        {/* Left Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl"
        >
          <motion.div variants={itemVariants}>
            <TerminalPrompt
              dynamicTexts={[
                "whoami",
                "Full-Stack Software Engineer",
                "AI & Distributed Systems",
                "MS Bioinformatics @ UIUC",
              ]}
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-sans text-6xl font-black leading-[0.95] tracking-tighter text-stone-100 sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Ajinkya{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(251,191,36,0.3)]">
              Naik
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-10 max-w-5xl font-mono text-base font-medium leading-8 text-stone-400 sm:text-lg md:text-xl md:leading-9"
          >
            Hands-on experience in full-stack development, AI integration, and
            microservices architecture. Proficient in Python, JavaScript,
            TypeScript, and cloud deployment with AWS, Docker, and Kubernetes.
            Passionate about building scalable AI-driven solutions and optimizing
            system performance.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10">
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Right Column / Cyber Frame Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Ambient gold glow behind portrait */}
            <div className="absolute -inset-4 rounded-lg bg-amber-500/15 blur-2xl transition duration-500 group-hover:bg-amber-500/25" />

            {/* Outer offset cyber frame */}
            <motion.div
              animate={{
                x: [0, 4, 0, -4, 0],
                y: [0, -4, 0, 4, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-3 border border-amber-400/30 transition duration-500 group-hover:border-amber-400/60"
            />

            {/* Offset secondary frame */}
            <div className="absolute -bottom-3 -right-3 h-full w-full border border-amber-400/15 transition duration-500 group-hover:border-amber-400/30" />

            {/* Corner Cyber Accents */}
            <div className="absolute -left-4 -top-4 font-mono text-xs font-bold text-amber-400">
              +
            </div>
            <div className="absolute -right-4 -top-4 font-mono text-xs font-bold text-amber-400">
              +
            </div>
            <div className="absolute -left-4 -bottom-4 font-mono text-xs font-bold text-amber-400">
              +
            </div>
            <div className="absolute -right-4 -bottom-4 font-mono text-xs font-bold text-amber-400">
              +
            </div>

            {/* Status Pill Badge */}
            <div className="absolute -top-6 right-0 z-20 flex items-center gap-2 border border-amber-500/30 bg-[#0b0a08]/90 px-3 py-1 font-mono text-xs text-amber-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for 2026 roles</span>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden bg-[#0e0d0a]">
              <Image
                src="/Ajinkya_Naik.png"
                alt="Ajinkya Naik"
                width={500}
                height={600}
                priority
                className="
                  relative
                  h-95
                  w-75
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                  sm:h-122.5
                  sm:w-87.5
                "
              />

              {/* Scanning laser line overlay */}
              <div className="animate-scanline pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-amber-400/10 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}