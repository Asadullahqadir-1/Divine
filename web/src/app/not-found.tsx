import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-xl rounded-2xl border border-black/10 bg-white p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">404</p>
        <h1 className="mt-3 font-display text-5xl text-navy">Page not found</h1>
        <p className="mt-3 text-sm text-ink/75">The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white">
          Go Home
        </Link>
      </div>
    </Container>
  );
}
