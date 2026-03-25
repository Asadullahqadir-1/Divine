import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Stagger } from "@/components/Stagger";
import { getBlogPosts } from "@/lib/cms";

const blogCategories = [
  {
    title: "Purpose in the Everyday",
    topics: [
      "How to find your purpose when your career changes",
      "From survival mode to purpose mode",
      "What the AI revolution teaches us about human calling",
      "5 signs you are living below your purpose",
    ],
  },
  {
    title: "Inclusion Unpacked",
    topics: [
      "Why diversity hiring is not enough",
      "What psychological safety looks like at work",
      "Inclusion for remote and hybrid teams",
      "When silence is not neutral",
    ],
  },
  {
    title: "Impact Stories",
    topics: [
      "How one team transformed through DEI training",
      "Leadership that outlasts the leader",
      "Small acts, seismic impact",
      "The organization that found its soul through crisis",
    ],
  },
  {
    title: "AI, Humanity and Equity",
    topics: [
      "AI is not neutral",
      "Keeping the human in human resources",
      "Three questions before deploying AI",
      "The risk of automated inequality",
    ],
  },
];

export const metadata: Metadata = {
  title: "Blog | Divine Besong Eya",
  description: "Thought leadership and practical guides on purpose, inclusion, impact, and AI-era leadership.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <Container className="py-20">
      <Reveal>
        <SectionHeader
          eyebrow="Blog"
          title="A living library of purpose, inclusion, and impact"
          description="Thought leadership, practical guides, and reflections for professionals leading through change in the AI generation."
        />
      </Reveal>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {blogCategories.map((category) => (
          <Reveal key={category.title}>
            <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="font-display text-3xl text-navy">{category.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink/75">
                {category.topics.map((topic) => (
                  <li key={topic} className="rounded-lg border border-black/10 bg-mist px-3 py-2">
                    {topic}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Stagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{new Date(post.publishedAt).toLocaleDateString()}</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-navy">{post.title}</h2>
            <p className="mt-3 text-sm text-ink/75">{post.excerpt}</p>
            <p className="mt-4 text-xs text-ink/60">By {post.author}</p>
            <Link href={`/blog/${post.slug}`} className="btn-live mt-4 inline-flex rounded-full border border-navy px-4 py-2 text-sm font-semibold text-navy">
              Read Article
            </Link>
          </article>
        ))}
      </Stagger>
    </Container>
  );
}
