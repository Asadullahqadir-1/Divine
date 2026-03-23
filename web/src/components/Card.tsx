"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  meta?: ReactNode;
  imageUrl?: string;
  imageAlt?: string;
};

export function Card({ title, description, ctaText, ctaLink, meta, imageUrl, imageAlt }: CardProps) {
  const isExternal = Boolean(ctaLink?.startsWith("http"));

  return (
    <motion.article
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:shadow-lift"
    >
      {imageUrl ? (
        <div className="mb-4 overflow-hidden rounded-xl border border-black/10">
          <Image src={imageUrl} alt={imageAlt || title} width={800} height={500} className="h-36 w-full object-cover sm:h-40" />
        </div>
      ) : null}
      {meta ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{meta}</p> : null}
      <h3 className="mt-2 font-display text-2xl leading-tight text-navy sm:text-3xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/75">{description}</p>
      {ctaText && ctaLink ? (
        <Link
          href={ctaLink}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className="btn-live mt-5 inline-flex rounded-full border border-navy px-4 py-2 text-sm font-semibold text-navy"
        >
          {ctaText}
        </Link>
      ) : null}
    </motion.article>
  );
}
