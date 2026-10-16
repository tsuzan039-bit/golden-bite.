"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { categories, products, Cat } from "@/lib/data";

function MenuInner() {
const searchParams = useSearchParams();
const initial = (searchParams.get("cat") as Cat) || "all";

const [cat, setCat] = useState<Cat | "all">(initial);
const [q, setQ] = useState("");

useEffect(() => {
const requestedCategory = (searchParams.get("cat") as Cat) || "all";

setCat(requestedCategory);

if (searchParams.get("cat")) {
  requestAnimationFrame(() => {
    document.getElementById("combos")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

}, [searchParams]);

const list = products.filter(
(p) =>
(cat === "all" || p.cat === cat) &&
p.name.toLowerCase().includes(q.trim().toLowerCase())
);

return ( <section className="relative isolate min-h-screen overflow-hidden bg-[#080706] pb-20 text-white">
{/* Ambient Golden Lighting */} <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-amber-500/[0.09] blur-[120px]" /> <div className="pointer-events-none absolute -right-32 top-[35rem] -z-10 h-96 w-96 rounded-full bg-yellow-600/[0.07] blur-[130px]" />

  <div className="relative mx-auto max-w-7xl px-4 pt-12 sm:px-6 md:pt-16 lg:px-8">
    {/* Menu Heading */}
    <div className="text-center">
      <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-amber-400/[0.045] px-4 py-2 shadow-[0_0_25px_rgba(245,158,11,0.05)]">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_9px_rgba(251,191,36,0.8)]" />
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-200 sm:text-xs">
          The Golden Bite Collection
        </p>
      </div>

      <h1 className="mt-6 font-display text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
        Our{" "}
        <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(245,158,11,0.12)]">
          Menu
        </span>
      </h1>

      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
        Discover your favorites, from juicy burgers to delicious crepes.
        Every craving deserves something special.
      </p>

      <div className="mx-auto mt-7 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400/70" />
        <span className="text-sm text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">
          ✦
        </span>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400/70" />
      </div>
    </div>

    {/* Search */}
    <div className="mx-auto mt-9 max-w-2xl">
      <label
        htmlFor="menu-search"
        className="mb-3 block text-center text-[10px] font-bold uppercase tracking-[0.22em] text-white/45 sm:text-xs"
      >
        Find Your Favorite
      </label>

      <div className="group/search relative">
        <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-amber-500/0 via-amber-400/30 to-amber-500/0 opacity-60 blur-sm transition-opacity duration-300 group-focus-within/search:opacity-100" />

        <div className="relative flex items-center rounded-2xl border border-white/10 bg-[#11100e]/95 shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 focus-within:border-amber-400/50 focus-within:shadow-[0_0_25px_rgba(245,158,11,0.07)]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="ml-4 h-5 w-5 shrink-0 text-amber-300/80 sm:ml-5"
            aria-hidden="true"
          >
            <circle cx="10.8" cy="10.8" r="6.8" />
            <path d="m16 16 4.5 4.5" strokeLinecap="round" />
          </svg>

          <input
            id="menu-search"
            type="search"
            className="min-w-0 flex-1 border-0 bg-transparent px-3 py-4 text-sm text-white outline-none ring-0 placeholder:text-white/30 focus:border-0 focus:outline-none focus:ring-0 sm:px-4 sm:text-base"
            placeholder="Search burgers, crepes, drinks..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />

          {q && (
            <button
              type="button"
              onClick={() => setQ("")}
              aria-label="Clear search"
              className="mr-3 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-xs text-white/50 transition-all hover:border-amber-400/40 hover:text-amber-200 sm:mr-4"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </div>

    {/* Categories */}
    <div className="mt-9">
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="h-px w-6 bg-amber-400/30" />
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/45 sm:text-xs">
          Explore Categories
        </p>
        <span className="h-px w-6 bg-amber-400/30" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {[
          { id: "all", label: "All Items", emoji: "✦" },
          ...categories,
        ].map((c) => {
          const active = cat === c.id;

          return (
            <button
              key={c.id}
              type="button"
              aria-pressed={active}
              onClick={() => setCat(c.id as Cat | "all")}
              className={`group/category relative inline-flex items-center gap-2 overflow-hidden rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-5 sm:py-3 sm:text-sm ${
                active
                  ? "border-amber-300/80 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 text-[#171006] shadow-[0_0_22px_rgba(245,158,11,0.17)]"
                  : "border-white/10 bg-white/[0.025] text-white/65 hover:border-amber-400/40 hover:bg-amber-400/[0.06] hover:text-amber-200"
              }`}
            >
              {active && (
                <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/30 blur-md transition-all duration-700 group-hover/category:left-[120%]" />
              )}

              <span className="relative">{c.emoji}</span>
              <span className="relative">{c.label}</span>
            </button>
          );
        })}
      </div>
    </div>

    {/* Results Header */}
    <div className="mt-12 flex flex-wrap items-end justify-between gap-4 border-b border-amber-400/15 pb-5">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-300/80">
          Made for Your Cravings
        </p>

        <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
          {cat === "all"
            ? "Our Favorites"
            : categories.find((c) => c.id === cat)?.label ??
              "Our Favorites"}
        </h2>

        <p className="mt-2 text-xs text-white/40 sm:text-sm">
          Freshly prepared. Full of flavor.
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.045] px-4 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />

        <span className="text-xs font-semibold text-amber-200">
          {list.length} {list.length === 1 ? "Item" : "Items"}
        </span>
      </div>
    </div>

    {/* Products / Combos Anchor */}
    <div id="combos" className="scroll-mt-24">
      {list.length === 0 ? (
        <div className="relative mt-8 flex min-h-72 flex-col items-center justify-center overflow-hidden rounded-3xl border border-amber-400/15 bg-gradient-to-b from-amber-400/[0.035] to-transparent px-4 text-center">
          <div className="pointer-events-none absolute h-36 w-36 rounded-full bg-amber-500/[0.08] blur-3xl" />

          <span className="relative grid h-16 w-16 place-items-center rounded-2xl border border-amber-400/25 bg-amber-400/[0.05] text-2xl text-amber-200">
            ⌕
          </span>

          <h3 className="relative mt-5 font-display text-2xl font-bold">
            No Items Found
          </h3>

          <p className="relative mt-2 max-w-sm text-sm leading-6 text-white/50">
            We couldn&apos;t find a match. Try another search or explore
            all our delicious options.
          </p>

          <button
            type="button"
            onClick={() => {
              setQ("");
              setCat("all");
            }}
            className="btn relative mt-6 inline-flex items-center gap-2 !rounded-xl !px-6 !py-3 text-sm"
          >
            <span>View All Items</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      ) : (
        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </div>

    {/* Bottom Brand Signature */}
    {list.length > 0 && (
      <div className="mt-16 text-center">
        <div className="mx-auto flex max-w-xs items-center justify-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-400/35" />
          <span className="font-display text-sm font-bold tracking-[0.2em] text-amber-300">
            GOLDEN BITE
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-400/35" />
        </div>

        <p className="mt-3 text-xs text-white/40">
          Every Craving. One Place.
        </p>
      </div>
    )}
  </div>
</section>

);
}

export default function MenuPage() {
return (
<Suspense
fallback={ <div className="flex min-h-96 items-center justify-center bg-[#080706] text-amber-300"> <div className="flex items-center gap-3"> <span className="h-2 w-2 animate-pulse rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
Loading menu... </div> </div>
}
> <MenuInner /> </Suspense>
);
}
