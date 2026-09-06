"use client";

import { useEffect, useState } from "react";

type College = {
  id: number;
  name: string;
  location: string;
  fees: number;
  rating: number;
  placement: number | null;
};

export default function ComparePage() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then(setColleges);
  }, []);

  function toggleCollege(id: number) {
    setSelected((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      if (current.length >= 3) {
        alert("You can compare maximum 3 colleges.");
        return current;
      }

      return [...current, id];
    });
  }

  const compared = colleges.filter((college) => selected.includes(college.id));

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="text-blue-400 hover:text-blue-300">
          ← Back to Colleges
        </a>

        <div className="mt-8">
          <p className="font-semibold text-blue-400">COMPARE</p>
          <h1 className="mt-2 text-4xl font-black">
            Compare Colleges
          </h1>
          <p className="mt-3 text-slate-400">
            Select up to 3 colleges and compare them side by side.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {colleges.map((college) => (
            <button
              key={college.id}
              onClick={() => toggleCollege(college.id)}
              className={`rounded-2xl border p-5 text-left transition ${
                selected.includes(college.id)
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              <div className="flex justify-between">
                <h2 className="text-lg font-bold">{college.name}</h2>
                <span>⭐ {college.rating}</span>
              </div>

              <p className="mt-2 text-slate-400">
                📍 {college.location}
              </p>

              <p className="mt-4 font-semibold">
                ₹{college.fees.toLocaleString("en-IN")} / year
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Avg placement: ₹
                {college.placement?.toLocaleString("en-IN") || "N/A"}
              </p>

              <div className="mt-4 text-sm font-semibold text-blue-400">
                {selected.includes(college.id)
                  ? "✓ Selected"
                  : "Select to compare"}
              </div>
            </button>
          ))}
        </div>

        {compared.length > 0 && (
          <section className="mt-12 overflow-x-auto rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-6 text-2xl font-bold">
              Comparison
            </h2>

            <table className="w-full min-w-[650px] text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-slate-400">Feature</th>
                  {compared.map((college) => (
                    <th key={college.id} className="p-4">
                      {college.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-slate-400">Location</td>
                  {compared.map((college) => (
                    <td key={college.id} className="p-4">
                      {college.location}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-white/10">
                  <td className="p-4 text-slate-400">Fees</td>
                  {compared.map((college) => (
                    <td key={college.id} className="p-4 font-semibold">
                      ₹{college.fees.toLocaleString("en-IN")}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-white/10">
                  <td className="p-4 text-slate-400">Rating</td>
                  {compared.map((college) => (
                    <td key={college.id} className="p-4">
                      ⭐ {college.rating}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 text-slate-400">
                    Avg Placement
                  </td>
                  {compared.map((college) => (
                    <td key={college.id} className="p-4 font-semibold">
                      ₹
                      {college.placement?.toLocaleString("en-IN") ||
                        "N/A"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </section>
        )}
      </div>
    </main>
  );
}