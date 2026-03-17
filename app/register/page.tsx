"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, org }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-radial-hero bg-grid">
      <Link
        href="/"
        className="flex items-center gap-2 mb-12 text-neutral-400 hover:text-neutral-200 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to drok.us
      </Link>

      {submitted ? (
        <div className="text-center animate-fade-in-up max-w-md">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#C8A87C]/10 border border-[#C8A87C]/30 flex items-center justify-center">
            <svg className="w-8 h-8 text-[#C8A87C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">You&apos;re on the list.</h1>
          <p className="text-neutral-400 mb-8">
            We&apos;ve sent a confirmation to <span className="text-neutral-200">{email}</span>.
            <br />
            Expect an invite within the coming weeks.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-lg border border-[#333] text-neutral-300 hover:text-white hover:border-[#555] transition-all"
          >
            Return Home
          </Link>
        </div>
      ) : (
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C8A87C] mb-4">
              Early Access
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
              Get Started
            </h1>
            <p className="text-neutral-400">
              Join the waitlist for the sovereign code platform.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-1.5">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Travis L. Guckert"
                className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#262626] text-white placeholder-neutral-600 focus:outline-none focus:border-[#C8A87C]/50 focus:ring-1 focus:ring-[#C8A87C]/25 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-1.5">
                Work Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#262626] text-white placeholder-neutral-600 focus:outline-none focus:border-[#C8A87C]/50 focus:ring-1 focus:ring-[#C8A87C]/25 transition-all"
              />
            </div>

            <div>
              <label htmlFor="org" className="block text-sm font-medium text-neutral-400 mb-1.5">
                Organization <span className="text-neutral-600">(optional)</span>
              </label>
              <input
                id="org"
                type="text"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                placeholder="Acme Corp"
                className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#262626] text-white placeholder-neutral-600 focus:outline-none focus:border-[#C8A87C]/50 focus:ring-1 focus:ring-[#C8A87C]/25 transition-all"
              />
            </div>

            {error && (
              <p className="text-sm text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 px-6 py-3.5 rounded-lg bg-[#C8A87C] text-[#0A0A0A] font-semibold hover:bg-[#D4B896] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Joining..." : "Join the Waitlist"}
            </button>
          </form>

          <p className="text-center text-xs text-neutral-600 mt-6">
            Free forever. No credit card required.
          </p>
        </div>
      )}
    </div>
  );
}
