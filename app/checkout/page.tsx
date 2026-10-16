"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useCart, unitPrice } from "@/lib/cart";
import { money, restaurant } from "@/lib/data";

export default function Checkout() {
  const { items, total, clear } = useCart();

  const [f, setF] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
    pay: "Cash on Delivery",
  });

  const [sent, setSent] = useState(false);

  const set =
    (k: keyof typeof f) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => setF({ ...f, [k]: e.target.value });

  const grandTotal = total + restaurant.deliveryFee;

  if (sent)
    return (
      <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#080807] px-4 py-20 text-white">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6ad51]/15 blur-[130px]" />

        <div className="relative w-full max-w-xl rounded-[30px] bg-gradient-to-br from-[#f9e6a2] via-[#9c742b] to-[#e6c775] p-px shadow-[0_0_70px_rgba(219,178,80,0.2)]">
          <div className="relative overflow-hidden rounded-[29px] bg-gradient-to-b from-[#19160f] via-[#0e0e0c] to-[#080808] px-7 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fff1b8] to-transparent" />

            <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-[#e6c878]/60 bg-gradient-to-br from-[#e6c878]/20 to-transparent text-5xl shadow-[0_0_40px_rgba(230,200,120,0.15),inset_0_0_25px_rgba(230,200,120,0.08)]">
              ✓
            </div>

            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.45em] text-[#e4c579]">
              Golden Bite Exclusive
            </p>

            <h1 className="mt-4 font-display text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#fff4cb] via-[#dabb69] to-[#fff0b6] sm:text-5xl">
              Order Submitted!
            </h1>

            <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-white/55">
              Thank you for choosing us. We’ll contact you on WhatsApp to
              confirm your order and prepare your experience.
            </p>

            <Link
              href="/"
              className="group relative mt-8 inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#f8e7ac] bg-gradient-to-r from-[#a77926] via-[#f2d88f] to-[#b78b36] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.18em] text-[#171006] shadow-[0_0_30px_rgba(219,178,80,0.2)] transition duration-500 hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(219,178,80,0.4)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              <span className="relative">Back to Home</span>
              <span className="relative text-lg">→</span>
            </Link>
          </div>
        </div>
      </main>
    );

  if (items.length === 0)
    return (
      <main className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-[#080807] px-4 py-20 text-center text-white">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6ad51]/10 blur-[110px]" />

        <div className="relative">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-[#d6b567]/40 bg-gradient-to-br from-[#d6b567]/15 to-transparent text-5xl shadow-[0_0_35px_rgba(214,181,103,0.12)]">
            🛒
          </div>

          <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.4em] text-[#d8b96d]">
            Golden Bite
          </p>

          <h1 className="mt-3 font-display text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#fff1bd] via-[#dabb66] to-[#fff0b2]">
            Your Cart Is Empty
          </h1>

          <p className="mt-4 text-sm text-white/50">
            Add something delicious before proceeding to checkout.
          </p>

          <Link
            href="/menu"
            className="group relative mt-7 inline-flex items-center gap-3 overflow-hidden rounded-full border border-[#f0d58a]/70 bg-gradient-to-r from-[#9c7027] via-[#f2d88f] to-[#b78b35] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.15em] text-[#171006] shadow-[0_0_25px_rgba(212,168,79,0.15)] transition duration-500 hover:shadow-[0_0_40px_rgba(212,168,79,0.35)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            <span className="relative">Explore Menu</span>
            <span className="relative text-lg">→</span>
          </Link>
        </div>
      </main>
    );

  const message = () =>
    [
      `New Order from ${restaurant.name}`,
      "",
      ...items.map(
        (i) =>
          `• ${i.qty}× ${i.product.name}${
            i.addons.length
              ? ` (${i.addons.map((a) => a.name).join(", ")})`
              : ""
          } = ${money(unitPrice(i) * i.qty)}`
      ),
      "",
      `Delivery Fee: ${money(restaurant.deliveryFee)}`,
      `Total: ${money(grandTotal)}`,
      "",
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      `Address: ${f.address}`,
      `Payment Method: ${f.pay}`,
      f.notes ? `Notes: ${f.notes}` : "",
    ]
      .filter((l) => l !== "")
      .join("\n");

  const submit = (e: FormEvent) => {
    e.preventDefault();

    window.open(
      `https://wa.me/${restaurant.phone}?text=${encodeURIComponent(message())}`,
      "_blank"
    );

    clear();
    setSent(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080807] px-4 pb-20 pt-10 text-white sm:px-6 sm:pt-14 lg:px-8">
      {/* Premium ambient lighting */}
      <div className="pointer-events-none absolute -left-52 top-20 h-[500px] w-[500px] rounded-full bg-[#c89a3d]/[0.10] blur-[140px]" />
      <div className="pointer-events-none absolute -right-52 top-[35%] h-[550px] w-[550px] rounded-full bg-[#e4bf64]/[0.08] blur-[150px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#f5d98e]/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Page heading */}
        <header className="mb-10 border-b border-[#c8a45a]/25 pb-8 sm:mb-14 sm:pb-10">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#f2d68c]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-[#dfbf70] sm:text-xs">
              The Golden Experience
            </p>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#f2d68c]" />
          </div>

          <h1 className="font-display text-5xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#fff4cc] via-[#d9b45e] to-[#f8e8b0] sm:text-6xl lg:text-7xl">
            Checkout<span className="text-[#e4c474]">.</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            You’re one step away from something extraordinary. Complete your
            details and let us take care of the rest.
          </p>
        </header>

        <form
          onSubmit={submit}
          className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_410px] xl:gap-10"
        >
          {/* Delivery Information */}
          <section className="min-w-0">
            <div className="mb-6 flex items-center gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#d8b768]/50 bg-gradient-to-br from-[#d8b768]/20 to-transparent text-lg text-[#f1d58b] shadow-[0_0_25px_rgba(216,183,104,0.08)]">
                01
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-[#fff0bf] sm:text-3xl">
                  Delivery Details
                </h2>
                <p className="mt-1 text-xs text-white/40">
                  Where should we deliver your order?
                </p>
              </div>
            </div>

            <div className="group relative rounded-[25px] p-px shadow-[0_0_35px_rgba(212,168,79,0.05)] transition duration-500 hover:shadow-[0_0_45px_rgba(212,168,79,0.10)]">
              <div className="absolute inset-0 rounded-[25px] bg-gradient-to-br from-[#f1d58c]/60 via-[#765522]/20 to-[#d3ae5c]/40" />

              <div className="relative grid gap-6 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#17150f] via-[#10100e] to-[#0a0a09] p-5 sm:p-8">
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#f8e6a4]/70 to-transparent" />
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#d6ad51]/[0.07] blur-[80px]" />

                <div className="relative">
                  <label
                    htmlFor="customer-name"
                    className="mb-2.5 block text-sm font-medium text-white/80"
                  >
                    Full Name <span className="text-[#edcb75]">*</span>
                  </label>
                  <input
                    id="customer-name"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-[#c8a45a]/20 bg-[#090908]/80 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-white/30 hover:border-[#c8a45a]/40 focus:border-[#e6c779]/80 focus:ring-2 focus:ring-[#d4af61]/10"
                    placeholder="Enter your full name"
                    value={f.name}
                    onChange={set("name")}
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="customer-phone"
                    className="mb-2.5 block text-sm font-medium text-white/80"
                  >
                    Phone Number <span className="text-[#edcb75]">*</span>
                  </label>
                  <input
                    id="customer-phone"
                    required
                    type="tel"
                    autoComplete="tel"
                    className="w-full rounded-xl border border-[#c8a45a]/20 bg-[#090908]/80 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-white/30 hover:border-[#c8a45a]/40 focus:border-[#e6c779]/80 focus:ring-2 focus:ring-[#d4af61]/10"
                    placeholder="Enter your phone number"
                    value={f.phone}
                    onChange={set("phone")}
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="customer-address"
                    className="mb-2.5 block text-sm font-medium text-white/80"
                  >
                    Delivery Address <span className="text-[#edcb75]">*</span>
                  </label>
                  <textarea
                    id="customer-address"
                    required
                    autoComplete="street-address"
                    rows={3}
                    className="w-full resize-y rounded-xl border border-[#c8a45a]/20 bg-[#090908]/80 px-4 py-3.5 text-sm leading-6 text-white outline-none transition duration-300 placeholder:text-white/30 hover:border-[#c8a45a]/40 focus:border-[#e6c779]/80 focus:ring-2 focus:ring-[#d4af61]/10"
                    placeholder="Street, building, apartment, and nearby landmarks"
                    value={f.address}
                    onChange={set("address")}
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="payment-method"
                    className="mb-2.5 block text-sm font-medium text-white/80"
                  >
                    Payment Method
                  </label>
                  <select
                    id="payment-method"
                    className="w-full rounded-xl border border-[#c8a45a]/25 bg-[#090908] px-4 py-3.5 text-sm text-white outline-none transition duration-300 hover:border-[#c8a45a]/45 focus:border-[#e6c779]/80 focus:ring-2 focus:ring-[#d4af61]/10"
                    value={f.pay}
                    onChange={set("pay")}
                  >
                    <option value="Cash on Delivery">Cash on Delivery</option>
                    <option value="Vodafone Cash">Vodafone Cash</option>
                  </select>
                </div>

                <div className="relative">
                  <label
                    htmlFor="order-notes"
                    className="mb-2.5 block text-sm font-medium text-white/80"
                  >
                    Order Notes{" "}
                    <span className="text-xs text-white/35">(Optional)</span>
                  </label>
                  <textarea
                    id="order-notes"
                    rows={3}
                    className="w-full resize-y rounded-xl border border-[#c8a45a]/20 bg-[#090908]/80 px-4 py-3.5 text-sm leading-6 text-white outline-none transition duration-300 placeholder:text-white/30 hover:border-[#c8a45a]/40 focus:border-[#e6c779]/80 focus:ring-2 focus:ring-[#d4af61]/10"
                    placeholder="Any special instructions for your order?"
                    value={f.notes}
                    onChange={set("notes")}
                  />
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-[#c8a45a]/15 bg-[#d4af61]/[0.04] p-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#e1c271]"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M12 3 20 7v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m9 12 2 2 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-xs leading-6 text-white/45">
                    Your details will be included in your WhatsApp order
                    message so we can confirm your delivery.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Order Summary */}
          <aside className="relative min-w-0 lg:sticky lg:top-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#d8b768]/50 bg-gradient-to-br from-[#d8b768]/20 to-transparent text-lg text-[#f1d58b] shadow-[0_0_25px_rgba(216,183,104,0.08)]">
                02
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-[#fff0bf] sm:text-3xl">
                  Your Order
                </h2>
                <p className="mt-1 text-xs text-white/40">
                  Carefully selected for you.
                </p>
              </div>
            </div>

            <div className="relative rounded-[25px] p-px shadow-[0_0_55px_rgba(212,168,79,0.10)]">
              <div className="absolute inset-0 rounded-[25px] bg-gradient-to-br from-[#fff0b2] via-[#9c742c] to-[#e5c36e]" />

              <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-b from-[#1a1710] via-[#10100e] to-[#090909]">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="pointer-events-none absolute -right-20 top-10 h-52 w-52 rounded-full bg-[#d8b45f]/[0.10] blur-[75px]" />

                <div className="relative border-b border-[#c8a45a]/25 p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#dfbf70]">
                    Golden Bite Exclusive
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#fff2c4] via-[#dabb68] to-[#f7e4a8]">
                    Order Summary
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-white/40">
                    A little luxury, prepared just for you.
                  </p>
                </div>

                <div className="relative p-5 sm:p-6">
                  <ul className="grid gap-5">
                    {items.map((i) => (
                      <li
                        key={i.key}
                        className="flex items-start justify-between gap-3"
                      >
                        <div className="flex min-w-0 gap-3">
                          <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[#c8a45a]/30 bg-gradient-to-br from-[#c8a45a]/15 to-[#11100d] text-2xl shadow-[inset_0_0_15px_rgba(212,168,79,0.04)]">
                            {i.product.emoji || "🍽️"}
                            <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full border border-[#f1d58a]/70 bg-gradient-to-br from-[#f4dfa0] to-[#b88a35] px-1 text-[9px] font-extrabold text-[#171006]">
                              {i.qty}
                            </span>
                          </div>

                          <div className="min-w-0 pt-0.5">
                            <p className="text-sm font-semibold leading-5 text-[#fff0c2]">
                              {i.product.name}
                            </p>

                            {i.addons.length > 0 && (
                              <p className="mt-1.5 text-[11px] leading-5 text-white/40">
                                Extras: {i.addons.map((a) => a.name).join(", ")}
                              </p>
                            )}
                          </div>
                        </div>

                        <span className="shrink-0 pt-0.5 text-sm font-bold tabular-nums text-transparent bg-clip-text bg-gradient-to-r from-[#fff0b6] to-[#c69b45]">
                          {money(unitPrice(i) * i.qty)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#c8a45a]/40 to-transparent" />

                  <div className="grid gap-4 text-sm">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-white/50">Subtotal</span>
                      <span className="font-medium tabular-nums text-white/85">
                        {money(total)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-white/50">Delivery Fee</span>
                      <span className="font-medium tabular-nums text-white/85">
                        {money(restaurant.deliveryFee)}
                      </span>
                    </div>
                  </div>

                  <div className="relative mt-6 overflow-hidden rounded-2xl border border-[#d7b663]/40 bg-gradient-to-br from-[#d7b663]/[0.13] via-[#211b0e] to-[#d7b663]/[0.04] p-5 shadow-[inset_0_0_30px_rgba(212,168,79,0.04)]">
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-2/3 bg-gradient-to-l from-[#f4d989]/[0.08] to-transparent" />

                    <p className="relative text-[9px] font-bold uppercase tracking-[0.3em] text-[#dfbf70]">
                      Total Amount
                    </p>

                    <p className="relative mt-3 break-words font-display text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#fff4cb] via-[#e3c16e] to-[#fff0b6] sm:text-[2.6rem]">
                      {money(grandTotal)}
                    </p>

                    <p className="relative mt-2 text-[10px] text-white/40">
                      Including delivery charges
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="group relative mt-6 flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-[#fff0b6]/80 bg-gradient-to-r from-[#93651f] via-[#f5dd96] to-[#b58a34] px-4 py-4 text-center text-xs font-extrabold uppercase tracking-[0.12em] text-[#171006] shadow-[0_0_25px_rgba(212,168,79,0.20)] transition duration-500 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(212,168,79,0.42)] sm:text-sm sm:tracking-[0.15em]"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                    <span className="relative">Place Order via WhatsApp</span>
                    <span className="relative text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>

                  <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-white/40">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 text-[#d8b96d]"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="5" y="10" width="14" height="11" rx="2" />
                      <path
                        d="M8 10V7a4 4 0 0 1 8 0v3"
                        strokeLinecap="round"
                      />
                    </svg>
                    Secure &amp; seamless checkout
                  </div>

                  <div className="mt-6 border-t border-[#c8a45a]/20 pt-5 text-center">
                    <span className="font-display text-xl italic tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fff0b6] via-[#d8b45f] to-[#f5dfa0]">
                      Golden Bite
                    </span>
                    <p className="mt-1 text-[8px] uppercase tracking-[0.35em] text-white/25">
                      Taste the Extraordinary
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/cart"
              className="group mt-5 flex items-center justify-center gap-3 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-[#edcf7b]"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              Back to Cart
            </Link>
          </aside>
        </form>
      </div>
    </main>
  );
}
