"use client";

export default function Navbar() {
  const links = [
    { name: "stack", href: "#skills" },
    { name: "work", href: "#work" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-amber-500/15 bg-[#0b0a08]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-[1800px] items-center justify-between px-6 md:px-14">
        <a
          href="#"
          className="font-mono text-lg font-bold tracking-tight text-amber-400 transition hover:text-amber-300"
        >
          ~/ajinkya-naik
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-sm font-semibold text-stone-400 transition hover:text-amber-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}