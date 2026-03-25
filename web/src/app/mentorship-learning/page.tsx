import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Stagger } from "@/components/Stagger";
import { Card } from "@/components/Card";
import { getMentorshipPrograms } from "@/lib/cms";

const courseLibrary = [
  {
    title: "Course 1: The Power of Purpose - Finding Your North Star",
    duration: "45 mins",
    modules: [
      "What is purpose and why it matters now",
      "Discovering your values and strengths",
      "Writing your personal purpose statement",
      "Living your purpose daily through practical habits",
    ],
  },
  {
    title: "Course 2: Inclusion 101 - An Introduction for Every Professional",
    duration: "60 mins",
    modules: [
      "Definitions: diversity, equity, inclusion, and belonging",
      "Your role regardless of title",
      "Simple inclusive practices you can start today",
      "What inclusion looks like in the AI age",
    ],
  },
  {
    title: "Course 3: Impact Mapping - Measuring What Truly Matters",
    duration: "45 mins",
    modules: [
      "Defining impact beyond profit",
      "Identifying your sphere of influence",
      "Tools for tracking human-centered impact",
      "Communicating your impact story",
    ],
  },
  {
    title: "Course 4: DEI in the AI Workplace - What Every Employee Needs to Know",
    duration: "90 mins",
    modules: [
      "How AI perpetuates bias: real-world examples",
      "The human responsibility in machine decisions",
      "Advocating for equitable technology in your organization",
      "The future of work: staying relevant, staying human",
    ],
  },
  {
    title: "Course 5: Resilience, Purpose and the Next Move",
    duration: "60 mins",
    modules: [
      "Understanding crisis as a catalyst",
      "Anchoring in purpose when plans collapse",
      "Strategic decision-making under pressure",
      "Building resilient teams and cultures",
    ],
  },
];

const communityEngagements = [
  {
    title: "Monthly Fireside Chats",
    description:
      "Live virtual conversations with DEI leaders, risk professionals, educators, and change-makers from around the globe.",
  },
  {
    title: "Roundtable Discussions",
    description:
      "Facilitated small-group sessions (8-15 participants) focused on practical challenges in purpose-led and inclusive leadership.",
  },
  {
    title: "Community Challenge Series",
    description:
      "Monthly 7-day inclusion and purpose challenges designed to build daily habits and shared accountability.",
  },
  {
    title: "Ask the Author - Open Q&A",
    description:
      "Quarterly open sessions with Besongeya on published work, practical insights, and upcoming projects.",
  },
  {
    title: "Annual Summit: Purpose, Inclusion and Impact",
    description:
      "A full-day virtual summit with keynotes, panels, and breakout sessions for leaders committed to transformative practice.",
  },
];

export const metadata: Metadata = {
  title: "Mentorship and Learning | Divine Besong Eya",
  description: "Mini-courses, community engagements, and practical learning pathways on purpose, inclusion, and impact.",
};

export default async function MentorshipPage() {
  const programs = await getMentorshipPrograms();

  return (
    <Container className="py-20">
      <Reveal>
        <SectionHeader
          eyebrow="Mentorship and Learning"
          title="Mini training courses for busy professionals"
          description="Self-paced learning experiences designed for completion in under two hours, with practical tools you can apply immediately."
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

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {courseLibrary.map((course) => (
          <Reveal key={course.title}>
            <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{course.duration}</p>
              <h3 className="mt-3 font-display text-3xl leading-tight text-navy">{course.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                {course.modules.map((module) => (
                  <li key={module} className="rounded-lg border border-black/10 bg-mist px-3 py-2">
                    {module}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
          <h3 className="font-display text-4xl text-navy">Community Engagements</h3>
          <p className="mt-3 max-w-3xl text-sm text-ink/75">
            This platform is a community, not only a content hub. These engagement formats are designed to foster practical dialogue, accountability, and collective growth.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {communityEngagements.map((item) => (
              <article key={item.title} className="rounded-xl border border-black/10 bg-mist p-4">
                <h4 className="font-display text-2xl text-navy">{item.title}</h4>
                <p className="mt-2 text-sm text-ink/75">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-10">
        <div className="rounded-2xl border border-black/10 bg-white p-8">
        <h3 className="font-display text-4xl text-navy">Take the next step with purpose.</h3>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-live rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink">
            Join the Next Cohort
          </Link>
          <Link href="/contact" className="btn-live rounded-full border border-navy px-5 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white">
            Ask About Team Access
          </Link>
        </div>
        </div>
      </Reveal>
    </Container>
  );
}
