type Props = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className = "" }: Props) {
  return (
    <div className={`border-l-2 border-zinc-300 pl-5 ${className}`.trim()}>
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-600 md:text-[17px]">
        {description}
      </p>
    </div>
  );
}
