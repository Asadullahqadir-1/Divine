"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden py-16 text-white sm:py-20 lg:py-24">
      <div className="float-slow absolute -left-16 top-8 h-44 w-44 rounded-full bg-gold/20 blur-3xl" />
      <div className="float-fast absolute right-8 top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <Container>
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold sm:text-xs sm:tracking-[0.3em]"
            >
              Purpose | Inclusion | Impact
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] sm:text-5xl lg:text-6xl"
            >
              Lead intentionally in
              <span className="block text-gold">the AI generation.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg"
            >
              This platform equips leaders, organizations, and change-makers to align purpose,
              practice inclusion, and deliver impact that transforms people, teams, and communities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3 sm:mt-9 sm:gap-4"
            >
              <Link href="/contact" className="btn-live w-full rounded-full bg-gold px-6 py-3 text-center text-sm font-semibold text-ink transition hover:bg-[#c39a4d] sm:w-auto">
                Book a Conversation
              </Link>
              <Link href="/services" className="btn-live w-full rounded-full border border-white/60 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto">
                Explore Workshops
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
              {/* Decorative blur background */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-gold/20 via-white/10 to-transparent blur-2xl" />
              
              <Image
                src="/besong.jpeg"
                alt="Besongeya - Leadership Coach and DEI Advocate"
                width={500}
                height={600}
                priority
                quality={80}
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom: Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-12 grid grid-cols-3 gap-3 sm:gap-4 lg:mt-16 lg:grid-cols-5"
        >
          <div className="rounded-xl border border-white/10 bg-black/10 p-3 backdrop-blur text-center">
            <p className="font-display text-2xl text-gold">3</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/75">Pillars</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/10 p-3 backdrop-blur text-center">
            <p className="font-display text-2xl text-gold">4</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/75">Workshops</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/10 p-3 backdrop-blur text-center">
            <p className="font-display text-2xl text-gold">5</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/75">Courses</p>
          </div>
          <div className="hidden sm:block rounded-xl border border-white/10 bg-black/10 p-3 backdrop-blur text-center">
            <p className="font-display text-2xl text-gold">MBA</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/75">Risk Focus</p>
          </div>
          <div className="hidden sm:block rounded-xl border border-white/10 bg-black/10 p-3 backdrop-blur text-center">
            <p className="font-display text-2xl text-gold">DEI</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/75">Advocate</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
