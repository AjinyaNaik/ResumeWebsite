import Image from "next/image";

const projects = [
  {
    name: "NestWise",
    subtitle: "Agentic AI Retirement Guide",
    period: "Aug 2025 — May 2026",
    description:
      "An AI-driven retirement planning application designed to provide personalized retirement planning insights using agentic workflows and retrieval-augmented generation.",
    highlights: [
      "Developing an agentic AI system using LangChain, RAG, and large language models.",
      "Designing personalized retirement planning workflows that combine user information with retrieved financial knowledge.",
      "Developed as an ongoing Senior Capstone project.",
    ],
    technologies: [
      "LangChain",
      "RAG",
      "LLMs",
      "Python",
      "Qdrant",
    ],
    demo: "https://youtu.be/dwH7Bzj2ePc?si=V77qL4gjkzW-hBLT",
  },
  {
    name: "AI Scholar",
    subtitle: "AI-Based Scholar Chat Feedback Platform",
    period: "Jan 2025 — Apr 2025",
    description:
      "A digital feedback platform designed to replace a low-participation QR-code survey and improve feedback reliability and mentoring visibility.",
    highlights: [
      "Built the platform using the MERN stack with an Ollama LLM for AI-powered mentor note summarization.",
      "Deployed using Docker and Kubernetes on AWS for scalable infrastructure.",
      "Improved the accessibility and reliability of student feedback collection.",
    ],
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Ollama",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
    demo: "https://youtu.be/jXIlGjJyTPk?si=x8tHYGrfS_E6s4N9",
  },
  {
    name: "Project Prometheus",
    subtitle: "AI Exam Grader",
    period: "Sep 2024 — Dec 2024",
    description:
      "An AI-powered exam grading system that automates the evaluation of handwritten multiple-choice and fill-in-the-blank exams.",
    highlights: [
      "Built a custom Convolutional Neural Network and OpenCV pipeline achieving 95% standalone accuracy.",
      "Integrated OpenAI as a fallback for ambiguous cases while keeping the CNN as the primary grading system.",
    ],
    technologies: [
      "Python",
      "CNN",
      "OpenCV",
      "OpenAI",
      "Computer Vision",
    ],
  },
  {
    name: "Data Visualization Research",
    subtitle: "Effective Data Visualization Techniques",
    period: "Jul 2024 — May 2025",
    description:
      "Research investigating how graph selection impacts data interpretation across different categorical and discrete relationships.",
    highlights: [
      "Analyzed how visualization choices influence interpretation across Category vs. Discrete and Category vs. Category relationships.",
      "Identified risks associated with misleading visualizations and proposed practical selection guidelines.",
      "Presented findings at the Purdue Fort Wayne Research Symposium.",
    ],
    technologies: [
      "Data Visualization",
      "Research",
      "Data Analysis",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-amber-500/10 px-6 py-28 md:px-14"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm font-semibold text-amber-400">
            $ ls ./projects
          </p>

          <h2 className="font-sans text-5xl font-black tracking-tight text-stone-100 md:text-7xl">
            Projects
          </h2>
        </div>

        {/* Projects */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative flex flex-col border border-amber-500/10 bg-[#0e0d0a] p-8 transition duration-300 hover:-translate-y-1 hover:border-amber-400/40"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs text-amber-400">
                    {project.period}
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-stone-100">
                    {project.name}
                  </h3>

                  <p className="mt-1 font-mono text-sm text-stone-500">
                    {project.subtitle}
                  </p>
                </div>

                <span className="font-mono text-2xl text-amber-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              {/* Description */}
              <p className="mt-7 font-mono text-sm leading-7 text-stone-400">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="mt-6 space-y-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 font-mono text-sm leading-6 text-stone-400"
                  >
                    <span className="text-amber-400">&gt;</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-amber-500/10 px-3 py-1 font-mono text-xs text-amber-400/70"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Demo */}
              {project.demo && (
                <div className="mt-8">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-amber-400/30 px-5 py-3 font-mono text-sm font-semibold text-amber-400 transition hover:border-amber-400 hover:bg-amber-400 hover:text-black"
                  >
                    watch demo
                    <span>→</span>
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}