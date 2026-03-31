"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Question = {
  id: string;
  prompt: string;
  dimension: string;
};

const questions: Question[] = [
  { id: "selfAwareness", prompt: "I can clearly identify my leadership strengths and blind spots.", dimension: "Self-Awareness" },
  { id: "decisionMaking", prompt: "I make high-stakes decisions quickly without sacrificing quality.", dimension: "Decision-Making" },
  { id: "communication", prompt: "My communication creates clarity, momentum, and trust in my team.", dimension: "Communication" },
  { id: "accountability", prompt: "I hold people accountable in a way that is both firm and developmental.", dimension: "Accountability" },
  { id: "adaptability", prompt: "I stay steady and focused when plans change unexpectedly.", dimension: "Adaptability" },
  { id: "delegation", prompt: "I delegate outcomes effectively instead of micromanaging tasks.", dimension: "Delegation" },
  { id: "inclusion", prompt: "I create space for diverse viewpoints before final decisions are made.", dimension: "Inclusion" },
  { id: "execution", prompt: "I turn strategy into measurable execution with consistent follow-through.", dimension: "Execution" },
  { id: "coaching", prompt: "I actively coach emerging leaders instead of solving everything myself.", dimension: "Coaching" },
  { id: "purpose", prompt: "My leadership decisions are anchored in a clear purpose and values.", dimension: "Purpose & Values" },
];

const scoreLabels = [
  {
    max: 24,
    level: "Emerging Leader",
    icon: "🌱",
    summary:
      "You are building the foundations. Focus on self-awareness, communication clarity, and consistent routines.",
    nextMove: "Start with one weekly reflection ritual and one accountability system for your top priority.",
  },
  {
    max: 37,
    level: "Developing Leader",
    icon: "🚀",
    summary:
      "You have solid instincts but need sharper leadership systems under pressure.",
    nextMove:
      "Strengthen delegation and coaching habits so your impact scales through other people, not only personal effort.",
  },
  {
    max: 45,
    level: "Advanced Leader",
    icon: "⭐",
    summary:
      "You demonstrate strong leadership capability and execution discipline across core areas.",
    nextMove:
      "Build global influence by improving cross-cultural communication and developing your second-line leaders.",
  },
  {
    max: 50,
    level: "Transformational Leader",
    icon: "👑",
    summary:
      "You lead with high clarity, resilience, and strategic influence across people and systems.",
    nextMove:
      "Move into legacy-level leadership by mentoring at scale and building leadership architecture beyond your role.",
  },
];

export function SelfDiscoveryAssessment() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const totalAnswered = Object.keys(answers).length;

  const totalScore = useMemo(
    () => Object.values(answers).reduce((sum, value) => sum + value, 0),
    [answers]
  );

  const result = useMemo(() => {
    return scoreLabels.find((item) => totalScore <= item.max) || scoreLabels[scoreLabels.length - 1];
  }, [totalScore]);

  const isComplete = totalAnswered === questions.length;

  const getLevelColor = (level: string) => {
    if (level.includes("Emerging")) return "from-amber-600 to-amber-700";
    if (level.includes("Developing")) return "from-blue-600 to-blue-700";
    if (level.includes("Advanced")) return "from-gold to-amber-700";
    return "from-gold-light to-gold";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mist via-white to-bone">
      {/* Header Section with Branding */}
      <section className="relative overflow-hidden border-b border-black/10 bg-gradient-to-r from-navy to-black px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 1200 300">
            <defs>
              <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="white"/>
              </pattern>
            </defs>
            <rect width="1200" height="300" fill="url(#dots)" />
          </svg>
        </div>
        
        <div className="relative mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">✦ Self Discovery Assessment ✦</p>
          <h1 className="font-display mt-3 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
            Measure Your <em className="italic text-gold-light">Leadership Level</em>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Discover where you stand on the leadership spectrum. This interactive assessment measures your current capability across 10 dimensions critical to high-impact leadership. It takes 5 minutes and provides actionable insights.
          </p>
        </div>
      </section>

      {/* Main Assessment */}
      <section className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-20">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-2xl font-light text-ink">Rate Each Statement</h2>
            <span className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider ${
              isComplete 
                ? "bg-gold/20 text-gold" 
                : "bg-navy/10 text-navy"
            }`}>
              {totalAnswered} / {questions.length} Complete
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="h-2 overflow-hidden rounded-full bg-black/10">
            <div
              className="progress-bar h-full bg-gradient-to-r from-gold to-gold-light"
              style={{ width: `${(totalAnswered / questions.length) * 100}%` }}
            />
          </div>
          
          <p className="mt-4 text-xs leading-relaxed text-ink/60">
            Rate each statement on a scale of 1 (rarely true) to 5 (consistently true). Be honest with yourself—there are no "right" answers, only authentic ones.
          </p>
        </div>

        {/* Questions Grid */}
        <div className="space-y-6">
          {questions.map((question, index) => (
            <article 
              key={question.id} 
              className="assessment-question group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-gold/30 sm:p-7"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    {question.dimension}
                  </p>
                  <p className="mt-2 text-base font-medium leading-relaxed text-ink">{question.prompt}</p>
                </div>
                <span className="text-sm font-semibold text-navy/30 group-hover:text-gold transition">
                  {index + 1}/{questions.length}
                </span>
              </div>
              
              {/* Rating Scale */}
              <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
                {[1, 2, 3, 4, 5].map((score) => {
                  const isSelected = answers[question.id] === score;
                  return (
                    <button
                      key={`${question.id}-${score}`}
                      type="button"
                      onClick={() => setAnswers((current) => ({ ...current, [question.id]: score }))}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold transition-all ${
                        isSelected
                          ? "assessment-button-selected border-gold bg-gradient-to-br from-gold to-gold-light text-white shadow-md"
                          : "border-black/20 bg-white text-ink/75 hover:border-gold hover:text-gold"
                      }`}
                    >
                      {score}
                    </button>
                  );
                })}
              </div>
              <p className="mt-3 text-xs text-ink/50">
                {answers[question.id] === 1 && "Rarely your reality"}
                {answers[question.id] === 2 && "Sometimes true"}
                {answers[question.id] === 3 && "Neutral or mixed"}
                {answers[question.id] === 4 && "Often true"}
                {answers[question.id] === 5 && "Consistently true"}
                {!answers[question.id] && "Select your response"}
              </p>
            </article>
          ))}
        </div>

        {/* Results Section */}
        {isComplete && (
          <div className="mt-12 space-y-6 result-card">
            <div className={`rounded-3xl border-2 border-gold/30 bg-gradient-to-br ${getLevelColor(result.level)} p-8 text-white shadow-lg sm:p-12`}>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-white/80">Your Leadership Level</p>
                  <h2 className="font-display mt-2 text-4xl font-light sm:text-5xl">{result.level}</h2>
                </div>
                <div className="text-6xl">{result.icon}</div>
              </div>
              
              <div className="space-y-4 border-t border-white/20 pt-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-white/80">Score Breakdown</p>
                  <p className="mt-2 text-2xl font-light"><span className="text-3xl font-semibold">{totalScore}</span> <span className="text-lg">/  50</span></p>
                </div>
              </div>
            </div>

            {/* Insights */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">Your Profile</p>
                <p className="mt-4 leading-relaxed text-ink">
                  {result.summary}
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">Next Growth Move</p>
                <p className="mt-4 leading-relaxed text-ink">
                  {result.nextMove}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border-2 border-gold/20 bg-gold/5 p-8 sm:p-10">
              <h3 className="font-display text-2xl font-light text-ink">Ready to Accelerate Your Leadership?</h3>
              <p className="mt-3 leading-relaxed text-ink/70">
                Your assessment reveals your current level. The next step is getting personalized guidance to breakthrough your next ceiling and unlock your full leadership potential.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-white transition hover:bg-gold-light"
                >
                  Book Leadership Coaching
                  <span>→</span>
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gold px-6 py-3 font-semibold text-gold transition hover:bg-gold/10"
                >
                  Back to Homepage
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Start Button (if not complete) */}
        {!isComplete && totalAnswered > 0 && (
          <div className="mt-10 rounded-2xl border border-gold/20 bg-gold/5 p-6 text-center sm:p-8">
            <p className="mb-4 text-sm text-ink/70">
              <span className="font-semibold text-gold">{questions.length - totalAnswered}</span> more questions to unlock your results
            </p>
            <div className="h-1 overflow-hidden rounded-full bg-black/10">
              <div
                className="progress-bar h-full bg-gradient-to-r from-gold to-gold-light"
                style={{ width: `${(totalAnswered / questions.length) * 100}%` }}
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
