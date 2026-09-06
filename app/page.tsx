"use client";

import { useEffect, useState } from "react";

type College = {
  id: number;
  name: string;
  location: string;
  fees: number;
  rating: number;
  placement: number | null;
  description?: string | null;
};

const images: Record<string, string> = {
  "IIT Bombay":
    "https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80",
  "IIT Delhi":
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=80",
  "IIT Kanpur":
    "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=900&q=80",
  "NIT Trichy":
    "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=900&q=80",
  "BITS Pilani":
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=900&q=80",
};

export default function HomePage() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const filteredColleges = colleges.filter(
    (college) =>
      college.name.toLowerCase().includes(search.toLowerCase()) ||
      college.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-black">
            🎓 College<span className="text-blue-500">Finder</span>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="/compare"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/10"
            >
              Compare
            </a>

            <a
              href="/login"
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold hover:bg-blue-500"
            >
              Sign In
            </a>
          </div>
        </div>
      </nav>

      <section className="px-6 pb-20 pt-20">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-5 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            🚀 Find your perfect college
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Discover the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Right College
            </span>{" "}
            for Your Future
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Search, compare and explore top colleges using real college data.
          </p>

          <div className="mx-auto mt-10 flex max-w-2xl items-center rounded-2xl border border-white/10 bg-white/5 p-2">
            <span className="px-4 text-xl">🔍</span>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search college or location..."
              className="w-full bg-transparent px-2 py-3 text-white outline-none placeholder:text-slate-500"
            />

            <a
              href="#colleges"
              className="rounded-xl bg-blue-600 px-6 py-3 font-bold hover:bg-blue-500"
            >
              Search
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          <div className="text-center">
            <p className="text-3xl font-black">{colleges.length}+</p>
            <p className="mt-1 text-sm text-slate-400">Colleges</p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-black">50K+</p>
            <p className="mt-1 text-sm text-slate-400">Students</p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-black">100+</p>
            <p className="mt-1 text-sm text-slate-400">Courses</p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-black">4.8 ⭐</p>
            <p className="mt-1 text-sm text-slate-400">Average Rating</p>
          </div>
        </div>
      </section>

      <section id="colleges" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-blue-400">TOP COLLEGES</p>

          <h2 className="mt-2 text-4xl font-black">
            Explore Top Colleges
          </h2>

          <p className="mt-3 text-slate-400">
            Compare fees, ratings, locations and placements.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredColleges.map((college) => (
              <article
                key={college.id}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={
                      images[college.name] ||
                      images["IIT Bombay"]
                    }
                    alt={college.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold">
                      {college.name}
                    </h3>

                    <span className="rounded-lg bg-yellow-400/10 px-2 py-1 text-sm text-yellow-400">
                      ⭐ {college.rating}
                    </span>
                  </div>

                  <p className="mt-3 text-slate-400">
                    📍 {college.location}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/5 p-3">
                      <p className="text-xs text-slate-500">
                        Annual Fees
                      </p>

                      <p className="mt-1 font-bold">
                        ₹{college.fees.toLocaleString("en-IN")}
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/5 p-3">
                      <p className="text-xs text-slate-500">
                        Placement
                      </p>

                      <p className="mt-1 font-bold">
                        ₹
                        {college.placement
                          ? college.placement.toLocaleString("en-IN")
                          : "N/A"}
                      </p>
                    </div>
                  </div>

                  <a
                    href="/compare"
                    className="mt-5 block rounded-xl bg-blue-600 py-3 text-center font-bold hover:bg-blue-500"
                  >
                    Compare College
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredColleges.length === 0 && (
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
              <p className="text-xl font-bold">No colleges found</p>

              <p className="mt-2 text-slate-400">
                Try searching another college or location.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold text-blue-400">
              WHY COLLEGEFINDER?
            </p>

            <h2 className="mt-2 text-4xl font-black">
              Everything You Need
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="text-4xl">🔎</div>
              <h3 className="mt-5 text-xl font-bold">
                Smart Search
              </h3>

              <p className="mt-3 text-slate-400">
                Quickly find colleges by name or location.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="text-4xl">⚖️</div>

              <h3 className="mt-5 text-xl font-bold">
                Compare Colleges
              </h3>

              <p className="mt-3 text-slate-400">
                Compare fees, ratings, locations and placements.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="text-4xl">🎯</div>

              <h3 className="mt-5 text-xl font-bold">
                Better Decisions
              </h3>

              <p className="mt-3 text-slate-400">
                Use real data to choose the right college.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-blue-600/10 p-10 text-center">
          <h2 className="text-3xl font-black">
            Ready to find your college?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Start exploring and compare your favourite colleges today.
          </p>

          <div className="mt-7 flex justify-center gap-3">
            <a
              href="#colleges"
              className="rounded-xl bg-blue-600 px-6 py-3 font-bold hover:bg-blue-500"
            >
              Explore Colleges
            </a>

            <a
              href="/compare"
              className="rounded-xl border border-white/10 px-6 py-3 font-bold hover:bg-white/10"
            >
              Compare
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto max-w-7xl text-center text-sm text-slate-500">
          © 2026 CollegeFinder • Next.js • TypeScript • Prisma • PostgreSQL
        </div>
      </footer>
    </main>
  );
}