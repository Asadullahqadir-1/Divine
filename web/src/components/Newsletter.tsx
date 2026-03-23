"use client";

import { FormEvent, useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }

    try {
      setStatus("loading");
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="rounded-3xl bg-navy px-5 py-10 text-white shadow-lift sm:px-10 sm:py-12">
      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Newsletter</p>
      <h3 className="mt-2 font-display text-3xl sm:text-4xl">Insights for courageous leadership.</h3>
      <p className="mt-3 max-w-2xl text-sm text-white/80 sm:text-base">
        Get practical leadership thinking, resilience frameworks, and mentorship updates from Divine Besong Eya.
      </p>

      <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="newsletterEmail"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          required
          className="h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 focus:border-gold focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-live h-12 rounded-full bg-gold px-6 text-sm font-semibold text-ink transition hover:bg-[#c39a4d] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {status === "success" ? (
        <p className="mt-3 text-sm text-green-200">Thanks. You are subscribed successfully.</p>
      ) : null}
      {status === "error" ? <p className="mt-3 text-sm text-rose-200">Please enter a valid email address.</p> : null}
    </section>
  );
}
