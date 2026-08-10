type Achievement = {
    id: number;
    title: string;
    description: string | null;
    organization: string | null;
    date: Date | null;
    url: string | null;
};

type AchievementsProps = {
    achievements: Achievement[];
};

function formatDate(date: Date) {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        year: "numeric",
    }).format(new Date(date));
}

export default function Achievements({
    achievements,
}: AchievementsProps) {
    return (
        <section id="achievements" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                        Achievements
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Highlights & recognition
                    </h2>
                </div>

                <div className="space-y-6">
                    {achievements.map((achievement) => (
                        <article
                            key={achievement.id}
                            className="rounded-2xl border p-6 transition-shadow hover:shadow-md"
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div className="max-w-3xl">
                                    <h3 className="text-xl font-semibold">
                                        {achievement.title}
                                    </h3>

                                    {achievement.organization && (
                                        <p className="mt-1 font-medium text-primary">
                                            {achievement.organization}
                                        </p>
                                    )}

                                    {achievement.description && (
                                        <p className="mt-4 leading-relaxed text-muted-foreground">
                                            {achievement.description}
                                        </p>
                                    )}

                                    {achievement.url && (
                                        <a
                                            href={achievement.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 inline-block text-sm font-medium hover:underline"
                                        >
                                            View achievement →
                                        </a>
                                    )}
                                </div>

                                {achievement.date && (
                                    <span className="shrink-0 text-sm text-muted-foreground">
                                        {formatDate(achievement.date)}
                                    </span>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}