import { ButtonLink, Section } from "@/components/Ui";

export function FaqCta({ text }: { text: string }) {
  return (
    <Section tone="mist" className="!py-6 md:!py-8">
      <div className="text-center">
        <h2 className="font-display text-xl text-brand">Une question ?</h2>
        <p className="mx-auto mt-1.5 max-w-xl text-sm leading-snug text-brand/80">{text}</p>
        <div className="mt-3 flex justify-center">
          <ButtonLink to="/faq">Consulter la FAQ</ButtonLink>
        </div>
      </div>
    </Section>
  );
}
