import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Section({
  children,
  tone = "ivory",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "ivory" | "mist" | "steel" | "blush" | "peach" | "brand";
  className?: string;
  id?: string;
}) {
  const tones: Record<string, string> = {
    ivory: "bg-background",
    mist: "bg-mist",
    steel: "bg-steel/60",
    blush: "bg-blush/45",
    peach: "bg-peach/45",
    brand: "bg-brand text-ivory",
  };
  return (
    <section id={id} className={`${tones[tone]} py-16 md:py-20 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  as = "h2",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
}) {
  const Tag = as;
  return (
    <header className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-raspberry">
          {eyebrow}
        </p>
      ) : null}
      <Tag className="text-3xl leading-tight text-brand md:text-4xl">{title}</Tag>
      <div className={`rule-thin mt-5 ${align === "center" ? "mx-auto" : ""}`} />
      {intro ? <p className="mt-5 text-base leading-relaxed text-brand/80">{intro}</p> : null}
    </header>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-[0_1px_2px_rgba(93,57,67,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}

export function Badge({
  children,
  tone = "gold",
}: {
  children: ReactNode;
  tone?: "gold" | "accent" | "neutral" | "flame";
}) {
  const tones: Record<string, string> = {
    gold: "bg-gold/70 text-brand",
    accent: "bg-fuchsia-accent text-white",
    neutral: "bg-mist text-brand",
    flame: "bg-flame text-white",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60";

export const buttonStyles = {
  primary: `${buttonBase} bg-fuchsia-accent text-white hover:bg-brand`,
  secondary: `${buttonBase} border border-brand text-brand hover:bg-blush/60`,
  soft: `${buttonBase} bg-mist text-brand hover:bg-steel`,
  flame: `${buttonBase} bg-flame text-white hover:bg-brand`,
  ghost: `${buttonBase} text-brand underline underline-offset-4 hover:text-fuchsia-accent`,
};

export function ButtonLink({
  to,
  params,
  search,
  variant = "primary",
  children,
  className = "",
}: {
  to: string;
  params?: Record<string, string> | undefined;
  search?: Record<string, string> | undefined;
  variant?: keyof typeof buttonStyles;
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Link
      to={to as never}
      params={params as never}
      search={search as never}
      className={`${buttonStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Faq({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-border rounded-lg border border-border bg-card">
      {items.map((item) => (
        <details key={item.question} className="group px-5 py-4">
          <summary className="cursor-pointer list-none text-base font-semibold text-brand marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <span className="flex items-start justify-between gap-4">
              {item.question}
              <span aria-hidden className="text-raspberry transition-transform group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-brand/80">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function EmptyState({ title, description }: { title: string; description?: string }) {
  return (
    <div className="rounded-lg border border-dashed border-raspberry/50 bg-blush/25 px-6 py-14 text-center">
      <p className="font-display text-xl text-brand">{title}</p>
      {description ? <p className="mt-2 text-sm text-brand/75">{description}</p> : null}
    </div>
  );
}

export function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border py-2 last:border-0">
      <dt className="text-sm font-medium text-brand/70">{label}</dt>
      <dd className="text-sm font-semibold text-brand">{value}</dd>
    </div>
  );
}