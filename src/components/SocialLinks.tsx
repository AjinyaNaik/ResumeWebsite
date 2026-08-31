"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/AjinyaNaik",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ajinkyanaik02/",
    icon: FaLinkedin,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Resume CTA Button */}
      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="group relative flex items-center gap-3 overflow-hidden border border-amber-400 bg-amber-400 px-7 py-4 font-mono text-sm font-bold text-black shadow-[0_0_20px_rgba(251,191,36,0.25)] transition-all duration-300 hover:bg-amber-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.45)]"
      >
        <FaDownload className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        <span>Download Resume</span>
      </motion.a>

      {/* Social Links */}
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2.5 border border-amber-500/20 bg-[#0e0d0a]/60 px-7 py-4 font-mono text-sm font-semibold text-stone-400 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/60 hover:bg-amber-400/[0.04] hover:text-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]"
          >
            <Icon className="h-4 w-4 text-stone-400 transition-colors duration-200 group-hover:text-amber-400" />
            <span>{link.label}</span>
          </motion.a>
        );
      })}
    </div>
  );
}