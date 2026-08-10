type EducationItem = {
    id: number;
    institution: string;
    degree: string;
    field: string | null;
    location: string | null;
    startDate: Date;
    endDate: Date | null;
    description: string | null;
};

type EducationProps = {
    education: EducationItem[];
};

function formatDate(date: Date) {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        year: "numeric",
    }).format(new Date(date));
}

export default function Education({
    education,
}: EducationProps) {
    return (
        <section id="education" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                        Education
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        My academic journey
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {education.map((item) => (
                        <article
                            key={item.id}
                            className="rounded-2xl border p-6 transition-shadow hover:shadow-md"
                        >
                            <div className="flex flex-col gap-4">
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {item.institution}
                                    </h3>

                                    {item.location && (
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {item.location}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <p className="font-medium">
                                        {item.degree}
                                    </p>

                                    {item.field && (
                                        <p className="mt-1 text-muted-foreground">
                                            {item.field}
                                        </p>
                                    )}
                                </div>

                                <div className="text-sm text-muted-foreground">
                                    {formatDate(item.startDate)}
                                    {" — "}
                                    {item.endDate
                                        ? formatDate(item.endDate)
                                        : "Present"}
                                </div>

                                {item.description && (
                                    <p className="text-sm text-muted-foreground">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}