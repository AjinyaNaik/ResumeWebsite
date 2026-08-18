import Image from "next/image";
import SocialLinks from "./SocialLinks";
import TerminalPrompt from "./TerminalPrompt";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pb-20 pt-32 md:px-14">
      <div className="mx-auto grid w-full max-w-[1800px] items-center gap-16 lg:grid-cols-[1fr_450px] xl:grid-cols-[1fr_500px]">
        
        {/* Left */}
        <div className="max-w-6xl">
          <TerminalPrompt command="whoami" />

          <h1 className="font-sans text-6xl font-black leading-[0.95] tracking-tighter text-stone-100 sm:text-7xl md:text-8xl lg:text-9xl">
            Ajinkya{" "}
            <span className="text-amber-400">Naik</span>
          </h1>

          <p className="mt-10 max-w-5xl font-mono text-base font-medium leading-8 text-stone-400 sm:text-lg md:text-xl md:leading-9">
           Hands-on experience in full-stack development, AI integration, and microservices
architecture. Proficient in Python, JavaScript, TypeScript, and cloud deployment with AWS, Docker, and Kubernetes. Passionate about
building scalable AI-driven solutions and optimizing system performance
          </p>

          <div className="mt-10">
            <SocialLinks />
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Outer frame */}
            <div className="absolute -inset-3 border border-amber-400/20" />

            {/* Offset frame */}
            <div className="absolute -bottom-3 -right-3 h-full w-full border border-amber-400/10" />

            <Image
              src="/Ajinkya_Naik.jpeg"
              alt="Ajinkya Naik"
              width={500}
              height={600}
              priority
              className="
                relative
                h-95
                w-75
                object-cover
                transition
                duration-500
                sm:h-122.5
                sm:w-87.5
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}