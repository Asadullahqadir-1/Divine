import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const impactStats = [
  { number: "1,200+", label: "Leaders & Entrepreneurs Transformed" },
  { number: "500+", label: "Organisations Impacted" },
  { number: "20+", label: "Countries & Continents Reached" },
  { number: "95%", label: "Would Recommend (Client Satisfaction)" },
];

const caseStudies = [
  {
    label: "Executive Leadership",
    title: "From Manager to Strategic Leader",
    subtitle: "Fortune 500 Financial Services Director",
    image: "/portfolio/ceo.jpg",
    imageAlt: "Executive leader in modern office",
    reverse: false,
    challenge:
      "A high-performing manager was promoted to director but struggled with the transition. Accustomed to deep technical work, she was overwhelmed by strategic responsibility, team dynamics, and navigating executive politics. Her confidence wavered despite promotions.",
    transformation:
      "Through 6 months of intensive 1-on-1 coaching, she rebuilt her identity as a strategic leader. We worked on executive presence, decision-making frameworks, stakeholder management, and the mindset shifts required for her new level. She learned to leverage her strengths while developing new capabilities.",
    resultA: "+40%",
    resultALabel: "Team Engagement Score",
    resultB: "3 Promotions",
    resultBLabel: "in 18 Months",
  },
  {
    label: "Organisational Transformation",
    title: "Rebuilding a Fragmented Leadership Team",
    subtitle: "Technology Company Facing Integration Challenges",
    image: "/portfolio/team.jpg",
    imageAlt: "Leadership team collaborating in boardroom",
    reverse: true,
    challenge:
      "After a merger, the new leadership team was siloed, competing rather than collaborating. Communication was poor, decision-making was slow, and talented people were considering leaving. The CEO needed the team to function as one unit quickly.",
    transformation:
      "We ran a 2-day intensive team workshop followed by quarterly team coaching. The workshop rebuilt psychological safety, clarified roles, and created accountability structures. Subsequent coaching sessions deepened relationships and created real collaboration. Within 6 months, the team culture shifted significantly.",
    resultA: "72%",
    resultALabel: "Collaboration Score Increase",
    resultB: "0",
    resultBLabel: "Key Departures",
  },
  {
    label: "Entrepreneurship",
    title: "From Founder to Scalable Leader",
    subtitle: "Tech Founder & Startup CEO",
    image: "/portfolio/growth.jpg",
    imageAlt: "Business growth chart on laptop",
    reverse: false,
    challenge:
      "A brilliant technical founder built a successful startup but couldn't scale beyond herself. She was a bottleneck, suffering burnout, and the company's growth was limited by her capacity. She needed to build a team, delegate effectively, and evolve her leadership approach.",
    transformation:
      "Through 9 months of coaching, she shifted from a 'do it myself' mindset to a 'develop people' mindset. We worked on delegation, feedback, and building a strong management team. She implemented systems and processes that freed her to focus on strategy. Her team grew from 5 to 22 while her own work hours decreased.",
    resultA: "340%",
    resultALabel: "Revenue Growth",
    resultB: "22x",
    resultBLabel: "Team Expansion",
  },
  {
    label: "Nonprofit Leadership",
    title: "Building a Movement, Not Just an Organisation",
    subtitle: "NGO Executive Director",
    image: "/portfolio/impact.jpg",
    imageAlt: "Community impact and nonprofit initiative",
    reverse: true,
    challenge:
      "A passionate nonprofit leader had built a strong mission-driven organisation but lacked strategic clarity around scale, sustainability, and impact measurement. Board relationships were strained, funding was inconsistent, and the team was stretched thin trying to do everything.",
    transformation:
      "We worked on strategic clarity, board leadership, and building a high-performance culture in a resource-constrained environment. The leader developed a 5-year vision, refocused programming, strengthened board relationships, and created systems for sustainable growth. She also addressed her own mindset around scarcity vs. abundance.",
    resultA: "5x",
    resultALabel: "Beneficiaries Reached",
    resultB: "$2.3M",
    resultBLabel: "Annual Budget Growth",
  },
];

const industries = [
  { name: "Technology", sub: "Startups to Scale-ups" },
  { name: "Financial Services", sub: "Banking & Investment" },
  { name: "Manufacturing", sub: "Industrial & Supply Chain" },
  { name: "Hospitality", sub: "Hotels & Entertainment" },
  { name: "Real Estate", sub: "Development & Property" },
  { name: "Nonprofit", sub: "NGOs & Social Impact" },
];

const testimonials = [
  {
    text: "Divine didn't just coach me - he challenged me to think differently about leadership. His frameworks are practical, and he creates an environment where real transformation happens. I'm a different leader now.",
    name: "Catherine M.",
    title: "Chief Operating Officer",
    company: "Fortune 500 Corporation",
  },
  {
    text: "Working with Divine on our team development was transformative. He helped us see patterns we couldn't see ourselves and gave us tools to work together more effectively. Our execution improved immediately.",
    name: "James O.",
    title: "Managing Director",
    company: "Technology & Innovation",
  },
  {
    text: "As a founder, I was drowning in doing everything myself. Divine helped me see my blind spots and gave me permission to focus on what only I can do. My company and my life are both better.",
    name: "Amara K.",
    title: "Founder & CEO",
    company: "Tech Startup",
  },
];

export const metadata: Metadata = {
  title: "Portfolio | Divine Besong Eya",
  description: "Portfolio and case studies of leaders and organisations transformed.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-gold/20 bg-black px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(181,138,59,0.18),transparent_45%)]" />
        <div className="relative max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">Success Stories</p>
          <h1 className="font-display text-5xl font-light leading-[1.06] text-white sm:text-6xl md:text-7xl">
            Leaders and
            <br />
            Organisations
            <br />
            <em className="italic text-gold-light">Transformed</em>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            Real outcomes from real leaders. See how executives, entrepreneurs, and emerging professionals have leveraged coaching and development to accelerate their impact and growth.
          </p>
        </div>
      </section>

      <section className="bg-black px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">Our Collective Impact</p>
        <h2 className="font-display text-5xl font-light text-white sm:text-6xl">By The Numbers</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-4">
          {impactStats.map((item) => (
            <article key={item.number} className="text-center">
              <p className="font-display text-5xl font-semibold text-gold-light">{item.number}</p>
              <p className="mt-2 text-sm text-white/65">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-0 py-16 sm:px-4 md:py-24">
        {caseStudies.map((item) => (
          <Reveal key={item.title}>
            <article className="mb-14 grid grid-cols-1 overflow-hidden bg-white shadow-[0_15px_50px_rgba(0,0,0,0.12)] md:grid-cols-2">
              <div className={`relative min-h-[380px] md:min-h-[600px] ${item.reverse ? "md:order-2" : ""}`}>
                <Image src={item.image} alt={item.imageAlt} fill className="object-cover" />
              </div>

              <div className={`flex flex-col justify-between p-8 sm:p-10 md:p-12 ${item.reverse ? "md:order-1" : ""}`}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{item.label}</p>
                  <h3 className="font-display mt-2 text-4xl font-semibold leading-tight text-ink md:text-5xl">{item.title}</h3>
                  <p className="font-display mt-3 text-2xl italic text-slate">{item.subtitle}</p>

                  <h4 className="mt-7 text-xs font-bold uppercase tracking-[0.12em] text-gold">The Challenge</h4>
                  <p className="mt-2 text-sm leading-8 text-ink/70">{item.challenge}</p>

                  <h4 className="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-gold">The Transformation</h4>
                  <p className="mt-2 text-sm leading-8 text-ink/70">{item.transformation}</p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6 border-l-4 border-gold bg-light p-6 sm:p-8">
                  <div>
                    <p className="font-display text-4xl font-semibold text-gold">{item.resultA}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink">{item.resultALabel}</p>
                  </div>
                  <div>
                    <p className="font-display text-4xl font-semibold text-gold">{item.resultB}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink">{item.resultBLabel}</p>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="bg-light px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">Industries & Sectors</p>
        <h2 className="font-display text-5xl font-light text-ink sm:text-6xl">Experience Across Verticals</h2>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {industries.map((item) => (
            <article key={item.name} className="border-t-2 border-gold bg-white px-4 py-5 text-center">
              <h3 className="text-xl font-semibold text-ink">{item.name}</h3>
              <p className="mt-2 text-xs text-ink/60">{item.sub}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">What Clients Say</p>
        <h2 className="font-display text-5xl font-light text-ink sm:text-6xl">Direct <em className="italic text-gold">Feedback</em></h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <Reveal key={item.name}>
              <article className="h-full border-l-4 border-gold bg-white p-8">
                <p className="mb-4 text-gold">★★★★★</p>
                <p className="font-display text-2xl italic leading-9 text-slate">"{item.text}"</p>
                <div className="mt-8">
                  <p className="text-xl font-semibold text-ink">{item.name}</p>
                  <p className="mt-1 text-sm text-ink/65">{item.title}</p>
                  <p className="mt-1 text-sm font-semibold text-gold">{item.company}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="my-16 bg-black px-8 py-16 text-center sm:px-12 md:my-20 md:px-16 md:py-24">
        <h2 className="font-display text-4xl font-light text-white sm:text-5xl md:text-6xl">
          Ready to Write Your <em className="italic text-gold-light">Success Story?</em>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-white/55 md:text-base">
          These transformations began with a conversation. Let's talk about what's possible for you.
        </p>
        <Link href="/contact" className="btn-live mt-8 inline-flex bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-gold-light">
          Book a Discovery Call
        </Link>
      </section>
    </>
  );
}
