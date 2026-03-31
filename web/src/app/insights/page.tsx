import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InsightsNewsletter } from "@/components/InsightsNewsletter";
import { getBlogPosts } from "@/lib/cms";

function estimateReadTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(7, Math.ceil(words / 180));
}

const filters = [
  "All",
  "Leadership",
  "Mindset",
  "Performance",
  "Entrepreneurship",
  "Communication",
  "Teams",
];

const cardImages = [
  "/homepage1.jpeg",
  "/speaker session.jpeg",
  "/services3.jpg",
  "/workshop.jpeg",
  "/services4.jpg",
  "/podcast.jpeg",
];

const sampleCards = [
  {
    title: "5 Mental Models Every High-Performer Uses Without Thinking",
    excerpt:
      "Elite performers do not rely on motivation. They rely on repeatable thinking models that improve decisions, protect focus, and speed up recovery after setbacks.",
    date: "Feb 2026",
    readTime: "11 min read",
    tag: "Mindset",
  },
  {
    title: "Why Discipline Beats Motivation Every Single Time",
    excerpt:
      "Motivation is emotional weather. Discipline is architecture. Leaders who engineer daily systems outperform equally talented peers who depend on how they feel.",
    date: "Jan 2026",
    readTime: "10 min read",
    tag: "Performance",
  },
  {
    title: "The One Conversation Most Leaders Are Afraid to Have",
    excerpt:
      "The conversation that upgrades performance is almost never comfortable. Learn a practical framework for handling high stakes dialogue with clarity and respect.",
    date: "Dec 2025",
    readTime: "12 min read",
    tag: "Leadership",
  },
  {
    title: "Africa's Leadership Gap and Who's Going to Close It",
    excerpt:
      "Africa does not have a talent shortage. It has a leadership development pipeline gap. This article maps the shifts needed to build globally competitive leadership ecosystems.",
    date: "Nov 2025",
    readTime: "14 min read",
    tag: "Entrepreneurship",
  },
  {
    title: "The Culture Problem Most Leaders Don't Know They're Creating",
    excerpt:
      "Culture is not what leaders announce. Culture is what teams experience repeatedly. Spot hidden behavior patterns that quietly erode trust and execution quality.",
    date: "Oct 2025",
    readTime: "10 min read",
    tag: "Teams",
  },
  {
    title: "How to Speak So People Actually Follow",
    excerpt:
      "Influence is not a title advantage. It is communication precision. Discover how strong leaders frame vision, ask better questions, and move people to action.",
    date: "Sep 2025",
    readTime: "12 min read",
    tag: "Communication",
  },
];

const freeResources = [
  {
    type: "PDF Guide",
    title: "The Leader's Mindset Assessment",
    description:
      "A 20-question self-assessment that reveals your current leadership strengths, blind spots, and highest-impact growth areas.",
    cta: "Download Free",
    href: "/self-discovery-assessment",
  },
  {
    type: "Audio Training",
    title: "30 Minutes That Will Change How You Lead",
    description:
      "A recorded training session covering the shifts every leader must make to move from good to extraordinary.",
    cta: "Access Free",
    href: "/contact",
  },
  {
    type: "Framework",
    title: "The 90-Day Leadership Acceleration Plan",
    description:
      "A structured template for setting and executing your most important leadership goals over the next quarter.",
    cta: "Download Free",
    href: "/contact",
  },
];

export const metadata: Metadata = {
  title: "Insights | Divine Besong Eya",
  description:
    "Leadership insights, mindset frameworks, and practical wisdom from Divine Besong Eya.",
};

export default async function InsightsPage() {
  const posts = await getBlogPosts();
  const cards = posts.length >= 6
    ? posts.slice(0, 6).map((post, index) => ({
        title: post.title,
        excerpt: post.excerpt,
        date: new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" }),
        readTime: `${estimateReadTime(post.content)} min read`,
        tag: filters[(index % (filters.length - 1)) + 1],
        href: `/blog/${post.slug}`,
      }))
    : sampleCards.map((item) => ({
        ...item,
        href: "/blog",
      }));

  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-20 pt-32 text-white sm:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_25%,rgba(181,138,59,0.2),transparent_45%),radial-gradient(ellipse_at_18%_45%,rgba(11,22,38,0.7),transparent_55%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Insights</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.98] text-white sm:text-7xl">
            Leadership <span className="italic text-gold-light">Thinking</span>
            <br />
            Worth Your Time
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-2xl sm:leading-[1.5]">
            Articles, frameworks, and practical wisdom on leadership, mindset, and peak performance from someone who has worked in the field for over a decade.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <article className="grid overflow-hidden border border-black/10 bg-white lg:grid-cols-[1.15fr_1fr]">
          <div className="relative min-h-[340px] lg:min-h-[560px]">
            <Image
              src="/insight.jpg"
              alt="Divine Besong Eya speaking on leadership"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute left-4 top-4 bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white sm:left-5 sm:top-5">
              Featured
            </div>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold">Leadership - Deep Dive</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-ink sm:text-5xl">
              The Identity Crisis Silently Sabotaging Most Leaders
            </h2>
            <p className="mt-4 text-xs tracking-wide text-ink/55">March 2026 · 10 min read</p>
            <p className="mt-6 text-base leading-8 text-ink/70">
              Most leadership plateaus aren't strategy problems. They're identity problems. When who you believe yourself to be doesn't match the level you're trying to reach, your unconscious will always drag you back to familiar ground.
            </p>
            <p className="mt-6 text-base leading-8 text-ink/70">
              Here's how to close the gap between your current identity and your leadership potential.
            </p>
            <Link
              href={posts[0] ? `/blog/${posts[0].slug}` : "/blog"}
              className="mt-8 inline-flex w-fit bg-ink px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-gold"
            >
              Read The Full Article
            </Link>
          </div>
        </article>

        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={`border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
                index === 0
                  ? "border-ink bg-ink text-white"
                  : "border-black/20 bg-transparent text-ink/70 hover:border-ink hover:bg-ink hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <article key={`${card.title}-${index}`} className="group overflow-hidden border border-black/10 bg-white transition hover:-translate-y-1 hover:shadow-lift">
              <div className="relative h-44 overflow-hidden bg-ink">
                <Image
                  src={cardImages[index % cardImages.length]}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,12,0.25)_0%,rgba(8,10,12,0.42)_100%)]" />
                <span className="absolute left-3 top-3 bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                  {card.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-[2rem] leading-tight text-ink">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/70">{card.excerpt}</p>
                <p className="mt-5 text-xs text-ink/55">{card.date} · {card.readTime}</p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex items-center text-xs font-semibold uppercase tracking-[0.15em] text-gold transition hover:text-ink"
                >
                  Read Article <span className="ml-2">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <InsightsNewsletter />

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Free Downloads</p>
        <h2 className="mt-5 max-w-3xl font-display text-5xl leading-tight text-ink sm:text-6xl">
          Resources to <span className="italic text-gold">Accelerate</span> Your Growth
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {freeResources.map((resource) => (
            <article key={resource.title} className="border border-black/10 border-t-gold bg-white p-6 sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">{resource.type}</p>
              <h3 className="mt-3 font-display text-4xl leading-tight text-ink">{resource.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink/70">{resource.description}</p>
              <Link href={resource.href} className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-gold transition hover:text-ink">
                {resource.cta} <span className="ml-2">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-16 w-full max-w-6xl border border-black/10 bg-gradient-to-r from-ink to-navy px-6 py-10 text-white sm:mb-20 sm:px-10 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">Leadership Self Discovery</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
          Test Your Leadership Level With the Self Discovery Assessment
        </h2>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
          Get a fast score on self awareness, communication, decision quality, and execution discipline, then receive your next growth focus based on your current level.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/self-discovery-assessment" className="btn-live inline-flex rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white">
            Start Assessment
          </Link>
          <Link href="/services" className="btn-live inline-flex rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:border-gold-light hover:text-gold-light">
            Leadership Development Consulting
          </Link>
        </div>
      </section>
    </>
  );
}
