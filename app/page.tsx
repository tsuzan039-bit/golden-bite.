"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import AnimatedHeroTitle from "@/components/AnimatedHeroTitle";
import { categories, products } from "@/lib/data";
import "./home-hero.css";

const featuredIds = ["b1", "b2", "t1", "b3", "c1", "b4", "c2", "d1"];

const featuredProducts = featuredIds
  .map((id) => products.find((p) => p.id === id))
  .filter((p) => p !== undefined);

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#080706] text-white">
      {/* Premium Hero */}
      <section
        id="home"
        className="relative isolate flex min-h-[85vh] items-center overflow-hidden border-b border-amber-400/[0.08]"
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-30 bg-[#080706]">
          <Image
            src="/images/golden-bite-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom opacity-  "
          />
          {/* Dark overlays to keep the text readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080706]/90 via-[#080706]/55 to-[#080706]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080706]/80 via-[#080706]/30 to-transparent" />
        </div>

        <div className="pointer-events-none absolute -left-40 top-0 -z-20 h-[500px] w-[500px] rounded-full bg-amber-500/[0.10] blur-[150px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 -z-20 h-[450px] w-[450px] rounded-full bg-yellow-600/[0.09] blur-[140px]" />

        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:70px_70px]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.05fr] md:gap-8 md:py-24 lg:px-8 lg:py-28">
          {/* Hero Content */}
          <div className="relative z-10 order-2 md:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-amber-400/25 bg-amber-400/[0.05] px-4 py-2.5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-200 sm:text-xs">
                Welcome to Golden Bite
              </span>
            </motion.div>

            {/* Animated Title */}
            <AnimatedHeroTitle />

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="mt-7 max-w-lg text-sm leading-8 text-white/55 sm:text-base"
            >
              From juicy burgers to irresistible crepes, discover flavors
              crafted to turn every craving into something unforgettable.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.7 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                href="/menu"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 px-7 py-4 text-sm font-bold text-[#171006] shadow-[0_0_30px_rgba(245,158,11,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(245,158,11,0.28)]"
              >
                <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 blur-md transition-all duration-700 group-hover:left-[120%]" />

                <span className="relative">Explore Our Menu</span>

                <span className="relative text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/menu?cat=combo"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-amber-300/30 bg-white/[0.025] px-7 py-4 text-sm font-semibold text-amber-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/60 hover:bg-amber-400/[0.08]"
              >
                Discover Our Combos
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>

            {/* Brand Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.7 }}
              className="mt-12 grid max-w-lg grid-cols-2 gap-5 border-t border-white/10 pt-7"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] text-xl text-amber-300">
                  ✦
                </span>

                <div>
                  <p className="text-sm font-bold text-white">Freshly Made</p>
                  <p className="mt-1 text-xs text-white/40">
                    Freshness in every bite
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] text-xl text-amber-300">
                  ♡
                </span>

                <div>
                  <p className="text-sm font-bold text-white">Made with Love</p>
                  <p className="mt-1 text-xs text-white/40">
                    Quality you can taste
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <div className="relative order-1 mx-auto w-full max-w-2xl md:order-2">
            <div className="pointer-events-none absolute inset-[10%] rounded-full bg-amber-400/[0.12] blur-[100px]" />

            <div className="pointer-events-none absolute right-[5%] top-[5%] h-28 w-28 rounded-full border border-amber-300/10 sm:h-40 sm:w-40" />

            <div className="pointer-events-none absolute bottom-[7%] left-[4%] h-20 w-20 rounded-full border border-amber-300/15 sm:h-28 sm:w-28" />

            <div className="group relative mx-auto aspect-square w-full max-w-[590px]">
              {/* Decorative Rings */}
              <div className="pointer-events-none absolute inset-0 rounded-full border border-amber-300/15 transition-all duration-500 group-hover:border-amber-300/40" />
              <div className="pointer-events-none absolute inset-[2%] rounded-full border border-dashed border-amber-300/20 animate-[spin_60s_linear_infinite]" />

              {/* Glow behind logo */}
              <div className="pointer-events-none absolute inset-[8%] rounded-full shadow-[0_0_80px_rgba(245,158,11,0.18)] transition-shadow duration-500 group-hover:shadow-[0_0_120px_rgba(245,158,11,0.38)]" />

              {/* Logo (circular PNG) */}
              <div className="absolute inset-[6%] transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                <Image
                  src="/images/golden-bite-logo.png"
                  alt="Golden Bite Logo"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 560px"
                  className="object-contain"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute left-0 top-[14%] z-10 rounded-2xl border border-amber-300/25 bg-[#11100e]/95 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/50 sm:left-1 sm:px-5 sm:py-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/45 sm:text-[10px]">
                  The Golden Standard
                </p>

                <p className="mt-1.5 font-display text-sm font-bold text-amber-200 sm:text-base">
                  Premium Quality
                </p>
              </div>

              <div className="absolute bottom-[10%] right-0 z-10 rounded-2xl border border-amber-300/25 bg-[#11100e]/95 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/50 sm:right-1 sm:px-5 sm:py-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg text-amber-300">✦</span>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/45 sm:text-[10px]">
                      Every Craving
                    </p>

                    <p className="mt-1 font-display text-sm font-bold text-white sm:text-base">
                      One Place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Favorites */}
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-3/4 -translate-x-1/2 rounded-full bg-amber-500/[0.035] blur-[100px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-300/80 sm:text-xs">
                Made for Your Cravings
              </p>

              <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
                Our{" "}
                <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  Favorites
                </span>
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-white/45">
                Explore our delicious selection and find your next favorite.
              </p>
            </div>

            <Link
              href="/menu"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition-colors hover:text-amber-100"
            >
              View Full Menu
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-amber-400/30" />

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/45 sm:text-xs">
                Explore Categories
              </p>

              <span className="h-px w-6 bg-amber-400/30" />
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {[
                { id: "all", label: "All Items", emoji: "✦" },
                ...categories,
              ].map((category) => {
                const isAll = category.id === "all";

                return (
                  <Link
                    key={category.id}
                    href={isAll ? "/menu" : `/menu?cat=${category.id}`}
                    className={`group/category relative inline-flex items-center gap-2 overflow-hidden rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-5 sm:py-3 sm:text-sm ${
                      isAll
                        ? "border-amber-300/80 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 text-[#171006] shadow-[0_0_22px_rgba(245,158,11,0.17)]"
                        : "border-white/10 bg-white/[0.025] text-white/65 hover:border-amber-400/40 hover:bg-amber-400/[0.06] hover:text-amber-200"
                    }`}
                  >
                    {isAll && (
                      <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/30 blur-md transition-all duration-700 group-hover/category:left-[120%]" />
                    )}

                    <span className="relative">{category.emoji}</span>
                    <span className="relative">{category.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Featured Products */}
          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} p={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-12 text-center">
              <p className="text-sm text-white/50">
                No featured products available right now.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Combos Banner */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-amber-400/15 bg-gradient-to-br from-[#1c170c] via-[#100e0b] to-[#080706] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-500/[0.12] blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-yellow-600/[0.07] blur-[100px]" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-300 sm:text-xs">
                More Flavor. More Value.
              </p>

              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Make It a{" "}
                <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  Golden Combo
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Bring your favorites together and enjoy a delicious combo
                made for every craving.
              </p>
            </div>

            <Link
              href="/menu?cat=combo"
              className="group relative inline-flex shrink-0 items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 px-7 py-4 text-sm font-bold text-[#171006] shadow-[0_0_25px_rgba(245,158,11,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]"
            >
              <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[120%]" />

              <span className="relative">Explore Combos</span>

              <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-white/[0.06] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-300 sm:text-xs">
              The Golden Standard
            </p>

            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Golden Bite?
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
              Great food, quality ingredients, and a little golden touch
              in every order.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "✦",
                title: "Fresh Ingredients",
                description:
                  "We focus on fresh ingredients and carefully prepared meals.",
              },
              {
                icon: "♨",
                title: "Made to Order",
                description:
                  "Every order is prepared with care for a delicious experience.",
              },
              {
                icon: "♡",
                title: "Made with Love",
                description:
                  "We put passion into every bite, from the first to the last.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/25 hover:bg-amber-400/[0.025]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-amber-400/20 bg-amber-400/[0.05] text-xl text-amber-300 transition-all duration-300 group-hover:border-amber-400/40 group-hover:bg-amber-400/[0.1] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.08)]">
                  {feature.icon}
                </span>

                <h3 className="mt-5 font-display text-xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/45">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}