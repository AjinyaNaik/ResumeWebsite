import Image from "next/image";

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
      className="border-t border-amber-500/10 px-6 py-28 md:px-14"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section heading */}
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm font-semibold text-amber-400">
            $ cat ./education
          </p>

          <h2 className="font-sans text-5xl font-black tracking-tight text-stone-100 md:text-7xl">
            Education
          </h2>
        </div>

        {/* Education */}
        <div className="space-y-6">
          {education.map((school) => (
            <article
              key={school.institution}
              className="group grid gap-8 border border-amber-500/10 bg-[#0e0d0a] p-7 transition duration-300 hover:border-amber-400/40 md:grid-cols-[100px_1fr_auto] md:items-center md:p-8"
            >
              {/* Logo */}
              <div className="flex h-20 w-20 items-center justify-center border border-amber-500/10 bg-[#0b0a08] transition group-hover:border-amber-400/40">
                <Image
                  src={school.logo}
                  alt={`${school.institution} logo`}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Information */}
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-stone-100 md:text-3xl">
                    {school.institution}
                  </h3>

                  {school.status === "Incoming" && (
                    <span className="border border-amber-400/30 px-2 py-1 font-mono text-xs text-amber-400">
                      INCOMING
                    </span>
                  )}
                </div>

                <p className="mt-2 font-mono text-base text-amber-400">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}