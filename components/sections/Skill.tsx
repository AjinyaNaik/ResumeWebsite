type Skill = {
    id: number;
    name: string;
    category: string;
    icon: string | null;
    proficiency: number | null;
};

type SkillsProps = {
    skills: Skill[];
};

export default function Skills({ skills }: SkillsProps) {
    const groupedSkills = skills.reduce<Record<string, Skill[]>>(
        (groups, skill) => {
            if (!groups[skill.category]) {
                groups[skill.category] = [];
            }

            groups[skill.category].push(skill);

            return groups;
        },
        {}
    );

    return (
        <section id="skills" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                        Skills
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Technologies I work with
                    </h2>

                    <p className="mt-4 max-w-2xl text-muted-foreground">
                        A collection of technologies, tools, and concepts
                        I use to build full-stack applications and
                        AI-powered solutions.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {Object.entries(groupedSkills).map(
                        ([category, categorySkills]) => (
                            <div
                                key={category}
                                className="rounded-xl border p-6"
                            >
                                <h3 className="text-lg font-semibold">
                                    {category}
                                </h3>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {categorySkills.map((skill) => (
                                        <span
                                            key={skill.id}
                                            className="rounded-full border bg-muted/40 px-3 py-1.5 text-sm transition-colors hover:bg-muted"
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}