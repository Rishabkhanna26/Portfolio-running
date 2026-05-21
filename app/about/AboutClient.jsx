"use client";

import { useState } from "react";
import Link from "next/link";
import MarketingShell from "../components/MarketingShell";
import SectionSpacer from "../components/SectionSpacer";

// ─── Quiz data ────────────────────────────────────────────────────────────────
const quizSteps = [
  {
    id: "intro",
    question: "Hey, so you want to know about me? Okay then — here you go. But first… pick how you want to explore 👇",
    options: [
      { label: "🚀 Tell me what you do", next: "what_i_do" },
      { label: "🛠️ Show me your stack", next: "stack" },
      { label: "🧠 How do you work?", next: "how_i_work" },
      { label: "📍 Where are you from?", next: "location" },
    ],
  },
  {
    id: "what_i_do",
    question: "I turn messy manual workflows into clean digital systems. Think WhatsApp bots that qualify leads, CRMs that auto-assign tasks, and dashboards that give founders real visibility — without hiring 3 extra people.",
    tag: "What I Do",
    options: [
      { label: "🛠️ What's your stack?", next: "stack" },
      { label: "🧠 How do you work?", next: "how_i_work" },
      { label: "📍 Where are you from?", next: "location" },
      { label: "🔗 What can I explore next?", next: "explore" },
    ],
  },
  {
    id: "stack",
    question: "Next.js, JavaScript, WordPress, Supabase, automation APIs, and custom webhook flows. I prioritize mobile-first interfaces, fast response times, and clean deployment workflows — so each system is maintainable long after launch.",
    tag: "Core Stack",
    options: [
      { label: "🚀 What do you do?", next: "what_i_do" },
      { label: "🧠 How do you work?", next: "how_i_work" },
      { label: "📍 Where are you from?", next: "location" },
      { label: "🔗 What can I explore next?", next: "explore" },
    ],
  },
  {
    id: "how_i_work",
    question: "Every project starts with process mapping. I find where leads enter, where teams lose speed, and where follow-ups break. Then I design a system across WhatsApp, CRM, forms, and dashboards — consistent communication, clear tasks, measurable metrics.",
    tag: "How I Work",
    options: [
      { label: "🚀 What do you do?", next: "what_i_do" },
      { label: "🛠️ What's your stack?", next: "stack" },
      { label: "📍 Where are you from?", next: "location" },
      { label: "🔗 What can I explore next?", next: "explore" },
    ],
  },
  {
    id: "location",
    question: "Based in Jalandhar, Punjab, India. Working with service businesses, agencies, and founders across India and beyond — remotely, async, and without the fluff.",
    tag: "Location",
    options: [
      { label: "🚀 What do you do?", next: "what_i_do" },
      { label: "🛠️ What's your stack?", next: "stack" },
      { label: "🧠 How do you work?", next: "how_i_work" },
      { label: "🔗 What can I explore next?", next: "explore" },
    ],
  },
  {
    id: "explore",
    question: "Nice — you've got the full picture. Here's where to go next depending on what you're looking for 👇",
    tag: "Explore Next",
    options: [],
    isEnd: true,
  },
];

const stepMap = Object.fromEntries(quizSteps.map((s) => [s.id, s]));

// ─── Progress dots ─────────────────────────────────────────────────────────────
const JOURNEY_IDS = ["what_i_do", "stack", "how_i_work", "location", "explore"];

export default function AboutClient() {
  const [currentId, setCurrentId] = useState("intro");
  const [visited, setVisited] = useState(new Set(["intro"]));
  const [history, setHistory] = useState(["intro"]);

  const current = stepMap[currentId];

  const go = (nextId) => {
    setCurrentId(nextId);
    setVisited((prev) => new Set([...prev, nextId]));
    setHistory((prev) => [...prev, nextId]);
  };

  const goBack = () => {
    if (history.length <= 1) return;
    const prev = history[history.length - 2];
    setHistory((h) => h.slice(0, -1));
    setCurrentId(prev);
  };

  const restart = () => {
    setCurrentId("intro");
    setHistory(["intro"]);
  };

  const progress = JOURNEY_IDS.filter((id) => visited.has(id)).length;
  const progressPct = Math.round((progress / JOURNEY_IDS.length) * 100);

  return (
    <MarketingShell>
      {/* ── Hero ── */}
      <section className="futuristic-hero px-4 py-10 xxs:py-8 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
            About Me
          </p>
          <h1 className="mt-5 break-words text-2xl xxs:text-xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Hey, so you want to know about me?{" "}
            <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
              Okay — here you go.
            </span>
          </h1>
          <p className="mt-4 break-words text-base xxs:text-sm leading-8 text-slate-300 sm:text-lg">
            I&apos;m Rishab Khanna — a web developer focused on turning manual business workflows into repeatable digital systems. Click through the cards below to explore.
          </p>
        </div>
      </section>

      <SectionSpacer />

      {/* ── Interactive Quiz ── */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-3xl py-10 sm:py-14">

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Explored {progress} / {JOURNEY_IDS.length} topics
              </span>
              <span className="text-xs font-semibold text-amber-400">{progressPct}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-slate-800">
              <div
                className="h-1.5 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 transition-all duration-700"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <div className="mt-3 flex gap-2">
              {JOURNEY_IDS.map((id) => (
                <div
                  key={id}
                  className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                    visited.has(id)
                      ? "bg-gradient-to-r from-amber-500 to-rose-500"
                      : "bg-slate-800"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Card */}
          <div className="relative rounded-3xl border-2 border-slate-700/70 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 xxs:p-5 shadow-2xl shadow-purple-500/10 transition-all duration-500">
            {/* Glow */}
            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-amber-500/10 via-rose-500/10 to-purple-500/10 opacity-60" />

            {/* Tag */}
            {current.tag && (
              <span className="mb-4 inline-flex rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-300">
                {current.tag}
              </span>
            )}

            {/* Question / answer text */}
            <p className="relative z-10 text-lg xxs:text-base leading-8 text-slate-100 font-medium mb-8">
              {current.question}
            </p>

            {/* End state — explore links */}
            {current.isEnd && (
              <div className="relative z-10 grid gap-3 sm:grid-cols-2 mb-8">
                <Link
                  href="/services/whatsapp-automation"
                  className="flex min-h-12 items-center rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-base xxs:text-sm font-medium text-slate-200 transition-colors hover:border-amber-500/50 hover:text-white"
                >
                  📱 WhatsApp Automation Service
                </Link>
                <Link
                  href="/services/ai-chatbots"
                  className="flex min-h-12 items-center rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-base xxs:text-sm font-medium text-slate-200 transition-colors hover:border-rose-500/50 hover:text-white"
                >
                  🤖 AI Chatbot Service
                </Link>
                <Link
                  href="/services/lead-generation"
                  className="flex min-h-12 items-center rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-base xxs:text-sm font-medium text-slate-200 transition-colors hover:border-purple-500/50 hover:text-white"
                >
                  🎯 Lead Generation Service
                </Link>
                <Link
                  href="/contact"
                  className="flex min-h-12 items-center rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-base xxs:text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
                >
                  ✉️ Contact Page
                </Link>
              </div>
            )}

            {/* Option buttons */}
            {current.options.length > 0 && (
              <div className="relative z-10 grid gap-3 sm:grid-cols-2">
                {current.options.map((opt) => (
                  <button
                    key={opt.next}
                    onClick={() => go(opt.next)}
                    className={`group flex min-h-12 items-center gap-3 rounded-xl border px-4 py-3 text-left text-base xxs:text-sm font-medium transition-all duration-300 hover:scale-[1.02] ${
                      visited.has(opt.next) && opt.next !== "explore"
                        ? "border-slate-600 bg-slate-800/40 text-slate-400 hover:border-slate-500 hover:text-slate-200"
                        : "border-slate-700 bg-slate-900/60 text-slate-200 hover:border-amber-500/60 hover:bg-slate-800/80 hover:text-white"
                    }`}
                  >
                    <span className="flex-1">{opt.label}</span>
                    {visited.has(opt.next) && opt.next !== "explore" && (
                      <span className="text-xs text-slate-500 shrink-0">✓ seen</span>
                    )}
                    <span className="shrink-0 text-slate-500 transition-transform group-hover:translate-x-1">→</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Nav controls */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              onClick={goBack}
              disabled={history.length <= 1}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              ← Back
            </button>

            <button
              onClick={restart}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-rose-500/50 hover:text-white"
            >
              ↺ Start Over
            </button>
          </div>

          {/* All-topics shortcut */}
          {progress === JOURNEY_IDS.length && (
            <div className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 text-center">
              <p className="text-base xxs:text-sm font-semibold text-amber-300 mb-3">
                🎉 You explored everything — nice work!
              </p>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-amber-600 to-rose-600 px-6 py-2.5 text-sm font-bold text-white transition-all hover:from-amber-500 hover:to-rose-500 hover:scale-105 shadow-lg hover:shadow-amber-500/30"
              >
                Let&apos;s Work Together →
              </Link>
            </div>
          )}
        </div>
      </section>

      <SectionSpacer />

      {/* ── Static summary ── */}
      <section className="px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl xxs:text-lg font-semibold text-white">How I Work</h2>
            <p className="mt-3 break-words text-base xxs:text-sm leading-7 text-slate-300">
              Every project starts with process mapping. I identify where leads enter, where teams lose speed, and where follow-ups break.
              Then I design a system across WhatsApp, CRM, forms, and dashboards so each lead receives consistent communication,
              sales teams get clear tasks, and managers get visibility with measurable metrics.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl xxs:text-lg font-semibold text-white">Core Stack</h2>
            <p className="mt-3 break-words text-base xxs:text-sm leading-7 text-slate-300">
              Next.js, JavaScript, WordPress, Supabase, automation APIs, and custom webhook flows. I prioritize mobile-first interfaces,
              fast response times, and clean deployment workflows so each system is maintainable long after launch.
            </p>
          </article>
        </div>
      </section>
    </MarketingShell>
  );
}
