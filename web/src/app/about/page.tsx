import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About | Divine Besong Eya",
  description: "Discover Divine Besong Eya's story, mission, milestones, and leadership philosophy.",
};

export default async function AboutPage() {
  const milestones = [
    {
      label: "The Beginning",
      title: "A Calling Discovered",
      body:
        "Divine began facilitating youth leadership programmes in community settings, discovering a natural gift for helping others unlock their potential. Early sessions drew dozens, then hundreds, of hungry young leaders.",
    },
    {
      label: "Growing Platform",
      title: "The Leader's Mindset is Born",
      body:
        "After years of informal coaching and facilitation, Divine formalised his methodology and launched The Leader's Mindset - a platform dedicated to developing inner leadership capacity in professionals and entrepreneurs.",
    },
    {
      label: "Keynote Circuit",
      title: "Stages Across Africa",
      body:
        "Divine became a fixture on the African leadership conference circuit - delivering keynotes at Leadership Summits, Directors Conferences, Entrepreneurship Forums, and corporate events.",
    },
    {
      label: "Summit 2024",
      title: "Leadership Summit - Inspiring Success",
      body:
        "A landmark event where Divine brought together over 500 leaders for a full-day immersive summit. The standing ovation at the close reflected an audience transformed - not just motivated.",
    },
    {
      label: "Today",
      title: "1,200+ Leaders. 20+ Countries. One Mission.",
      body:
        "Divine continues to coach executives one-on-one, train leadership teams in workshops, deliver keynotes internationally, and build resources that make world-class leadership development accessible to all.",
    },
  ];

  const values = [
    {
      title: "Depth Over Hype",
      body:
        "The leadership development industry is full of motivational noise. Divine is committed to substance - frameworks that work in the real world, not just on stage.",
    },
    {
      title: "Whole-Person Leadership",
      body:
        "You cannot separate the leader from the person. Divine works on mindset, identity, emotional intelligence, and relationships.",
    },
    {
      title: "Courageous Authenticity",
      body:
        "The most powerful thing a leader can do is lead as themselves - fully, unapologetically, and with clarity about what they stand for.",
    },
    {
      title: "Raising the Next Generation",
      body:
        "Divine carries a deep burden for emerging leaders across Africa and beyond - to build institutions, shape cultures, and leave lasting legacies.",
    },
  ];

  const impactStats = [
    {
      value: "1,200+",
      title: "Leaders Personally Coached",
      body: "Across one-on-one coaching engagements, group programmes, and workshop sessions.",
    },
    {
      value: "10+",
      title: "Years of Speaking Experience",
      body: "From community halls to leadership summits drawing 500+ senior professionals.",
    },
    {
      value: "20+",
      title: "Countries Reached",
      body: "Through live events, virtual programmes, and online content across Africa and internationally.",
    },
    {
      value: "50+",
      title: "Corporate Engagements",
      body: "Organizations across finance, tech, health, education, and public sector.",
    },
    {
      value: "500+",
      title: "Summit Attendees in 2024",
      body: "The Leadership Summit 2024 - Inspiring Success - drew a record audience.",
    },
    {
      value: "100%",
      title: "Client Satisfaction Rate",
      body: "Every coaching client completing full engagements reports meaningful, lasting change.",
    },
  ];

  const marqueeItems = [
    "Executive Coaching",
    "Keynote Speaking",
    "Mindset Mastery",
    "Leadership Development",
    "Team Performance",
    "Strategic Clarity",
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-gold/20 bg-black px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_45%,rgba(181,138,59,0.18),transparent_42%)]" />
        <div className="relative max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">About</p>
          <h1 className="font-display text-5xl font-light leading-[1.05] text-white sm:text-6xl md:text-7xl">
            The Man Behind <em className="italic text-gold-light">The Mission</em>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            A leader forged by experience in Africa, now based in the UAE, driven by purpose, and committed to developing the next generation of extraordinary leaders globally.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 bg-bone md:grid-cols-2">
        <div className="relative min-h-[430px] md:min-h-[620px]">
          <Image src="/about1.jpg" alt="Divine Besong Eya with audience" fill className="object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/15 to-transparent" />
        </div>
        <div className="px-8 py-12 sm:px-12 md:px-16 md:py-16">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-gold">His Story</p>
            <h2 className="font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
              Built by <em className="italic text-gold">Struggle.</em> Refined by Purpose.
            </h2>
            <blockquote className="mt-7 border-l-2 border-gold pl-5 font-display text-2xl italic leading-relaxed text-slate">
              "I grew up understanding that leadership wasn't a position - it was a decision. A daily, costly, deeply personal decision."
            </blockquote>
            <div className="mt-7 space-y-5 text-[15px] leading-8 text-ink/70">
              <p>
                Divine Besong Eya discovered his calling not in a boardroom, but in the gap between who people were and who they were capable of becoming. Growing up where ambition was high but models of effective leadership were scarce, Divine became obsessed with one question: <strong className="text-ink">what separates people who truly lead from those who simply occupy positions?</strong>
              </p>
              <p>
                That question drove him to study human behaviour, communication, psychology, and organisational dynamics. He worked alongside leaders at every level, trained in high-performance environments, and developed a framework for leadership development that addresses both the outer game of strategy and the inner game of identity and mindset.
              </p>
              <p>
                Today, Divine is recognised globally as one of the most dynamic and impactful voices in leadership development. His clients include executives, entrepreneurs, educators, pastors, and emerging leaders across continents.
              </p>
            </div>
            <Link href="/contact" className="btn-live mt-8 inline-flex rounded-none bg-ink px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-gold hover:text-ink">
              Work with Divine
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">The Journey</p>
          <h2 className="font-display text-4xl font-light text-ink sm:text-5xl">
            Key <em className="italic text-gold">Milestones</em>
          </h2>
        </Reveal>
        <div className="mt-12 border-l border-gold/40 pl-7">
          {milestones.map((item, index) => (
            <Reveal key={item.title}>
              <div className={`${index === milestones.length - 1 ? "pb-0" : "pb-10"} relative`}>
                <span className="absolute -left-[34px] top-1.5 h-3 w-3 rounded-full border border-gold bg-white" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/85">{item.label}</p>
                <h3 className="mt-1 font-display text-3xl text-ink">{item.title}</h3>
                <p className="mt-2 max-w-5xl text-sm leading-7 text-ink/70">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-black px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">Core Values</p>
          <h2 className="font-display text-4xl font-light text-white sm:text-5xl">
            What Divine <em className="italic text-gold-light">Stands For</em>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-2">
          {values.map((item) => (
            <Reveal key={item.title}>
              <article className="h-full bg-black/55 p-8">
                <p className="mb-6 text-lg text-white/20">◐</p>
                <h3 className="font-display text-3xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-8 text-white/50">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-light px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">By The Numbers</p>
          <h2 className="font-display text-4xl font-light text-ink sm:text-5xl">
            The <em className="italic text-gold">Impact</em> in Numbers
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {impactStats.map((item) => (
            <Reveal key={item.title}>
              <article className="border-t border-gold bg-white p-6">
                <p className="font-display text-5xl text-gold">{item.value}</p>
                <h3 className="mt-2 text-sm font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-ink/65">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 items-center bg-bone px-8 py-16 sm:px-12 md:grid-cols-2 md:px-16 md:py-20">
        <div className="relative min-h-[360px] md:min-h-[460px]">
          <Image src="/about2.jpg" alt="Divine Besong Eya speaking to audience" fill className="object-cover" />
          <div className="absolute bottom-0 right-0 bg-gold px-6 py-8 text-center">
            <p className="font-display text-4xl text-white">1</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">Mission</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">Countless Lives</p>
          </div>
        </div>
        <Reveal>
          <div className="px-0 pt-10 md:px-12 md:pt-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">The Mission</p>
            <h2 className="font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
              To Develop Leaders Who <em className="italic text-gold">Change</em> the World
            </h2>
            <p className="mt-6 text-sm leading-8 text-ink/70">
              The world doesn't have a shortage of people in leadership positions. It has a shortage of people who lead with clarity, courage, and character. Divine's mission is to close that gap - one leader at a time.
            </p>
            <p className="mt-4 text-sm leading-8 text-ink/70">
              He believes that Africa's greatest resource isn't oil, minerals, or technology - it's the untapped potential of a generation of leaders who are hungry, capable, and ready.
            </p>
            <blockquote className="mt-7 border-l-2 border-gold bg-white px-5 py-4 font-display text-2xl italic leading-relaxed text-slate">
              "Every great movement in history was led by someone who first won the battle in their own mind. That's where transformation begins - and that's where my work starts."
            </blockquote>
            <Link href="/contact" className="btn-live mt-8 inline-flex rounded-none bg-ink px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-gold hover:text-ink">
              Start Your Transformation
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="overflow-hidden bg-gold py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, idx) => (
            <span key={idx} className="mr-10 flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-white">
              {item}
              <span className="mx-3 text-white/70">✦</span>
            </span>
          ))}
          {marqueeItems.map((item, idx) => (
            <span key={`repeat-${idx}`} className="mr-10 flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-white">
              {item}
              <span className="mx-3 text-white/70">✦</span>
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
