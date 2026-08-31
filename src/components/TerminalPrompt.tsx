"use client";

import { useEffect, useState } from "react";

interface TerminalPromptProps {
  command?: string;
  dynamicTexts?: string[];
  prefix?: string;
}

export default function TerminalPrompt({
  command = "whoami",
  dynamicTexts,
  prefix = "$",
}: TerminalPromptProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const textsToCycle = dynamicTexts && dynamicTexts.length > 0 ? dynamicTexts : [command];

  useEffect(() => {
    if (textsToCycle.length === 1 && !dynamicTexts) {
      // Single static command typing effect once
      let current = "";
      let i = 0;
      const target = textsToCycle[0];
      const timer = setInterval(() => {
        if (i < target.length) {
          current += target[i];
          setDisplayText(current);
          i++;
        } else {
          clearInterval(timer);
        }
      }, 70);
      return () => clearInterval(timer);
    }

    // Dynamic typewriter cycle
    const currentTarget = textsToCycle[textIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTarget.length) {
            setDisplayText(currentTarget.slice(0, displayText.length + 1));
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentTarget.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % textsToCycle.length);
          }
        }
      },
      displayText.length === currentTarget.length && !isDeleting ? 1500 : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, textsToCycle, dynamicTexts]);

  return (
    <div className="mb-8 flex items-center font-mono text-base font-semibold text-amber-400 md:text-lg">
      <span className="mr-2 text-stone-500">{prefix}</span>
      <span>{displayText}</span>
      <span className="ml-1 inline-block h-5 w-2.5 animate-pulse bg-amber-400 align-middle shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
    </div>
  );
}