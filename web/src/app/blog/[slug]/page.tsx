import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/cms";

function estimateReadTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(6, Math.ceil(words / 180));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Article Not Found | Divine Besong Eya" };
  }

  return {
    title: `${post.title} | Divine Besong Eya`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const paragraphs = post.content
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <Container className="py-20">
      <article className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white p-8 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          {new Date(post.publishedAt).toLocaleDateString()} | {post.author} | {estimateReadTime(post.content)} min read
        </p>
        <h1 className="mt-3 font-display text-5xl leading-tight text-navy">{post.title}</h1>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80">
          {(paragraphs.length > 0 ? paragraphs : [post.content]).map((paragraph, index) => (
            <p key={`${post.slug}-paragraph-${index}`}>{paragraph}</p>
          ))}
        </div>
      </article>
    </Container>
  );
}
