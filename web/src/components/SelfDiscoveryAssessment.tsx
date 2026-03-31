"use client";

import { useMemo, useState } from "react";

type Question = {
  id: string;
  prompt: string;
};

const questions: Question[] = [
  { id: "selfAwareness", prompt: "I can clearly identify my leadership strengths and blind spots." },
  { id: "decisionMaking", prompt: "I make high-stakes decisions quickly without sacrificing quality." },
  { id: "communication", prompt: "My communication creates clarity, momentum, and trust in my team." },
  { id: "accountability", prompt: "I hold people accountable in a way that is both firm and developmental." },
  { id: "adaptability", prompt: "I stay steady and focused when plans change unexpectedly." },
  { id: "delegation", prompt: "I delegate outcomes effectively instead of micromanaging tasks." },
  { id: "inclusion", prompt: "I create space for diverse viewpoints before final decisions are made." },
  { id: "execution", prompt: "I turn strategy into measurable execution with consistent follow-through." },
  { id: "coaching", prompt: "I actively coach emerging leaders instead of solving everything myself." },
  { id: "purpose", prompt: "My leadership decisions are anchored in a clear purpose and values." },
];

const scoreLabels = [
  {
    max: 24,
    level: "Emerging Leader",
    summary:
      "You are building the foundations. Focus on self-awareness, communication clarity, and consistent routines.",
    nextMove: "Start with one weekly reflection ritual and one accountability system for your top priority.",
  },
  {
    max: 37,
    level: "Developing Leader",
    summary:
      "You have solid instincts but need sharper leadership systems under pressure.",
    nextMove:
      "Strengthen delegation and coaching habits so your impact scales through other people, not only personal effort.",
  },
  {
    max: 45,
    level: "Advanced Leader",
    summary:
      "You demonstrate strong leadership capability and execution discipline across core areas.",
    nextMove:
      "Build global influence by improving cross-cultural communication and developing your second-line leaders.",
  },
  {
    max: 50,
    level: "Transformational Leader",
    summary:
      "You lead with high clarity, resilience, and strategic influence across people and systems.",
    nextMove:
      "Move into legacy-level leadership by mentoring at scale and building leadership architecture beyond your role.",
  },
];

export function SelfDiscoveryAssessment() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const totalAnswered = Object.keys(answers).length;

  const totalScore = useMemo(
    () => Object.values(answers).reduce((sum, value) => sum + value, 0),
    [answers]
  );

  const result = useMemo(() => {
    return scoreLabels.find((item) => totalScore <= item.max) || scoreLabels[scoreLabels.length - 1];
  }, [totalScore]);

  return (
    <section className="mx-auto w-full max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      <header className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Self Discovery Assessment</p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
          Measure Your Current Leadership Level
        </h1>
        <p className="mt-4 text-sm leading-7 text-ink/70 sm:text-base">
          Rate each statement from 1 (rarely true) to 5 (consistently true). Your score reveals your current level and what to improve next.
        </p>
      </header>

      <div className="mt-8 grid gap-4">
        {questions.map((question, index) => (
          <article key={question.id} className="rounded-2xl border border-black/10 bg-white p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Question {index + 1}</p>
            <p className="mt-2 text-base font-medium text-ink">{question.prompt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((score) => (
                <button
                  key={`${question.id}-${score}`}
                  type="button"
                  onClick={() => setAnswers((current) => ({ ...current, [question.id]: score }))}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                    answers[question.id] === score
                      ? "border-navy bg-navy text-white"
                      : "border-black/20 bg-white text-ink/75 hover:border-navy hover:text-navy"
                  }`}
                >
                  {score}
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>

      <aside className="mt-8 rounded-2xl border border-black/10 bg-gradient-to-br from-ink to-navy p-6 text-white sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Your Result</p>
        <p className="mt-3 text-sm text-white/70">Answered: {totalAnswered} / {questions.length}</p>
        <p className="mt-1 text-sm text-white/70">Score: {totalScore} / 50</p>
        <h2 className="mt-4 font-display text-4xl text-gold-light">{result.level}</h2>
        <p className="mt-4 text-sm leading-7 text-white/80">{result.summary}</p>
        <p className="mt-4 text-sm leading-7 text-white/80">
          <span className="font-semibold text-gold-light">Next move:</span> {result.nextMove}
        </p>
        <a
          href="/contact"
          className="btn-live mt-6 inline-flex rounded-full bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white"
        >
          Book Leadership Coaching
        </a>
      </aside>
    </section>
  );
}
