import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Stagger } from "@/components/Stagger";
import { Card } from "@/components/Card";
import { getServices } from "@/lib/cms";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Divine Besong Eya",
  description: "Leadership coaching, crisis navigation, and organizational consulting services.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <Container className="py-20">
      <Reveal>
        <SectionHeader
          eyebrow="Services"
          title="Keynote and advisory services built for leadership under pressure"
          description="Practical support for organizations that need momentum, alignment, and resilient execution."
        />
      </Reveal>

      <Reveal>
        <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">What You Can Expect</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <p className="rounded-xl border border-black/10 bg-mist px-4 py-3 text-sm text-ink/80">Actionable frameworks your team can apply immediately</p>
            <p className="rounded-xl border border-black/10 bg-mist px-4 py-3 text-sm text-ink/80">Inclusive leadership strategies for complex environments</p>
            <p className="rounded-xl border border-black/10 bg-mist px-4 py-3 text-sm text-ink/80">Clear outcomes tied to your event and business goals</p>
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

      <Reveal>
        <div className="mt-10 rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
          <h3 className="font-display text-3xl text-navy">Bring Divine to Your Team</h3>
          <p className="mt-3 max-w-2xl text-sm text-ink/75">
            Share your audience, goals, and event format, and we will tailor the right speaking or advisory experience.
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
