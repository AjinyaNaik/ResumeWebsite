import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL is not defined");
}

const adapter = new PrismaPg({
    connectionString,
});

const prisma = new PrismaClient({
    adapter,
});

async function main() {
    console.log("🌱 Starting database seed...");

    await prisma.profile.upsert({
        where: {
            id: 1,
        },
        update: {
            name: "Ajinkya Naik",
            headline: "Full-Stack & AI Developer",
            bio: "I build intelligent software using modern web technologies and AI.",
        },
        create: {
            id: 1,
            name: "Ajinkya Naik",
            headline: "Full-Stack & AI Developer",
            bio: "I build intelligent software using modern web technologies and AI.",
        },
    });
    const skills = [
        // Programming Languages
        {
            name: "Java",
            category: "Programming Languages",
            displayOrder: 1,
        },
        {
            name: "Python",
            category: "Programming Languages",
            displayOrder: 2,
        },
        {
            name: "JavaScript",
            category: "Programming Languages",
            displayOrder: 3,
        },
        {
            name: "TypeScript",
            category: "Programming Languages",
            displayOrder: 4,
        },
        {
            name: "C",
            category: "Programming Languages",
            displayOrder: 5,
        },

        // Frameworks & Libraries
        {
            name: "React",
            category: "Frameworks & Libraries",
            displayOrder: 1,
        },
        {
            name: "Node.js",
            category: "Frameworks & Libraries",
            displayOrder: 2,
        },
        {
            name: "Express",
            category: "Frameworks & Libraries",
            displayOrder: 3,
        },
        {
            name: "Next.js",
            category: "Frameworks & Libraries",
            displayOrder: 4,
        },
        {
            name: "Spring Boot",
            category: "Frameworks & Libraries",
            displayOrder: 5,
        },
        {
            name: "LangChain",
            category: "Frameworks & Libraries",
            displayOrder: 6,
        },

        // Databases
        {
            name: "PostgreSQL",
            category: "Databases",
            displayOrder: 1,
        },
        {
            name: "MySQL",
            category: "Databases",
            displayOrder: 2,
        },
        {
            name: "MongoDB",
            category: "Databases",
            displayOrder: 3,
        },

        // Cloud & DevOps
        {
            name: "AWS",
            category: "Cloud & DevOps",
            displayOrder: 1,
        },
        {
            name: "Docker",
            category: "Cloud & DevOps",
            displayOrder: 2,
        },
        {
            name: "Kubernetes",
            category: "Cloud & DevOps",
            displayOrder: 3,
        },

        // Tools & Software
        {
            name: "Git",
            category: "Tools & Software",
            displayOrder: 1,
        },
        {
            name: "GitHub",
            category: "Tools & Software",
            displayOrder: 2,
        },
        {
            name: "CI/CD",
            category: "Tools & Software",
            displayOrder: 3,
        },
        {
            name: "OpenCV",
            category: "Tools & Software",
            displayOrder: 4,
        },
        {
            name: "Ollama",
            category: "Tools & Software",
            displayOrder: 5,
        },
        {
            name: "n8n",
            category: "Tools & Software",
            displayOrder: 6,
        },

        // Concepts
        {
            name: "Agile/Scrum",
            category: "Concepts",
            displayOrder: 1,
        },
        {
            name: "REST API Design",
            category: "Concepts",
            displayOrder: 2,
        },
        {
            name: "Microservices",
            category: "Concepts",
            displayOrder: 3,
        },
        {
            name: "Security Fundamentals",
            category: "Concepts",
            displayOrder: 4,
        },
    ];

    for (const skill of skills) {
        await prisma.skill.upsert({
            where: {
                name_category: {
                    name: skill.name,
                    category: skill.category,
                },
            },
            update: {
                displayOrder: skill.displayOrder,
                isVisible: true,
            },
            create: {
                ...skill,
                isVisible: true,
            },
        });
    }

    const technologies = [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "C",
    "React",
    "Node.js",
    "Express",
    "Next.js",
    "Spring Boot",
    "LangChain",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "Git",
    "GitHub",
    "CI/CD",
    "OpenCV",
    "Ollama",
    "n8n",
];
for (const name of technologies) {
    await prisma.technology.upsert({
        where: {
            name,
        },
        update: {},
        create: {
            name,
        },
    });
}

    const projects = [
        {
            title: "NestWise — Agentic AI Retirement Guide",
            description:
                "An AI-driven retirement planning application leveraging agentic LangChain, Retrieval-Augmented Generation (RAG), and large language models to provide personalized retirement planning insights.",
            displayOrder: 1,
            isFeatured: true,
            isVisible: true,
            technologies: [
                "Python",
                "LangChain",
                "PostgreSQL",
            ],
        },

        {
            title: "AI-Based Scholar Chat Feedback Platform",
            description:
                "A digital feedback system designed to improve feedback reliability and mentoring visibility. Built with the MERN stack and integrated with Ollama for AI-powered mentor note summarization, with AWS, Docker, and Kubernetes for deployment.",
            displayOrder: 2,
            isFeatured: true,
            isVisible: true,
            technologies: [
                "React",
                "Node.js",
                "MongoDB",
                "Docker",
                "Kubernetes",
                "Ollama",
                "AWS",
            ],
        },

        {
            title: "Project Prometheus — Exam Grader",
            description:
                "An AI-powered system using a custom Convolutional Neural Network and OpenCV to automatically grade handwritten multiple-choice and fill-in-the-blank exams, with OpenAI handling ambiguous cases.",
            displayOrder: 3,
            isFeatured: true,
            isVisible: true,
            technologies: [
                "Python",
                "OpenCV",
            ],
        },

        {
            title: "Research on Effective Data Visualization Techniques",
            description:
                "Research investigating how graph selection impacts data interpretation across categorical and discrete relationships, identifying visualization anti-patterns and developing practical guidelines for effective visualization.",
            displayOrder: 4,
            isFeatured: false,
            isVisible: true,
            technologies: [
                "Python",
            ],
        },
    ];

    for (const project of projects) {
        const { technologies, ...projectData } = project;

        const createdProject = await prisma.project.upsert({
            where: {
                title: project.title,
            },
            update: {
                description: projectData.description,
                displayOrder: projectData.displayOrder,
                isFeatured: projectData.isFeatured,
                isVisible: projectData.isVisible,
            },
            create: projectData,
        });

        // Remove existing technology relationships
        await prisma.projectTechnology.deleteMany({
            where: {
                projectId: createdProject.id,
            },
        });

        // Add technology relationships
        for (const technologyName of technologies) {
            const technology = await prisma.technology.findUnique({
                where: {
                    name: technologyName,
                },
            });

            if (!technology) {
                console.warn(
                    `⚠️ Technology "${technologyName}" not found`
                );
                continue;
            }

            await prisma.projectTechnology.create({
                data: {
                    projectId: createdProject.id,
                    technologyId: technology.id,
                },
            });
        }
    }

    console.log("✅ Database seeded successfully.");
}

main()
    .catch((error) => {
        console.error("❌ Seed failed:", error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });