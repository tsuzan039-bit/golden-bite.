"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { addons, products, money } from "@/lib/data";
import { useCart } from "@/lib/cart";
import { Thumb } from "@/components/ProductCard";

export default function ProductPage() {
const { id } = useParams<{ id: string }>();
const router = useRouter();
const { add } = useCart();
const p = products.find((x) => x.id === id);
const [picked, setPicked] = useState<string[]>([]);
const [qty, setQty] = useState(1);

if (!p) {
return ( <div className="relative flex min-h-[65vh] flex-col items-center justify-center overflow-hidden bg-[#080706] px-4 text-center"> <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-amber-500/10 blur-[100px]" />

 
    <div className="relative rounded-3xl border border-amber-400/20 bg-white/[0.02] p-10 shadow-[0_0_50px_rgba(245,158,11,0.06)]">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/15 to-transparent">
        <span className="font-display text-2xl font-bold text-amber-300">
          GB
        </span>
      </div>

      <h1 className="mt-5 font-display text-3xl font-bold text-white">
        Product Not Found
      </h1>

      <p className="mt-2 text-sm text-white/55">
        Sorry, we couldn&apos;t find the item you&apos;re looking for.
      </p>

      <Link href="/menu" className="btn mt-6 inline-flex">
        <span aria-hidden="true">←</span>
        <span className="ml-2">Back to Menu</span>
      </Link>
    </div>
  </div>
);
 

}

const options = addons.filter((a) => a.cats.includes(p.cat));
const chosen = options.filter((a) => picked.includes(a.id));
const unit = p.price + chosen.reduce((s, a) => s + a.price, 0);

const toggle = (aid: string) =>
setPicked((current) =>
current.includes(aid)
? current.filter((x) => x !== aid)
: [...current, aid]
);

return ( <section className="relative isolate min-h-screen overflow-hidden bg-[#080706] pb-16 text-white">
{/* Ambient Gold Lighting */} <div className="pointer-events-none absolute -left-32 top-32 -z-10 h-80 w-80 rounded-full bg-amber-500/[0.09] blur-[120px]" /> <div className="pointer-events-none absolute -right-32 top-[45%] -z-10 h-96 w-96 rounded-full bg-yellow-600/[0.07] blur-[130px]" />

 
  <div className="relative mx-auto max-w-7xl px-4 pt-7 sm:px-6 md:pt-10 lg:px-8">
    {/* Breadcrumb */}
    <Link
      href="/menu"
      className="group inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-sm text-white/60 transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-400/[0.05] hover:text-amber-200"
    >
      <span className="transition-transform duration-300 group-hover:-translate-x-1">
        ←
      </span>
      Back to Menu
    </Link>

    <div className="mt-7 grid items-start gap-8 md:mt-10 md:grid-cols-2 md:gap-10 lg:gap-16">
      {/* Product Image */}
      <div className="group relative">
        {/* Outer golden glow */}
        <div className="absolute -inset-[2px] rounded-[26px] bg-gradient-to-br from-amber-200/70 via-amber-500/10 to-yellow-700/40 opacity-60 blur-[3px] transition-all duration-500 group-hover:opacity-100 group-hover:blur-[5px]" />

        <div className="relative overflow-hidden rounded-3xl border border-amber-400/25 bg-[#11100e] shadow-[0_15px_60px_rgba(0,0,0,0.45)]">
          {/* Top gold accent */}
          <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent shadow-[0_0_12px_rgba(251,191,36,0.8)]" />

          <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-black/75 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.08)] backdrop-blur-xl sm:left-5 sm:top-5 sm:text-xs">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            Freshly Prepared
          </div>

          <Thumb
            p={p}
            className="h-72 transition-transform duration-700 ease-out group-hover:scale-[1.035] sm:h-96 md:h-[440px] lg:h-[510px] [&>span]:text-[9rem] sm:[&>span]:text-[11rem] md:[&>span]:text-[12rem]"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-5 sm:p-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-300/90">
                Golden Bite Selection
              </p>
              <p className="mt-1 font-display text-lg font-bold text-white sm:text-xl">
                Crafted for your cravings
              </p>
            </div>

            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-amber-300/40 bg-black/60 text-lg text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.1)] backdrop-blur-md">
              ✦
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.17em] text-white/40 sm:text-xs">
          <span className="h-px w-7 bg-gradient-to-r from-transparent to-amber-400/70" />
          Every Craving. One Place.
          <span className="h-px w-7 bg-gradient-to-l from-transparent to-amber-400/70" />
        </div>
      </div>

      {/* Product Information */}
      <div className="min-w-0 md:pt-2">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-amber-200 to-amber-500" />

          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-300 sm:text-xs">
            The Golden Bite Experience
          </p>
        </div>

        <h1 className="mt-4 break-words font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {p.name}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-amber-200 sm:text-xs">
            Premium Selection
          </span>

          <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium text-white/55 sm:text-xs">
            Made Fresh to Order
          </span>
        </div>

        <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
          {p.desc}
        </p>

        {/* Price Card */}
        <div className="group/price relative mt-7 overflow-hidden rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-400/[0.09] via-[#15120c] to-[#0d0c0a] p-5 shadow-[0_8px_35px_rgba(0,0,0,0.2)] sm:p-6">
          <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-amber-400/[0.09] blur-3xl transition-all duration-500 group-hover/price:bg-amber-400/[0.16]" />

          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />

          <div className="relative flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45 sm:text-xs">
                Starting Price
              </p>

              <p className="mt-2 text-3xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text sm:text-4xl">
                {money(p.price)}
              </p>
            </div>

            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-amber-300/25 bg-black/30 text-xl text-amber-200 shadow-[inset_0_1px_rgba(255,255,255,0.05)] sm:h-14 sm:w-14">
              <span aria-hidden="true">✦</span>
            </div>
          </div>
        </div>

        {/* Add-ons */}
        {options.length > 0 && (
          <fieldset className="mt-8">
            <legend className="flex items-center gap-3 font-display text-xl font-bold sm:text-2xl">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-amber-400/30 bg-gradient-to-br from-amber-300/15 to-transparent text-lg text-amber-200">
                +
              </span>
              Customize Your Order
            </legend>

            <p className="mt-2 text-xs leading-6 text-white/45 sm:text-sm">
              Add your favorite extras and make it yours.
            </p>

            <div className="mt-4 grid gap-3">
              {options.map((a) => {
                const isPicked = picked.includes(a.id);

                return (
                  <label
                    key={a.id}
                    className={`group/addon relative flex cursor-pointer items-center justify-between gap-3 overflow-hidden rounded-xl border px-4 py-3.5 transition-all duration-300 sm:px-5 ${
                      isPicked
                        ? "border-amber-400/60 bg-gradient-to-r from-amber-400/[0.12] to-amber-400/[0.025] shadow-[0_0_22px_rgba(245,158,11,0.06)]"
                        : "border-white/[0.09] bg-white/[0.02] hover:border-amber-400/35 hover:bg-amber-400/[0.035]"
                    }`}
                  >
                    {isPicked && (
                      <span className="pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-amber-200 via-amber-400 to-transparent" />
                    )}

                    <span className="flex min-w-0 items-center gap-3">
                      <input
                        type="checkbox"
                        className="h-4 w-4 shrink-0 cursor-pointer accent-amber-400 sm:h-[18px] sm:w-[18px]"
                        checked={isPicked}
                        onChange={() => toggle(a.id)}
                      />

                      <span
                        className={`text-sm font-medium transition-colors ${
                          isPicked
                            ? "text-amber-100"
                            : "text-white/80 group-hover/addon:text-white"
                        }`}
                      >
                        {a.name}
                      </span>
                    </span>

                    <span className="shrink-0 text-xs font-bold text-amber-300 sm:text-sm">
                      + {money(a.price)}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        )}

        {/* Quantity */}
        <div className="mt-8">
          <p className="mb-3 text-sm font-semibold text-white/80">
            Quantity
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-full border border-amber-400/20 bg-white/[0.025] p-1 shadow-[inset_0_1px_rgba(255,255,255,0.025)]">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="grid h-10 w-10 place-items-center rounded-full text-xl text-white/70 transition-all duration-200 hover:bg-amber-400 hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
                disabled={qty <= 1}
                onClick={() => setQty((current) => Math.max(1, current - 1))}
              >
                −
              </button>

              <span
                aria-live="polite"
                className="w-10 text-center font-bold text-amber-100"
              >
                {qty}
              </span>

              <button
                type="button"
                aria-label="Increase quantity"
                className="grid h-10 w-10 place-items-center rounded-full text-xl text-white/70 transition-all duration-200 hover:bg-amber-400 hover:text-black"
                onClick={() => setQty((current) => current + 1)}
              >
                +
              </button>
            </div>

            <span className="text-xs text-white/45 sm:text-sm">
              {qty === 1 ? "1 item selected" : `${qty} items selected`}
            </span>
          </div>
        </div>

        {/* Order Summary */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-amber-400/20 bg-[#11100e] p-4 sm:p-5">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />

          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                Your Total
              </p>

              <p className="mt-1 text-[10px] text-white/35">
                {qty} × selected item{qty === 1 ? "" : "s"}
              </p>
            </div>

            <p
              aria-live="polite"
              className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text sm:text-3xl"
            >
              {money(unit * qty)}
            </p>
          </div>

          <button
            type="button"
            className="group/button relative mt-5 flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 px-5 py-4 text-sm font-extrabold text-[#171006] shadow-[0_5px_22px_rgba(245,158,11,0.17)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(245,158,11,0.3)] active:translate-y-0"
            onClick={() => {
              add(p, chosen, qty);
              router.push("/cart");
            }}
          >
            <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/30 blur-md transition-all duration-700 group-hover/button:left-[120%]" />

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="relative h-5 w-5"
              aria-hidden="true"
            >
              <path
                d="M3 3H5L7.5 15.5H18L21 7H6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="20" r="1.2" />
              <circle cx="18" cy="20" r="1.2" />
            </svg>

            <span className="relative">Add to Cart</span>

            <span className="relative opacity-50">|</span>

            <span className="relative">{money(unit * qty)}</span>
          </button>

          <p className="mt-4 flex items-center justify-center gap-2 text-[10px] text-white/40 sm:text-xs">
            <span className="text-amber-300">✦</span>
            Freshly prepared just for you
            <span className="text-amber-300">✦</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

);
}
