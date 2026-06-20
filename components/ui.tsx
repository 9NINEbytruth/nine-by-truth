import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-[0.7rem] tracking-widest2 text-brass">
      <span className="h-px w-6 bg-brass" />
      {children}
    </span>
  );
}

export function SectionTitle({
  en,
  jp,
  align = "left",
}: {
  en: string;
  jp?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <h2 className="font-cormorant text-4xl font-light tracking-wide text-ink md:text-5xl">
        {en}
      </h2>
      {jp && (
        <p className="mt-3 text-xs tracking-wider2 text-ink-soft">{jp}</p>
      )}
    </div>
  );
}

export function PageHero({
  en,
  jp,
  label,
}: {
  en: string;
  jp: string;
  label: string;
}) {
  return (
    <section className="px-6 pt-36 pb-16 md:pt-48 md:pb-24">
      <div className="mx-auto max-w-content">
        <p className="text-[0.7rem] tracking-widest2 text-brass">{label}</p>
        <h1 className="mt-6 font-cormorant text-5xl font-light tracking-wide text-ink md:text-7xl">
          {en}
        </h1>
        <p className="mt-4 text-sm tracking-wider2 text-ink-soft">{jp}</p>
      </div>
    </section>
  );
}
