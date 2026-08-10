type AboutProps = {
  profile: {
    bio: string | null;
  } | null;
};

export default function About({ profile }: AboutProps) {
  if (!profile) {
    return null;
  }

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Building software that solves real problems.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {profile.bio}
          </p>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            My interests span full-stack development, artificial intelligence,
            distributed systems, and building practical software products.
          </p>
        </div>
      </div>
    </section>
  );
}