"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "stack", href: "#skills" },
    { name: "work", href: "#work" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-amber-500/20 bg-[#0b0a08]/90 shadow-[0_4px_24px_rgba(0,0,0,0.5)] backdrop-blur-md"
          : "border-b border-amber-500/10 bg-[#0b0a08]/60 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-[1800px] items-center justify-between px-6 md:px-14">
        {/* Logo / Terminal Tag */}
        <a
          href="#"
          className="group flex items-center gap-1.5 font-mono text-base font-bold tracking-tight text-amber-400 transition hover:text-amber-300 md:text-lg"
        >
          <span className="text-stone-500 transition group-hover:text-amber-400">~/</span>
          <span>ajinkya-naik</span>
          <span className="inline-block h-3.5 w-1.5 animate-pulse bg-amber-400 align-middle" />
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative font-mono text-sm font-semibold text-stone-400 transition hover:text-amber-400"
            >
              <span className="text-amber-500/60 transition group-hover:text-amber-400">.</span>
              {link.name}()
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 font-mono text-xs font-semibold text-amber-400 transition-all duration-200 hover:border-amber-400 hover:bg-amber-400 hover:text-black"
          >
            resume.pdf
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 border border-amber-500/20 bg-[#0e0d0a] text-amber-400 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <motion.span
            animate={mobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-5 bg-amber-400 transition-transform"
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-0.5 w-5 bg-amber-400 transition-opacity"
          />
          <motion.span
            animate={mobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-5 bg-amber-400 transition-transform"
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-amber-500/20 bg-[#0e0d0a]/95 px-6 py-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-base text-stone-300 transition hover:text-amber-400"
                >
                  <span className="text-amber-500 mr-2">&gt;</span>
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="/resume.pdf"
                download
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.05 }}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center border border-amber-400 bg-amber-400/20 py-2.5 font-mono text-sm font-semibold text-amber-400"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}