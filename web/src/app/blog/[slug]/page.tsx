import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/cms";

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

  return (
    <Container className="py-20">
      <article className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white p-8 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          {new Date(post.publishedAt).toLocaleDateString()} | {post.author}
        </p>
        <h1 className="mt-3 font-display text-5xl leading-tight text-navy">{post.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/80">{post.content}</p>
      </article>
    </Container>
  );
}
