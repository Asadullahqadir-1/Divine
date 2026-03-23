import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { getAboutData } from "@/lib/cms";

export const metadata: Metadata = {
  title: "About | Divine Besong Eya",
  description: "Biography, leadership philosophy, and professional background of Divine Besong Eya.",
};

export default async function AboutPage() {
  const about = await getAboutData();

  return (
    <Container className="py-20">
      <Reveal>
        <SectionHeader
          eyebrow="About Divine"
          title="Leadership rooted in purpose, clarity, and measurable impact"
          description={about.biography}
        />
      </Reveal>

      <Reveal>
        <div className="mt-8 grid gap-4 rounded-2xl border border-black/10 bg-white p-5 sm:grid-cols-3">
          <div className="rounded-xl border border-black/10 bg-mist p-4 text-center">
            <p className="font-display text-3xl text-navy">4+</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">Published Books</p>
          </div>
          <div className="rounded-xl border border-black/10 bg-mist p-4 text-center">
            <p className="font-display text-3xl text-navy">MBA</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">Risk Management</p>
          </div>
          <div className="rounded-xl border border-black/10 bg-mist p-4 text-center">
            <p className="font-display text-3xl text-navy">Global</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">Leadership Lens</p>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <Reveal>
          <article className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
          <h2 className="font-display text-3xl text-navy">Leadership Philosophy</h2>
          <p className="mt-3 text-base leading-relaxed text-ink/80">{about.leadershipPhilosophy}</p>

          <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Professional Background</h3>
          <p className="mt-3 text-sm text-ink/75">
            MBA Candidate specializing in {about.specialization}. Experienced in leadership coaching and leading diverse
            teams with clarity, inclusion, and measurable outcomes.
          </p>

          <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Focus Areas</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {about.focusAreas.map((area: string) => (
              <span key={area} className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-navy">
                {area}
              </span>
            ))}
          </div>
          </article>
        </Reveal>

        <Reveal>
          <aside className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
          <h3 className="font-display text-3xl text-navy">Key Highlights</h3>
          <ul className="mt-4 space-y-4 text-sm text-ink/80">
            {about.keyHighlights.map((item: string) => (
              <li key={item} className="rounded-xl border border-black/10 p-4">
                {item}
              </li>
            ))}
          </ul>
          </aside>
        </Reveal>
      </div>
    </Container>
  );
}
