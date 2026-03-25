import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Stagger } from "@/components/Stagger";
import { Card } from "@/components/Card";
import { getServices } from "@/lib/cms";
import Link from "next/link";

const workshopOfferings = [
  {
    title: "Workshop 1: The Inclusive Leader - Leading Beyond Bias",
    duration: "Half-Day (4 hours)",
    format: "In-Person or Virtual",
    summary:
      "An immersive session helping leaders identify unconscious bias, understand decision-making blind spots, and build practical inclusion habits.",
    points: [
      "Unconscious bias identification and interruption",
      "Microaggressions: recognition, impact, and response",
      "Building psychological safety in team environments",
      "Courageous conversations for difficult DEI dialogue",
    ],
  },
  {
    title: "Workshop 2: Equity by Design - Restructuring Systems for Fairness",
    duration: "Full Day (7 hours)",
    format: "In-Person or Virtual",
    summary:
      "A strategic workshop for senior leaders redesigning hiring, performance management, and promotion pathways through an equity lens.",
    points: [
      "Equity vs equality in organizational practice",
      "Inclusive hiring frameworks and interview panels",
      "Equitable performance and promotion pathways",
      "Data-driven DEI metrics for measurable improvement",
    ],
  },
  {
    title: "Workshop 3: Purpose-Led Leadership in the AI Era",
    duration: "3 Hours",
    format: "Virtual-First",
    summary:
      "A focused learning experience for leaders adopting AI while maintaining human purpose, inclusion, and trust.",
    points: [
      "Understanding AI's impact on diverse workforces",
      "Leading with empathy in technology-driven environments",
      "Inclusive AI design principles for fairness",
      "Sustaining purpose during rapid change",
    ],
  },
  {
    title: "Workshop 4: Building Cohesive, Diverse Teams",
    duration: "Half-Day",
    format: "In-Person Recommended",
    summary:
      "A practical team session focused on turning differences into strength and building shared values that survive organizational change.",
    points: [
      "Team identity and diverse perspectives",
      "Conflict as a catalyst for stronger collaboration",
      "Co-creating team norms and shared values",
      "Sustaining cohesion through change",
    ],
  },
];

export const metadata: Metadata = {
  title: "Services | Divine Besong Eya",
  description: "DEI and leadership workshops designed for purpose-led, inclusive, high-impact organizations.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <Container className="py-20">
      <Reveal>
        <SectionHeader
          eyebrow="Services"
          title="Leadership workshops on DEI, purpose, and AI-era transformation"
          description="Engaging live and virtual offerings for executives, managers, HR professionals, and emerging leaders."
        />
      </Reveal>

      <Reveal>
        <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">What You Can Expect</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <p className="rounded-xl border border-black/10 bg-mist px-4 py-3 text-sm text-ink/80">Evidence-based DEI frameworks with practical team application</p>
            <p className="rounded-xl border border-black/10 bg-mist px-4 py-3 text-sm text-ink/80">Facilitated experiences designed for measurable culture change</p>
            <p className="rounded-xl border border-black/10 bg-mist px-4 py-3 text-sm text-ink/80">Clear action commitments teams can implement immediately</p>
          </div>
        </div>
      </Reveal>

      <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.title}
            title={service.title}
            description={service.description}
            ctaText={service.ctaText}
            ctaLink={service.ctaLink}
          />
        ))}
      </Stagger>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {workshopOfferings.map((workshop) => (
          <Reveal key={workshop.title}>
            <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{workshop.duration} | {workshop.format}</p>
              <h3 className="mt-3 font-display text-3xl leading-tight text-navy">{workshop.title}</h3>
              <p className="mt-3 text-sm text-ink/75">{workshop.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                {workshop.points.map((point) => (
                  <li key={point} className="rounded-lg border border-black/10 bg-mist px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
          <h3 className="font-display text-3xl text-navy">Bring Divine to Your Team</h3>
          <p className="mt-3 max-w-2xl text-sm text-ink/75">
            Share your audience, goals, and format, and we will tailor the right workshop or strategic learning experience.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-live rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-ink">
              Check Availability
            </Link>
            <Link href="/about" className="btn-live rounded-full border border-navy px-5 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white">
              Meet Divine
            </Link>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
