import type { ReactNode } from "react";

import { Section, SectionHeading } from "@/components/Ui";

export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <Section tone="mist" className="!py-8 md:!py-10">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} intro={intro} />
      </Section>
      <Section>
        <div className="max-w-3xl space-y-8">
          {children}
        </div>
      </Section>
    </>
  );
}

export function LegalBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl text-brand">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-brand/85">{children}</div>
    </section>
  );
}

export function Pending({ label }: { label: string }) {
  return (
    <span className="font-semibold text-raspberry">
      [{label} — informations à venir]
    </span>
  );
}