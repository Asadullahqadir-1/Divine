import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SocialIcon } from "@/components/SocialIcon";
import { getSettingsData } from "@/lib/cms";
import { resolveSocialUrl } from "@/lib/social";

export const metadata: Metadata = {
  title: "Contact | Divine Besong Eya",
  description: "Book a session, speaking engagement, or consulting consultation with Divine Besong Eya.",
};

export default async function ContactPage() {
  const settings = await getSettingsData();
  const details = settings.contact;

  return (
    <Container className="py-20">
      <Reveal>
        <SectionHeader
          eyebrow="Contact"
          title="Book a conversation that moves leadership forward"
          description="Use the contact form to request coaching, speaking, or consulting support."
        />
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal>
          <aside className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6">
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/15 blur-2xl" />
            <h3 className="font-display text-3xl text-navy">Direct Contact</h3>
            <p className="mt-2 text-sm text-ink/70">Reach out directly using any channel below.</p>

            <div className="mt-4 grid gap-3">
              <a
                href={`tel:${details.phone}`}
                className="btn-live inline-flex flex-wrap items-center justify-between gap-1 rounded-xl border border-black/10 bg-mist px-4 py-3 text-sm font-medium text-ink/85"
              >
                <span>Phone</span>
                <span className="break-all text-right">{details.phone}</span>
              </a>
              <a
                href={`mailto:${details.email}`}
                className="btn-live inline-flex flex-wrap items-center justify-between gap-1 rounded-xl border border-black/10 bg-mist px-4 py-3 text-sm font-medium text-ink/85"
              >
                <span>Email</span>
                <span className="break-all pl-0 text-right sm:pl-4">{details.email}</span>
              </a>
              <a
                href="https://wa.me/971526981013"
                target="_blank"
                rel="noreferrer"
                className="btn-live inline-flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800"
              >
                <span>WhatsApp</span>
                <span>Open Chat</span>
              </a>
            </div>

            <h4 className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Social Media</h4>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {(details.socialLinks || []).map((link: any) => (
                <Link
                  key={`${link.platform}-${link.value}`}
                  href={resolveSocialUrl(link.platform, link.value)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.platform}
                  className="btn-live inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white text-ink/85 hover:border-navy hover:text-navy"
                >
                  <SocialIcon platform={link.platform} className="h-4 w-4" />
                </Link>
              ))}
            </div>
            <div className="mt-3 flex flex-col gap-1 text-xs text-ink/60">
              {(details.socialLinks || []).map((link: any) => (
                <span key={`${link.platform}-label`}>{link.platform}</span>
              ))}
          </div>
          </aside>
        </Reveal>
      </div>
    </Container>
  );
}
