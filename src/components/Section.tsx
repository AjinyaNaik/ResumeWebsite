import { ReactNode } from "react";

interface SectionProps {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}

export default function Section({
  id,
  label,
  title,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="border-t border-amber-500/10 px-6 py-28 md:px-14"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="mb-12">
          <p className="mb-3 font-mono text-sm font-semibold text-amber-400">
            $ {label}
          </p>

          <h2 className="font-sans text-4xl font-black tracking-tight text-stone-100 md:text-6xl">
            {title}
          </h2>
        </div>

        {children}
      </div>
    </section>
  );
}