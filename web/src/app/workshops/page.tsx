import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const workshops = [
  {
    duration: "4-6 Hours | Virtual or In-Person",
    title: "Leadership Mindset Intensive",
    format: "Interactive + Breakout Sessions",
    groupSize: "15-150 participants",
    bestForMeta: "All leadership levels",
    overview:
      "This immersive experience decodes the invisible architecture of leadership - the mindset operating system that determines how you see challenges, make decisions, and lead others. Participants walk away with expanded thinking and a framework they can apply immediately.",
    gains: [
      "Clarity on the 5 core mindsets of exceptional leaders and where you currently operate",
      "A proven framework to shift limiting beliefs that block effectiveness",
      "Tools to build resilience, adaptability, and emotional intelligence",
      "Practical strategies to influence and inspire others from a position of strength",
      "A concrete 30-day action plan to amplify leadership impact",
      "Increased confidence in navigating complex leadership scenarios",
    ],
    idealFor: [
      "Executive teams stepping into bigger roles",
      "Leaders transitioning from management to strategic thinking",
      "Teams facing significant organisational change",
      "Emerging leaders ready to expand their influence",
    ],
    outcomes: [
      "Shifted perspective on leadership responsibility",
      "Enhanced decision-making capability",
      "Greater confidence in leadership presence",
      "Improved team dynamics and collaboration",
    ],
  },
  {
    duration: "Full Day (6-8 Hours) | In-Person or Hybrid",
    title: "High-Performance Teams Workshop",
    format: "Immersive + Practical Exercises",
    groupSize: "10-80 participants",
    bestForMeta: "Leadership teams seeking alignment",
    overview:
      "Built for teams that want to move from good to exceptional. This full-day journey addresses the core pillars of high-performance teams: clarity of purpose, psychological safety, accountability, and adaptive execution. Teams leave with aligned goals, clear commitments, and renewed energy.",
    gains: [
      "Shared understanding of team strengths and growth areas",
      "Clarity on individual roles, responsibilities, and performance expectations",
      "A culture of psychological safety where people can take intelligent risks",
      "Systems for collaborative problem-solving and decision-making",
      "Enhanced communication protocols and meeting effectiveness",
      "A written team charter defining how you work together and keep each other accountable",
    ],
    idealFor: [
      "C-suite and executive leadership teams",
      "Department heads and functional leaders",
      "Teams experiencing communication breakdowns",
      "New teams needing to establish strong foundations",
    ],
    outcomes: [
      "Stronger interpersonal relationships and trust",
      "Aligned strategic direction and goals",
      "Increased collaboration and reduced silos",
      "Improved team performance metrics",
    ],
  },
  {
    duration: "Half Day (3.5 Hours) | Customised Format",
    title: "Strategic Decision Making & Execution",
    format: "Strategic Frameworks + Case Studies",
    groupSize: "20-150 participants",
    bestForMeta: "Strategic thinkers and decision-makers",
    overview:
      "Many organisations make good decisions but struggle in execution. This workshop bridges that gap. Participants learn Divine's proprietary decision-making framework and execution protocols that ensure clarity, accountability, and results. This is ideal before major strategic initiatives.",
    gains: [
      "A repeatable framework for making high-stakes decisions with confidence",
      "Tools to evaluate options quickly without analysis paralysis",
      "Strategies to build buy-in and momentum around major decisions",
      "Systems for tracking execution and course-correcting in real-time",
      "Skills to communicate decisions clearly to different stakeholder groups",
      "Methods to learn from outcomes and improve future decision quality",
    ],
    idealFor: [
      "Leadership teams facing major strategic decisions",
      "Organisations launching new initiatives",
      "Teams dealing with rapid change",
      "Leaders stepping into bigger strategic roles",
    ],
    outcomes: [
      "Faster decision-making with greater confidence",
      "Better execution of strategic priorities",
      "Reduced rework and wasted effort",
      "Higher stakeholder alignment on direction",
    ],
  },
  {
    duration: "Half Day (4 Hours) | In-Person or Virtual",
    title: "Emerging Leaders Academy",
    format: "Interactive + Mentoring",
    groupSize: "20-100 participants",
    bestForMeta: "High-potential emerging leaders",
    overview:
      "Designed specifically for the next generation of leaders - those ready to move from individual contribution to leading others. This workshop builds foundational leadership skills, confidence, and awareness while helping young professionals understand the invisible rules of organisational success.",
    gains: [
      "Clarity on what true leadership means beyond title and position",
      "Self-awareness through 360-degree feedback and behavioural assessments",
      "Practical skills in delegation, feedback, and difficult conversations",
      "Understanding of emotional intelligence and its impact on relationships",
      "Networks with peer leaders and mentorship from experienced leaders",
      "Customised development plans to accelerate career progression",
    ],
    idealFor: [
      "High-potential employees transitioning to management",
      "New managers in their first 2 years",
      "Graduates entering the workforce",
      "Leaders from underrepresented backgrounds",
    ],
    outcomes: [
      "Increased self-awareness and leadership potential",
      "Confidence to step into leadership roles",
      "Improved relationships with peers and direct reports",
      "Accelerated advancement within organisation",
    ],
  },
];

const featured = [
  { title: "Leadership Mindset Intensive", subtitle: "4-6 Hours | In-Person or Virtual" },
  { title: "High-Performance Teams", subtitle: "Full Day | In-Person or Hybrid" },
  { title: "Strategic Decision Making", subtitle: "Half Day | Customised Format" },
];

const impacts = [
  {
    number: "1",
    title: "Immediate Energy Shift",
    text: "Within the first hour of the workshop, teams experience a shift in energy and engagement. The creative tension and focused conversation create momentum that extends well beyond the event.",
  },
  {
    number: "2",
    title: "Clarity on Direction",
    text: "Teams leave with absolute clarity on what matters most, who is doing what, and what success looks like. This clarity eliminates ambiguity and accelerates execution.",
  },
  {
    number: "3",
    title: "Strengthened Relationships",
    text: "Real conversations in a structured environment rebuild trust, heal disconnects, and create accountability that sticks long after the workshop ends.",
  },
  {
    number: "4",
    title: "Actionable Frameworks",
    text: "Participants don't just gain insights - they walk away with repeatable frameworks, tools, and processes that become part of how the team operates.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    text: "We understand your team's context, challenges, and desired outcomes. This shapes everything that follows.",
  },
  {
    step: "02",
    title: "Customisation",
    text: "We tailor the workshop framework, case studies, and exercises to address your specific needs and culture.",
  },
  {
    step: "03",
    title: "Delivery",
    text: "A dynamic, engaging experience that balances content, conversation, and breakthrough moments for participants.",
  },
  {
    step: "04",
    title: "Accountability",
    text: "We provide follow-up support and resources to ensure insights translate into sustained behaviour change.",
  },
];

export const metadata: Metadata = {
  title: "Workshops | Divine Besong Eya",
  description: "Transformational workshops and training programmes for teams and organisations.",
};

export default function WorkshopsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-gold/20 bg-black px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(181,138,59,0.18),transparent_45%)]" />
        <div className="relative max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">Workshops & Training</p>
          <h1 className="font-display text-5xl font-light leading-[1.06] text-white sm:text-6xl md:text-7xl">
            Transform Your <em className="italic text-gold-light">Team</em>
            <br />
            in One Immersive
            <br />
            Experience
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            Half-day and full-day workshops designed for leadership teams, departments, and organisations ready to align, elevate, and execute at a higher level.
          </p>
        </div>
      </section>

      <section className="bg-black px-8 py-16 text-center sm:px-12 md:px-16 md:py-24">
        <h2 className="font-display text-4xl font-light text-white sm:text-5xl">
          Our Most <em className="italic text-gold-light">Requested</em> Workshops
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {featured.map((item) => (
            <article key={item.title} className="border-t-2 border-gold bg-white/5 px-6 py-8">
              <h3 className="font-display text-3xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-white/55">{item.subtitle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-6 py-16 sm:px-8 md:px-12 md:py-24">
        {workshops.map((workshop) => (
          <Reveal key={workshop.title}>
            <article className="mb-10 border-l-4 border-gold bg-white p-6 transition hover:translate-x-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] sm:p-8 md:p-10">
              <div className="mb-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">{workshop.duration}</p>
                  <h3 className="font-display mt-2 text-4xl font-semibold leading-tight text-ink md:text-5xl">{workshop.title}</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <strong className="min-w-[90px] text-ink">Format:</strong>
                    <span className="text-ink/65">{workshop.format}</span>
                  </div>
                  <div className="flex gap-3">
                    <strong className="min-w-[90px] text-ink">Group Size:</strong>
                    <span className="text-ink/65">{workshop.groupSize}</span>
                  </div>
                  <div className="flex gap-3">
                    <strong className="min-w-[90px] text-ink">Best for:</strong>
                    <span className="text-ink/65">{workshop.bestForMeta}</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-display text-3xl font-semibold text-ink">Overview</h4>
                <p className="mt-3 text-[15px] leading-8 text-ink/70">{workshop.overview}</p>
              </div>

              <div className="mb-8">
                <h4 className="font-display text-3xl font-semibold text-ink">What Participants Will Gain</h4>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-ink/70 md:grid-cols-2">
                  {workshop.gains.map((gain) => (
                    <li key={gain} className="flex gap-2">
                      <span className="text-gold">✓</span>
                      <span>{gain}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-8 rounded bg-light p-6 md:grid-cols-2 md:p-8">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-[0.1em] text-gold">Ideal For</h5>
                  <ul className="mt-3 space-y-1 text-sm leading-8 text-ink/65">
                    {workshop.idealFor.map((item) => (
                      <li key={item}>→ {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-[0.1em] text-gold">Expected Outcomes</h5>
                  <ul className="mt-3 space-y-1 text-sm leading-8 text-ink/65">
                    {workshop.outcomes.map((item) => (
                      <li key={item}>→ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 text-right text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                <Link href="/contact" className="inline-flex items-center gap-2 transition hover:gap-3">
                  Enquire Now <span>→</span>
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="bg-light px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">What Teams Experience</p>
        <h2 className="font-display text-5xl font-light text-ink sm:text-6xl">
          Measurable <em className="italic text-gold">Impact</em>
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {impacts.map((item) => (
            <article key={item.number} className="flex gap-6">
              <p className="font-display text-5xl font-semibold text-gold">{item.number}</p>
              <div>
                <h3 className="font-display text-4xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-8 text-ink/65">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">How We Work</p>
        <h2 className="font-display text-5xl font-light text-ink sm:text-6xl">
          The Workshop <em className="italic text-gold">Journey</em>
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-4">
          {process.map((item) => (
            <article key={item.step} className="text-center">
              <p className="font-display text-6xl font-light text-gold/40">{item.step}</p>
              <h3 className="font-display mt-3 text-3xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-ink/65">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-black px-8 py-16 text-center sm:px-12 md:px-16 md:py-24">
        <h2 className="font-display text-4xl font-light text-white sm:text-5xl md:text-6xl">
          Every Workshop Is <em className="italic text-gold-light">Customisable</em>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-white/55 md:text-base">
          The frameworks above are our core offerings, but we design every workshop specifically for your organisation. Different industries, cultures, and challenges require different approaches. Let's talk about what your team needs.
        </p>
        <Link href="/contact" className="btn-live mt-8 inline-flex bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-gold-light">
          Schedule Discovery Call
        </Link>
      </section>
    </>
  );
}
