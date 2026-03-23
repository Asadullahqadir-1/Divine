import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Stagger } from "@/components/Stagger";
import { Card } from "@/components/Card";
import { getMentorshipPrograms } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Mentorship and Learning | Divine Besong Eya",
  description: "Courses, workshops, and 1-on-1 mentorship programs by Divine Besong Eya.",
};

export default async function MentorshipPage() {
  const programs = await getMentorshipPrograms();

  return (
    <Container className="py-20">
      <Reveal>
        <SectionHeader
          eyebrow="Mentorship and Learning"
          title="Courses, Workshops and Mentorship"
          description="Practical learning paths for leaders and teams committed to growth and meaningful impact."
        />
      </Reveal>

      <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
        {programs.map((program) => (
          <Card
            key={program.title}
            title={program.title}
            description={program.description}
            ctaText={program.ctaText}
            ctaLink={program.ctaLink}
            meta={program.type}
          />
        ))}
      </Stagger>

      <Reveal className="mt-10">
        <div className="rounded-2xl border border-black/10 bg-white p-8">
        <h3 className="font-display text-4xl text-navy">Take the next step in your leadership journey.</h3>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-live rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink">
            Apply for Mentorship
          </Link>
          <Link href="/contact" className="btn-live rounded-full border border-navy px-5 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white">
            Join Program
          </Link>
        </div>
        </div>
      </Reveal>
    </Container>
  );
}
