type Technology = {
    id: number;
    name: string;
};

type Project = {
    id: number;
    title: string;
    description: string | null;
    image: string | null;
    githubUrl: string | null;
    liveUrl: string | null;
    isFeatured: boolean;
    technologies: {
        technology: Technology;
    }[];
};

type ProjectsProps = {
    projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
    return (
        <section id="projects" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                        Projects
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Things I've built
                    </h2>

                    <p className="mt-4 max-w-2xl text-muted-foreground">
                        A selection of projects where I've worked with
                        full-stack development, artificial intelligence,
                        automation, and computer vision.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            {project.image ? (
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            ) : (
                                <div className="flex aspect-video items-center justify-center bg-muted">
                                    <span className="text-sm text-muted-foreground">
                                        Project
                                    </span>
                                </div>
                            )}

                            <div className="p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-xl font-semibold">
                                        {project.title}
                                    </h3>

                                    {project.isFeatured && (
                                        <span className="shrink-0 rounded-full border px-2.5 py-1 text-xs">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                {project.description && (
                                    <p className="mt-4 leading-relaxed text-muted-foreground">
                                        {project.description}
                                    </p>
                                )}

                                {project.technologies.length > 0 && (
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.technologies.map(
                                            ({ technology }) => (
                                                <span
                                                    key={technology.id}
                                                    className="rounded-full border px-3 py-1 text-xs"
                                                >
                                                    {technology.name}
                                                </span>
                                            )
                                        )}
                                    </div>
                                )}

                                {(project.githubUrl ||
                                    project.liveUrl) && (
                                    <div className="mt-6 flex gap-4">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-medium hover:underline"
                                            >
                                                GitHub →
                                            </a>
                                        )}

                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-medium hover:underline"
                                            >
                                                Live Demo →
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}