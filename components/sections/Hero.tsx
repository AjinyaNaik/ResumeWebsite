import Link from "next/link";

type HeroProps = {
  profile: {
    name: string;
    headline: string | null;
    bio: string | null;
    resumeUrl: string | null;
    githubUrl: string | null;
    linkedinUrl: string | null;
  } | null;
};

export default function Hero({ profile }: HeroProps) {
  if (!profile) {
    return null;
  }

  return (
    <section className="flex min-h-screen items-center px-6 pt-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Full-Stack & AI Developer
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="text-primary">
              {profile.name}
            </span>
            .
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            {profile.headline}
          </p>

          {profile.bio && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {profile.bio}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View My Work
            </Link>

            <Link
              href="#contact"
              className="rounded-lg border px-6 py-3 font-medium transition-colors hover:bg-muted"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6">
            {profile.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub
              </a>
            )}

            {profile.linkedinUrl && (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
            )}

            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Resume
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}