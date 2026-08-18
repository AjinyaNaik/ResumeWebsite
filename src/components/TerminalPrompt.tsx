export default function TerminalPrompt({
  command,
}: {
  command: string;
}) {
  return (
    <div className="mb-8 font-mono text-base font-semibold text-amber-400 md:text-lg">
      <span>$ </span>
      <span>{command}</span>
      <span className="ml-1 inline-block h-5 w-2 animate-pulse bg-amber-400 align-middle" />
    </div>
  );
}