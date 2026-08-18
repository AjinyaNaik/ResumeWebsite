const links = [
  {
    label: "github",
    href: "https://github.com/AjinyaNaik",
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/ajinkyanaik02/",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      <a
        href="/resume.pdf"
        download
        className="border border-amber-500 bg-amber-400 px-7 py-4 font-mono text-sm font-bold text-black transition hover:bg-amber-300"
      >
        download resume.pdf
      </a>

      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-amber-500/20 px-7 py-4 font-mono text-sm font-semibold text-stone-400 transition hover:border-amber-400/60 hover:text-amber-400"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}