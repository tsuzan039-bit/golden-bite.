"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useCart, unitPrice } from "@/lib/cart";
import { money, restaurant } from "@/lib/data";

export default function CartPage() {
const { items, total, setQty, remove, clear } = useCart();

const itemCount = items.reduce((sum, item) => sum + item.qty, 0);
const deliveryFee = restaurant.deliveryFee;
const grandTotal = total + deliveryFee;

if (items.length === 0) {
return ( <main className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#080808] px-4 py-20 text-white"> <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4a84f]/[0.09] blur-[120px]" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative w-full max-w-xl text-center"
    >
      <div className="absolute -inset-px rounded-[32px] bg-gradient-to-br from-[#f8e6a4]/50 via-[#a87926]/10 to-[#f8e6a4]/30 blur-sm" />

      <div className="relative overflow-hidden rounded-[31px] border border-[#c9a45b]/30 bg-gradient-to-b from-[#17140e] via-[#0e0e0d] to-[#090909] px-7 py-14 shadow-[0_0_80px_rgba(212,168,79,0.08)] sm:px-14 sm:py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ffe9a6] to-transparent" />

        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#d4af63]/50 bg-gradient-to-br from-[#f7e7b0]/15 via-[#b58a3b]/5 to-transparent shadow-[0_0_45px_rgba(212,168,79,0.15),inset_0_0_25px_rgba(212,168,79,0.08)]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-11 w-11 text-[#e6c77d]"
            stroke="currentColor"
            strokeWidth="1.2"
            aria-hidden="true"
          >
            <path
              d="M3 3h2l2.4 11.4a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L21 8H6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="20" r="1.2" />
            <circle cx="18" cy="20" r="1.2" />
          </svg>
        </div>

        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.5em] text-[#d5b46b] sm:text-xs">
          Golden Bite Exclusive
        </p>

        <h1 className="bg-gradient-to-r from-[#fff2c5] via-[#d9b45d] to-[#fff0b8] bg-clip-text font-display text-4xl font-medium tracking-wide text-transparent sm:text-5xl">
          Your Cart Is Empty
        </h1>

        <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-white/50 sm:text-base">
          Something extraordinary is waiting for you. Discover your next
          favorite and make it yours.
        </p>

        <Link
          href="/menu"
          className="group relative mt-9 inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#e4c675]/70 bg-gradient-to-r from-[#a87927] via-[#f3d98c] to-[#b78b37] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.18em] text-[#171006] shadow-[0_0_30px_rgba(212,168,79,0.22)] transition duration-500 hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(212,168,79,0.4)]"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          <span className="relative">Explore Our Menu</span>
          <span className="relative text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  </main>
);

}

return ( <main className="relative min-h-screen overflow-hidden bg-[#080808] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
{/* Luxury background lighting */} <div className="pointer-events-none absolute -left-64 top-20 h-[500px] w-[500px] rounded-full bg-[#c99b42]/[0.07] blur-[150px]" /> <div className="pointer-events-none absolute -right-64 top-[35%] h-[550px] w-[550px] rounded-full bg-[#b68a38]/[0.06] blur-[150px]" /> <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#e3c576]/40 to-transparent" />

  <div className="relative mx-auto max-w-7xl">
    {/* Header */}
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-10 border-b border-[#c8a45a]/20 pb-8 sm:mb-14 sm:pb-10"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#e9c875]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#d8b96d] sm:text-xs">
          The Golden Experience
        </span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#e9c875]" />
      </div>

      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <h1 className="bg-gradient-to-r from-[#fff5d1] via-[#dfbd6b] to-[#a87b2d] bg-clip-text font-display text-5xl font-medium tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            Your Cart<span className="text-[#e2c16f]">.</span>
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-6 text-white/45 sm:text-base">
            Every detail matters. Review your selection before we prepare
            something exceptional.
          </p>
        </div>

        <div className="flex w-fit items-center gap-3 rounded-full border border-[#c8a45a]/30 bg-gradient-to-r from-[#c8a45a]/[0.09] to-transparent px-5 py-3 shadow-[0_0_25px_rgba(212,168,79,0.04)]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9b96d]/40 bg-[#d9b96d]/10 text-sm text-[#f0d58a]">
            {itemCount}
          </span>

          <span className="text-xs font-medium tracking-wide text-white/75">
            {itemCount === 1 ? "Selected Item" : "Selected Items"}
          </span>
        </div>
      </div>
    </motion.header>

    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_370px] xl:gap-10">
      {/* Cart items */}
      <section className="space-y-5">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
            Your Selection
          </h2>

          <button
            type="button"
            onClick={() => clear()}
            className="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40 transition hover:text-[#f0c96d] sm:text-xs"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 transition-transform group-hover:rotate-12"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path
                d="M4 7h16M10 11v6m4-6v6M6 7l1 14h10l1-14M9 7V4h6v3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Clear All
          </button>
        </div>

        {items.map((item, index) => {
          const product = item.product;

          return (
            <motion.article
              key={item.key}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative rounded-2xl p-px transition duration-500 hover:shadow-[0_0_35px_rgba(212,168,79,0.10)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e9cd83]/55 via-[#8d672a]/15 to-[#d4af61]/30 opacity-70 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-col gap-5 overflow-hidden rounded-[15px] bg-gradient-to-br from-[#191711] via-[#10100f] to-[#0b0b0a] p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-5">
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#f2d68c]/40 to-transparent" />

                {/* Product image */}
                <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl border border-[#c9a45b]/25 bg-gradient-to-br from-[#302819] via-[#18150f] to-[#0c0c0b] sm:h-32 sm:w-32">
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-[#f6dc98]/10 via-transparent to-black/30" />

                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain p-2 transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-5xl drop-shadow-[0_0_15px_rgba(218,176,83,0.2)]">
                      {product.emoji || "🍽️"}
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-0 z-10 rounded-xl border border-[#e8cc83]/10" />
                </div>

                {/* Product details */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.3em] text-[#d6b567]">
                        Golden Bite Selection
                      </p>

                      <h3 className="font-display text-xl font-medium leading-snug text-[#fff3d1] transition-colors group-hover:text-[#f4d68b] sm:text-2xl">
                        {product.name}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => remove(item.key)}
                      aria-label={`Remove ${product.name}`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/40 transition duration-300 hover:rotate-90 hover:border-red-400/40 hover:bg-red-400/10 hover:text-red-300"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 6l12 12M18 6 6 18"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {item.addons && item.addons.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.addons.map((addon, addonIndex) => (
                        <span
                          key={
                            typeof addon === "string"
                              ? addon
                              : (addon as { id?: string }).id ??
                                `${item.key}-addon-${addonIndex}`
                          }
                          className="rounded-full border border-[#c8a45a]/20 bg-[#c8a45a]/[0.06] px-3 py-1 text-[10px] text-[#d9c89e]/75"
                        >
                          {typeof addon === "string"
                            ? addon
                            : (addon as { name: string }).name}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                    {/* Quantity controls */}
                    <div className="flex items-center rounded-full border border-[#c9a45b]/35 bg-black/40 p-1 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
                      <button
                        type="button"
                        onClick={() => setQty(item.key, item.qty - 1)}
                        aria-label={`Decrease ${product.name} quantity`}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-[#e0c477] transition hover:bg-[#d6b568]/15 hover:text-[#fff0b8]"
                      >
                        −
                      </button>

                      <span className="min-w-9 text-center text-sm font-semibold tabular-nums text-white">
                        {item.qty}
                      </span>

                      <button
                        type="button"
                        onClick={() => setQty(item.key, item.qty + 1)}
                        aria-label={`Increase ${product.name} quantity`}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#f3dc9b] via-[#c6a14f] to-[#91651e] text-lg font-medium text-[#171006] shadow-[0_0_12px_rgba(212,168,79,0.15)] transition hover:shadow-[0_0_22px_rgba(212,168,79,0.4)]"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-white/35">
                        Item Total
                      </p>

                      <p className="bg-gradient-to-r from-[#fff1bd] via-[#dabb66] to-[#f5dfa0] bg-clip-text text-lg font-semibold tabular-nums text-transparent">
                        {money(unitPrice(item) * item.qty)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}

        <Link
          href="/menu"
          className="group inline-flex items-center gap-3 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45 transition hover:text-[#e7c779]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c8a45a]/25 transition duration-300 group-hover:border-[#e7c779]/60 group-hover:bg-[#c8a45a]/10">
            ←
          </span>
          Continue Exploring
        </Link>
      </section>

      {/* Order summary */}
      <motion.aside
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative lg:sticky lg:top-8"
      >
        <div className="absolute -inset-px rounded-[25px] bg-gradient-to-br from-[#f4dc99]/70 via-[#8c6729]/20 to-[#d8b765]/50 blur-[2px]" />

        <div className="relative overflow-hidden rounded-3xl border border-[#c8a45a]/40 bg-gradient-to-b from-[#1a1710] via-[#10100e] to-[#090909] p-6 shadow-[0_0_60px_rgba(212,168,79,0.09)] sm:p-7">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#d9b45d]/[0.10] blur-[70px]" />
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#ffe7a0] to-transparent" />

          <div className="relative">
            <div className="mb-7">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#d9b96d]">
                Your Order
              </p>

              <h2 className="bg-gradient-to-r from-[#fff1c4] via-[#d7b45e] to-[#f8e8b1] bg-clip-text font-display text-3xl font-medium text-transparent">
                Summary
              </h2>

              <p className="mt-2 text-xs text-white/40">
                A little luxury, prepared just for you.
              </p>
            </div>

            <div className="space-y-5 border-b border-[#c8a45a]/20 pb-6">
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-white/50">Subtotal</span>
                <span className="font-medium tabular-nums text-white/90">
                  {money(total)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 text-sm">
                <div>
                  <span className="text-white/50">Delivery</span>
                  <p className="mt-1 text-[10px] text-white/30">
                    Carefully delivered to you
                  </p>
                </div>

                <span className="font-medium tabular-nums text-white/90">
                  {money(deliveryFee)}
                </span>
              </div>
            </div>

            <div className="relative my-6 overflow-hidden rounded-2xl border border-[#d7b663]/35 bg-gradient-to-br from-[#d7b663]/[0.12] via-[#1b170d] to-[#d7b663]/[0.04] p-5 shadow-[inset_0_0_25px_rgba(212,168,79,0.04)]">
              <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#e9cc7f]/[0.06] to-transparent" />

              <p className="relative mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#d6b567]">
                Total Amount
              </p>

              <div className="relative flex flex-wrap items-baseline gap-2">
                <span className="bg-gradient-to-r from-[#fff3c5] via-[#dfbd68] to-[#fff0b2] bg-clip-text font-display text-4xl font-semibold tracking-tight text-transparent sm:text-[2.6rem]">
                  {money(grandTotal)}
                </span>
              </div>

              <p className="relative mt-2 text-[10px] text-white/35">
                Inclusive of delivery charges
              </p>
            </div>

            <Link
              href="/checkout"
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-[#f8e5a5]/80 bg-gradient-to-r from-[#9b7027] via-[#f4dc98] to-[#b78b35] px-5 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-[#171006] shadow-[0_0_25px_rgba(212,168,79,0.18)] transition duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,168,79,0.4)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              <span className="relative">Proceed to Checkout</span>
              <span className="relative text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-white/35">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 text-[#d8b96d]"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <rect x="5" y="10" width="14" height="11" rx="2" />
                <path
                  d="M8 10V7a4 4 0 0 1 8 0v3"
                  strokeLinecap="round"
                />
              </svg>

              <span>Secure &amp; seamless checkout</span>
            </div>

            <div className="mt-6 border-t border-[#c8a45a]/15 pt-5 text-center">
              <span className="font-display text-lg italic tracking-wide text-[#d8bc79]/65">
                Golden Bite
              </span>

              <p className="mt-1 text-[8px] uppercase tracking-[0.35em] text-white/25">
                Taste the Extraordinary
              </p>
            </div>
          </div>
        </div>
      </motion.aside>
    </div>
  </div>
</main>

);
}
