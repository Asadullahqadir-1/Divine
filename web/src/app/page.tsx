import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Newsletter } from "@/components/Newsletter";
import { Reveal } from "@/components/Reveal";
import { Stagger } from "@/components/Stagger";
import { aboutSummary } from "@/data/fallback";
import { getBooks, getHomeData, getServices } from "@/lib/cms";

export default async function HomePage() {
  const [homeData, bookList, serviceList] = await Promise.all([getHomeData(), getBooks(), getServices()]);

  return (
    <>
      <Hero />

      <section className="border-y border-black/10 bg-white/70 py-7">
        <Container>
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/55 sm:text-xs sm:tracking-[0.28em]">Trusted By Leaders Across</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {["Corporate Teams", "Executive Coaching", "Risk Leadership", "Inclusion Strategy", "Public Sector", "Education"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 bg-white px-3 py-2 text-[10px] font-semibold tracking-[0.08em] text-ink/70 sm:px-4 sm:text-[11px] sm:uppercase sm:tracking-[0.14em]"
              >
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-black/10 bg-white p-5 shadow-sm sm:p-8 md:grid-cols-2">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Mission</h2>
            <p className="mt-3 text-base leading-relaxed text-ink/80 sm:text-lg">{homeData.mission}</p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Vision</h2>
            <p className="mt-3 text-base leading-relaxed text-ink/80 sm:text-lg">{homeData.vision}</p>
          </div>
          </div>
        </Reveal>
      </Container>

      <Container className="py-12">
        <Reveal>
          <SectionHeader
            eyebrow="About"
            title="A high-impact voice for resilient leadership"
            description={aboutSummary}
          />
          <Link href="/about" className="btn-live mt-6 inline-flex rounded-full border border-navy px-5 py-2 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white">
            Read Full Biography
          </Link>
        </Reveal>
      </Container>

      <Container className="py-12">
        <Reveal>
          <SectionHeader
            eyebrow="Services"
            title="Keynote experiences that deliver practical outcomes"
            description="Speaking, coaching, and strategic advisory for organizations navigating uncertainty, growth, and transformation."
          />
          <Stagger className="mt-8 grid gap-5 md:grid-cols-3">
            {serviceList.slice(0, 3).map((service) => (
              <Card
                key={service.title}
                title={service.title}
                description={service.description}
                ctaText={service.ctaText}
                ctaLink={service.ctaLink}
              />
            ))}
          </Stagger>
        </Reveal>
      </Container>

      <Container className="py-12">
        <Reveal>
          <SectionHeader
            eyebrow="Books"
            title="Books that turn leadership theory into action"
            description="Explore frameworks and insights for purpose-driven leadership, crisis navigation, and sustained team performance."
          />
          <Stagger className="mt-8 grid gap-5 md:grid-cols-2">
            {bookList.slice(0, 2).map((book) => (
              <Card
                key={book.slug}
                title={book.title}
                description={book.description}
                ctaText="Learn More"
                ctaLink={book.externalLink}
                meta={book.featured ? "Featured" : undefined}
                imageUrl={book.coverImageUrl}
                imageAlt={book.imageAlt}
              />
            ))}
          </Stagger>
        </Reveal>
      </Container>

      <Container className="py-12">
        <Reveal>
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm sm:p-10">
          <SectionHeader
            eyebrow="Ready to Work Together"
            title="Bring clarity, alignment, and momentum to your next event"
            description="Book Divine for keynote speaking, team sessions, or leadership consulting tailored to your goals."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-live rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink">
              Talk About Your Event
            </Link>
            <Link href="/services" className="btn-live rounded-full border border-navy px-5 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white">
              See Services
            </Link>
          </div>
          </div>
        </Reveal>
      </Container>

      <Container className="pb-20 pt-8">
        <Newsletter />
      </Container>
    </>
  );
}
