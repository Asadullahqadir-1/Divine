import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Divine Besong Eya",
  description: "Transformational leadership services, speaking, mastermind, workshops, and intensive programmes.",
};

export default function ServicesPage() {
  const keynoteTopics = [
    {
      title: "Lead the Future",
      description:
        "The leadership qualities that built yesterday's organisations won't build tomorrow's. This talk equips leaders with the mindset and frameworks to lead with relevance in a rapidly changing world.",
    },
    {
      title: "Lead with Impact",
      description:
        "How to move from being a person who occupies a leadership position to one who leaves a lasting mark on every person and organisation they touch.",
    },
    {
      title: "The Mindset Advantage",
      description:
        "The single greatest competitive advantage in leadership is not your strategy, your network, or your resources - it's your thinking. This talk rewires how your audience approaches challenge, growth, and possibility.",
    },
    {
      title: "From Manager to Leader",
      description:
        "This practical session helps mid-level leaders make the critical identity shift that changes everything.",
    },
    {
      title: "Building High-Performance Teams",
      description:
        "What separates good teams from extraordinary ones? Culture, clarity, and the courage to lead with both accountability and care.",
    },
    {
      title: "The Resilient Leader",
      description:
        "Leadership is not a season of success - it is a lifetime of navigating setbacks, uncertainty, and pressure. This talk builds the inner resilience that allows leaders to endure, adapt, and grow.",
    },
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Discovery Call",
      description:
        "A free 30-minute conversation to understand where you are, where you want to go, and whether Divine is the right fit for your journey.",
    },
    {
      step: "02",
      title: "Custom Roadmap",
      description:
        "Together, you build a clear picture of your leadership goals, obstacles, and the specific pathway that will get you from where you are to where you want to be.",
    },
    {
      step: "03",
      title: "Deep Work Begins",
      description:
        "The real transformation happens here - through consistent coaching sessions, targeted challenges, and the inner work that most people avoid but every great leader has done.",
    },
    {
      step: "04",
      title: "Results & Momentum",
      description:
        "You emerge not just with new skills, but with a new identity as a leader. The results compound in your performance, your relationships, and your impact.",
    },
  ];

  const faqs = [
    {
      question: "How do I know which service is right for me?",
      answer:
        "The best first step is a free discovery call. Divine will listen to your situation and goals and recommend the pathway that makes the most sense for your season and objectives.",
    },
    {
      question: "Do you work with clients outside Africa?",
      answer:
        "Yes. While Divine is based in Africa and speaks extensively across the continent, he works with coaching clients and delivers keynotes globally via virtual and in-person formats.",
    },
    {
      question: "What results can I expect from coaching?",
      answer:
        "Clients consistently report greater clarity on leadership identity and goals, stronger communication and influence, improved team performance, better decision-making, and measurable career or business advancement.",
    },
    {
      question: "How far in advance should I book a keynote?",
      answer:
        "For major conferences and summit events, booking 2-3 months in advance is recommended. For smaller corporate events and workshops, 4-6 weeks is usually sufficient.",
    },
    {
      question: "Is coaching available in French?",
      answer:
        "Divine conducts most coaching and speaking engagements in English. For French-language engagements, reach out to discuss options and support.",
    },
  ];

  const bulletClass = "border-b border-black/10 py-3 text-sm text-ink/75";

  return (
    <>
      <section className="relative overflow-hidden border-b border-gold/20 bg-black px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(181,138,59,0.18),transparent_45%)]" />
        <div className="relative max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">Services</p>
          <h1 className="font-display text-5xl font-light leading-[1.06] text-white sm:text-6xl md:text-7xl">
            Transformational <em className="italic text-gold-light">Offerings</em>
            <br />
            for Every Leader
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            Whether you're an executive, entrepreneur, team leader, or emerging professional - there is a pathway designed for your level, your goals, and your pace.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 bg-bone md:grid-cols-2">
        <div className="relative min-h-[420px] md:min-h-[620px]">
          <Image src="/services1.jpg" alt="Executive coaching session" fill className="object-cover" />
        </div>
        <div className="px-8 py-12 sm:px-12 md:px-16 md:py-16">
          <Reveal>
            <p className="mb-4 border-l border-gold bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">Most Popular</p>
            <h2 className="font-display text-4xl font-light text-ink sm:text-5xl">1-on-1 Executive <em className="italic text-gold">Coaching</em></h2>
            <p className="mt-5 text-sm leading-8 text-ink/70">This is Divine's most intensive and most personal offering. A private coaching partnership built around your unique leadership challenges, goals, and growth edge.</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Ideal for: Executives, Founders, Senior Managers, High-Potential Leaders</p>
            <ul className="mt-3">
              <li className={bulletClass}>Bi-weekly 60-minute one-on-one coaching sessions (video or in-person)</li>
              <li className={bulletClass}>Comprehensive leadership and mindset assessment at intake</li>
              <li className={bulletClass}>Personalised 90-day growth roadmap developed together</li>
              <li className={bulletClass}>WhatsApp/email support between sessions for real-time guidance</li>
              <li className={bulletClass}>Access to all leadership frameworks and resources</li>
              <li className={bulletClass}>Monthly performance review and recalibration</li>
              <li className={bulletClass}>Minimum 3-month engagement; 6-month recommended</li>
            </ul>
            <Link href="/contact" className="btn-live mt-7 inline-flex w-full justify-center rounded-none bg-ink px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-gold hover:text-ink">
              Apply for Coaching
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="grid grid-cols-1 bg-black md:grid-cols-2">
        <div className="px-8 py-12 sm:px-12 md:px-16 md:py-16">
          <Reveal>
            <p className="mb-4 border-l border-gold bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">High Demand</p>
            <h2 className="font-display text-4xl font-light text-white sm:text-5xl">Keynote <em className="italic text-gold-light">Speaking</em></h2>
            <p className="mt-5 text-sm leading-8 text-white/70">Divine doesn't just deliver talks - he creates experiences. His keynotes combine rigorous research, compelling storytelling, and practical frameworks that attendees can implement immediately.</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Ideal for: Conferences, Corporate Events, Summits, Graduations, Leadership Retreats</p>
            <ul className="mt-3">
              <li className="border-b border-white/10 py-3 text-sm text-white/70">Custom-tailored keynote designed for your audience and theme</li>
              <li className="border-b border-white/10 py-3 text-sm text-white/70">Pre-event consultation to align messaging with your goals</li>
              <li className="border-b border-white/10 py-3 text-sm text-white/70">Available for 30-minute, 60-minute, and half-day formats</li>
              <li className="border-b border-white/10 py-3 text-sm text-white/70">In-person across Africa; available virtually globally</li>
              <li className="border-b border-white/10 py-3 text-sm text-white/70">High-energy delivery with audience interaction and takeaways</li>
              <li className="border-b border-white/10 py-3 text-sm text-white/70">Post-event resource pack for attendees upon request</li>
            </ul>
            <Link href="/contact" className="btn-live mt-7 inline-flex w-full justify-center rounded-none bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition hover:bg-gold-light">
              Book Divine to Speak
            </Link>
          </Reveal>
        </div>
        <div className="relative min-h-[420px] md:min-h-[620px]">
          <Image src="/services2.jpg" alt="Keynote speaking at event" fill className="object-cover" />
        </div>
      </section>

      <section className="grid grid-cols-1 bg-bone md:grid-cols-2">
        <div className="relative min-h-[420px] md:min-h-[620px]">
          <Image src="/services3.jpg" alt="Leadership mastermind group" fill className="object-cover" />
        </div>
        <div className="px-8 py-12 sm:px-12 md:px-16 md:py-16">
          <Reveal>
            <p className="mb-4 border-l border-gold bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">Community</p>
            <h2 className="font-display text-4xl font-light text-ink sm:text-5xl">Group <em className="italic text-gold">Mastermind</em> Programme</h2>
            <p className="mt-5 text-sm leading-8 text-ink/70">The Leader's Mindset Mastermind is a curated cohort of driven professionals and entrepreneurs who challenge, sharpen, and support each other - facilitated by Divine over an intensive programme period.</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Ideal for: Entrepreneurs, Mid-Level Managers, Business Owners, Aspiring Executives</p>
            <ul className="mt-3">
              <li className={bulletClass}>Monthly live group coaching sessions with Divine (3 hours)</li>
              <li className={bulletClass}>Weekly peer accountability structures and check-ins</li>
              <li className={bulletClass}>Private community platform for ongoing discussion and support</li>
              <li className={bulletClass}>Guest expert sessions on leadership, business, and mindset topics</li>
              <li className={bulletClass}>Quarterly in-person intensives (where geography allows)</li>
              <li className={bulletClass}>Limited cohort size (max 20 participants) to ensure quality</li>
              <li className={bulletClass}>Cohorts run 6 months - next intake announced quarterly</li>
            </ul>
            <Link href="/contact" className="btn-live mt-7 inline-flex w-full justify-center rounded-none bg-ink px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-gold hover:text-ink">
              Apply for Next Cohort
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="grid grid-cols-1 bg-black md:grid-cols-2">
        <div className="px-8 py-12 sm:px-12 md:px-16 md:py-16">
          <Reveal>
            <p className="mb-4 border-l border-gold bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">For Organisations</p>
            <h2 className="font-display text-4xl font-light text-white sm:text-5xl">Corporate <em className="italic text-gold-light">Workshops</em></h2>
            <p className="mt-5 text-sm leading-8 text-white/70">Culture eats strategy for breakfast - and culture is built by the leaders within your organisation. Divine's workshops are designed to equip your leadership team with the mindset, tools, and alignment they need to create a high-performance culture.</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Ideal for: Leadership Teams, HR Departments, Corporate Retreats, NGOs, Institutions</p>
            <ul className="mt-3">
              <li className="border-b border-white/10 py-3 text-sm text-white/70">Half-day (4hr) or full-day (8hr) intensive formats available</li>
              <li className="border-b border-white/10 py-3 text-sm text-white/70">Fully customised curriculum based on your team's challenges</li>
              <li className="border-b border-white/10 py-3 text-sm text-white/70">Topics include leadership culture, team dynamics, communication, and vision alignment</li>
              <li className="border-b border-white/10 py-3 text-sm text-white/70">Pre-workshop diagnostic assessment for all participants</li>
              <li className="border-b border-white/10 py-3 text-sm text-white/70">Actionable implementation workbook included</li>
              <li className="border-b border-white/10 py-3 text-sm text-white/70">30-day post-workshop follow-up session included</li>
            </ul>
            <Link href="/contact" className="btn-live mt-7 inline-flex w-full justify-center rounded-none bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition hover:bg-gold-light">
              Get a Custom Quote
            </Link>
          </Reveal>
        </div>
        <div className="relative min-h-[420px] md:min-h-[620px]">
          <Image src="/services4.jpg" alt="Corporate workshop training" fill className="object-cover" />
        </div>
      </section>

      <section className="grid grid-cols-1 bg-bone md:grid-cols-2">
        <div className="relative flex min-h-[420px] items-center justify-center bg-gold/90">
          <p className="font-display text-8xl font-light text-white/30">VIP</p>
        </div>
        <div className="px-8 py-12 sm:px-12 md:px-16 md:py-16">
          <Reveal>
            <p className="mb-4 border-l border-gold bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">Premium</p>
            <h2 className="font-display text-4xl font-light text-ink sm:text-5xl">VIP <em className="italic text-gold">Intensive Day</em></h2>
            <p className="mt-5 text-sm leading-8 text-ink/70">One focused day with Divine - the highest density of coaching and strategic clarity available. You leave with a clear, actionable plan, renewed energy, and the inner shift needed to execute it.</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Ideal for: Leaders at Crossroads, Entrepreneurs Pivoting, Executives Facing Big Decisions</p>
            <ul className="mt-3">
              <li className={bulletClass}>Full 6-8 hour one-on-one session with Divine (virtual or in-person)</li>
              <li className={bulletClass}>Pre-day preparation call and questionnaire</li>
              <li className={bulletClass}>Deep-dive on your leadership identity, strategy, and key obstacles</li>
              <li className={bulletClass}>Custom 90-day action plan developed by end of day</li>
              <li className={bulletClass}>Session notes and strategic summary document</li>
              <li className={bulletClass}>30-day follow-up accountability call included</li>
              <li className={bulletClass}>Limited availability - only a few VIP days per month</li>
            </ul>
            <Link href="/contact" className="btn-live mt-7 inline-flex w-full justify-center rounded-none bg-ink px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-gold hover:text-ink">
              Reserve Your Day
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="grid grid-cols-1 bg-bone md:grid-cols-2">
        <div className="px-8 py-12 sm:px-12 md:px-16 md:py-16">
          <Reveal>
            <p className="mb-4 border-l border-gold bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">Self-Paced</p>
            <h2 className="font-display text-4xl font-light text-ink sm:text-5xl">Online <em className="italic text-gold">Programmes</em></h2>
            <p className="mt-5 text-sm leading-8 text-ink/70">Not everyone is ready for one-on-one coaching - and that's okay. Divine's online programmes distill core frameworks into structured, accessible, self-paced learning that you can start today and implement immediately.</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Ideal for: Emerging Leaders, Entrepreneurs, Students, Professionals at Any Level</p>
            <ul className="mt-3">
              <li className={bulletClass}>The Leader's Mindset Foundations - core leadership principles</li>
              <li className={bulletClass}>The Mindset Reset - breaking limiting beliefs and installing peak performance thinking</li>
              <li className={bulletClass}>Lead with Impact - communication, influence, and authority for modern leaders</li>
              <li className={bulletClass}>Video lessons, worksheets, and implementation guides included</li>
              <li className={bulletClass}>Private community access for accountability and peer support</li>
              <li className={bulletClass}>Lifetime access to all purchased content</li>
            </ul>
            <Link href="/mentorship" className="btn-live mt-7 inline-flex w-full justify-center rounded-none bg-ink px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-gold hover:text-ink">
              Get Early Access
            </Link>
          </Reveal>
        </div>
        <div className="relative flex min-h-[420px] items-center justify-center bg-black">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(181,138,59,0.18),transparent_45%)]" />
          <p className="font-display relative text-center text-6xl font-light leading-tight text-gold/40 sm:text-7xl">
            Learn.
            <br />
            Grow.
            <br />
            Lead.
          </p>
        </div>
      </section>

      <section className="bg-light px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">For Event Planners</p>
          <h2 className="font-display text-4xl font-light text-ink sm:text-5xl">Popular <em className="italic text-gold">Keynote Topics</em></h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {keynoteTopics.map((topic) => (
            <Reveal key={topic.title}>
              <article className="h-full border-l border-gold bg-white p-6">
                <h3 className="font-display text-3xl text-ink">{topic.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{topic.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-black px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">How It Works</p>
          <h2 className="font-display text-4xl font-light text-white sm:text-5xl">The Journey to <em className="italic text-gold-light">Transformation</em></h2>
        </Reveal>
        <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-4">
          {journeySteps.map((step) => (
            <Reveal key={step.step}>
              <article className="h-full bg-black/55 p-6 text-center">
                <p className="font-display text-5xl text-gold/60">{step.step}</p>
                <h3 className="mt-3 font-display text-3xl text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-bone px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">Common Questions</p>
          <h2 className="font-display text-4xl font-light text-ink sm:text-5xl">Frequently Asked <em className="italic text-gold">Questions</em></h2>
        </Reveal>
        <div className="mt-10 divide-y divide-black/10 border-y border-black/10 bg-white">
          {faqs.map((faq) => (
            <Reveal key={faq.question}>
              <article className="px-6 py-6 md:px-8">
                <div className="flex items-start justify-between gap-5">
                  <h3 className="font-display text-3xl text-ink">{faq.question}</h3>
                  <span className="pt-2 text-gold">+</span>
                </div>
                <p className="mt-3 max-w-5xl text-sm leading-7 text-ink/70">{faq.answer}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-gold py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {[
            "Executive Coaching",
            "Keynote Speaking",
            "Mindset Mastery",
            "Leadership Development",
            "Team Performance",
            "Strategic Clarity",
          ].map((item, idx) => (
            <span key={idx} className="mr-10 flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-white">
              {item}
              <span className="mx-3 text-white/70">✦</span>
            </span>
          ))}
          {[
            "Executive Coaching",
            "Keynote Speaking",
            "Mindset Mastery",
            "Leadership Development",
            "Team Performance",
            "Strategic Clarity",
          ].map((item, idx) => (
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
