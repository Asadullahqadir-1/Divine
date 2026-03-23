"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden py-16 text-white sm:py-28">
      <div className="float-slow absolute -left-16 top-8 h-44 w-44 rounded-full bg-gold/20 blur-3xl" />
      <div className="float-fast absolute right-8 top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <Container>
        <div className="grid items-end gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold sm:text-xs sm:tracking-[0.3em]"
            >
              Leadership Speaker and Author
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="mt-4 max-w-4xl font-display text-4xl leading-[1.02] sm:text-6xl lg:text-7xl"
            >
              Transform pressure into
              <span className="block text-gold">clarity and momentum.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg"
            >
              Divine Besong Eya helps leaders and teams navigate disruption, align around purpose,
              and execute with confidence in high-stakes environments.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3 sm:mt-9 sm:gap-4"
            >
              <Link href="/contact" className="btn-live w-full rounded-full bg-gold px-6 py-3 text-center text-sm font-semibold text-ink transition hover:bg-[#c39a4d] sm:w-auto">
                Check Availability
              </Link>
              <Link href="/services" className="btn-live w-full rounded-full border border-white/60 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto">
                Explore Keynotes
              </Link>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Why Teams Invite Divine</p>
            <div className="mt-4 space-y-3 text-sm text-white/90">
              <p className="rounded-xl border border-white/10 bg-black/10 px-4 py-3">Practical frameworks for crisis-ready leadership</p>
              <p className="rounded-xl border border-white/10 bg-black/10 px-4 py-3">High-energy sessions that turn insight into action</p>
              <p className="rounded-xl border border-white/10 bg-black/10 px-4 py-3">Inclusive strategy for resilient team culture</p>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl border border-white/10 bg-black/10 p-3">
                <p className="font-display text-2xl text-gold">4+</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/75">Books</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/10 p-3">
                <p className="font-display text-2xl text-gold">MBA</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/75">Risk Focus</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/10 p-3">
                <p className="font-display text-2xl text-gold">CXO</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/75">Leadership Lens</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}
