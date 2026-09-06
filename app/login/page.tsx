"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    localStorage.setItem("collegefinder_user", email);
    alert("Login successful!");
    window.location.href = "/";
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-8 text-center">
          <div className="text-4xl">🎓</div>
          <h1 className="mt-4 text-3xl font-black text-white">
            Welcome Back
          </h1>
          <p className="mt-2 text-slate-400">
            Sign in to your CollegeFinder account
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3.5 font-bold text-white transition hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Sign In →
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-sm text-slate-500">OR</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <button
          type="button"
          onClick={() => {
            localStorage.setItem("collegefinder_user", "Google User");
            window.location.href = "/";
          }}
          className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Continue with Google
        </button>

        <Link
          href="/"
          className="mt-6 block text-center text-sm text-slate-400 hover:text-white"
        >
          ← Back to CollegeFinder
        </Link>
      </div>
    </main>
  );
}