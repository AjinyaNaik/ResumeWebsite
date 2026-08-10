type Technology = {
    id: number;
    name: string;
};

type ExperienceBullet = {
    id: number;
    content: string;
    displayOrder: number;
};

type Experience = {
    id: number;
    company: string;
    position: string;
    location: string | null;
    startDate: Date;
    endDate: Date | null;
    companyLogo: string | null;
    bullets: ExperienceBullet[];
    technologies: {
        technology: Technology;
    }[];
};

type ExperienceProps = {
    experiences: Experience[];
};

function formatDate(date: Date) {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        year: "numeric",
    }).format(new Date(date));
}

export default function Experience({
    experiences,
}: ExperienceProps) {
    return (
        <section id="experience" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                        Experience
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Where I've worked
                    </h2>
                </div>

                <div className="space-y-10">
                    {experiences.map((experience) => (
                        <article
                            key={experience.id}
                            className="grid gap-4 border-l-2 pl-6 md:grid-cols-[180px_1fr] md:border-l-0 md:pl-0"
                        >
                            <div className="text-sm text-muted-foreground">
                                <span>
                                    {formatDate(experience.startDate)}
                                </span>

                                <span className="mx-2">—</span>

                                <span>
                                    {experience.endDate
                                        ? formatDate(experience.endDate)
                                        : "Present"}
                                </span>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">
                                    {experience.position}
                                </h3>

                                <p className="mt-1 font-medium text-primary">
                                    {experience.company}
                                </p>

                                {experience.location && (
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {experience.location}
                                    </p>
                                )}

                                {experience.bullets.length > 0 && (
                                    <ul className="mt-4 space-y-2">
                                        {experience.bullets.map((bullet) => (
                                            <li
                                                key={bullet.id}
                                                className="leading-relaxed text-muted-foreground"
                                            >
                                                {bullet.content}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {experience.technologies.length > 0 && (
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {experience.technologies.map(
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
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}