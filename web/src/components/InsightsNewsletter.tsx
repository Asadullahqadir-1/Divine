"use client";

import { FormEvent, useState } from "react";

export function InsightsNewsletter() {
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
    <section className="relative overflow-hidden bg-ink py-20 text-center text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(181,138,59,0.2),transparent_40%),radial-gradient(circle_at_18%_50%,rgba(15,29,49,0.7),transparent_52%)]" />
      <div className="relative mx-auto w-full max-w-2xl px-5 sm:px-8">
        <h2 className="font-display text-5xl leading-tight sm:text-6xl">
          The Mindset Brief - <span className="italic text-gold-light">Free Weekly.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55">
          Join thousands of leaders who start their week with sharp insights on leadership, performance, and the inner game of success.
        </p>
        <form className="mx-auto mt-8 flex max-w-lg flex-col gap-0 sm:flex-row" onSubmit={handleSubmit}>
          <label htmlFor="insights-newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="insights-newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="Enter your email address"
            className="h-12 flex-1 border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="h-12 border border-gold bg-gold px-6 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe Free"}
          </button>
        </form>
        <p className="mt-4 text-xs text-white/35">Unsubscribe anytime. Your privacy is always respected.</p>
        {status === "success" ? <p className="mt-3 text-sm text-green-200">Subscribed successfully.</p> : null}
        {status === "error" ? <p className="mt-3 text-sm text-rose-200">Please enter a valid email address.</p> : null}
      </div>
    </section>
  );
}
