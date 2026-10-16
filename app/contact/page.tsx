"use client";

import QrBox from "@/components/QrBox";
import { restaurant } from "@/lib/data";

export default function Contact() {
const wa = `https://wa.me/201009951597?text=${encodeURIComponent(
  "Hello, I would like to place an order from Golden Bite."
)}`;

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#080706] px-4 pb-20 pt-12 text-white sm:px-6 sm:pt-16 lg:px-8">
      {/* Premium Gold Ambient Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-amber-500/[0.10] blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[30rem] -z-10 h-96 w-96 rounded-full bg-yellow-600/[0.08] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-72 w-[80%] -translate-x-1/2 rounded-full bg-amber-400/[0.04] blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="relative mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-amber-400/[0.045] px-4 py-2 shadow-[0_0_30px_rgba(245,158,11,0.05)]">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-200 sm:text-xs">
              We're Here for You
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(245,158,11,0.13)]">
              Connect
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            Have a question or craving something delicious? We’re always happy
            to hear from you. Let’s make your next meal special.
          </p>

          <div className="mx-auto mt-7 flex max-w-xs items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-400/60" />
            <span className="text-sm text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
              ✦
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-400/60" />
          </div>
        </header>

        {/* Main Layout */}
        <div className="mt-10 grid items-stretch gap-6 lg:mt-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          {/* Left Column */}
          <div className="grid content-start gap-5 sm:gap-6">
            {/* Contact Actions */}
            <section className="group relative overflow-hidden rounded-3xl border border-amber-400/15 bg-gradient-to-br from-[#19150e] via-[#100e0b] to-[#0c0b09] p-5 shadow-[0_15px_50px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-amber-400/30 sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/[0.07] blur-3xl transition-all duration-500 group-hover:bg-amber-400/[0.12]"
              />

              <div className="relative flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-amber-300/20 bg-gradient-to-br from-amber-300/15 to-amber-600/[0.04] text-xl shadow-[0_0_25px_rgba(245,158,11,0.06)] sm:h-14 sm:w-14">
                  💬
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-300/80">
                    Say Hello
                  </p>
                  <h2 className="mt-1 text-xl font-bold sm:text-2xl">
                    Get in Touch
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-white/45 sm:text-sm">
                    We’re just one message away.
                  </p>
                </div>
              </div>

              <div className="relative mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className="group/wa inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-3 text-sm font-bold text-[#72efa1] transition-all duration-300 hover:border-[#25D366] hover:bg-[#25D366] hover:text-black hover:shadow-[0_5px_25px_rgba(37,211,102,0.15)]"
                >
                  <span className="text-lg">💬</span>
                  WhatsApp
                  <span className="transition-transform group-hover/wa:translate-x-1">
                    ↗
                  </span>
                </a>

                <a
                 href="https://www.facebook.com/share/19aBaGmivX/"
                  target="_blank"
                  rel="noreferrer"
                  className="group/msg inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-blue-400/25 bg-blue-500/[0.08] px-4 py-3 text-sm font-bold text-blue-300 transition-all duration-300 hover:border-blue-400 hover:bg-[#0084FF] hover:text-white hover:shadow-[0_5px_25px_rgba(0,132,255,0.15)]"
                >
                  <span className="text-lg">✉️</span>
                  Messenger
                  <span className="transition-transform group-hover/msg:translate-x-1">
                    ↗
                  </span>
                </a>

                <a
                     href="tel:+201009951597"
                  className="group/call col-span-1 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-amber-400/20 bg-amber-400/[0.045] px-4 py-3 text-sm font-bold text-amber-200 transition-all duration-300 hover:border-amber-300/50 hover:bg-amber-400/10 sm:col-span-2"
                >
                  <span className="text-lg">📞</span>
                  Call Us
                  <span className="text-amber-300/50 transition-transform group-hover/call:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </section>

            {/* Location & Hours */}
            <section className="group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-br from-[#17130e] to-[#0e0c09] p-5 transition-all duration-300 hover:border-amber-400/25 sm:p-7">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-amber-400/20 bg-amber-400/[0.07] text-xl sm:h-14 sm:w-14">
                  📍
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-300/75">
                    Visit Us
                  </p>
                  <h2 className="mt-1 text-xl font-bold sm:text-2xl">
                    Location & Hours
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div className="flex gap-4 border-t border-white/[0.08] pt-5">
                  <span className="mt-0.5 text-lg text-amber-300">⌖</span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300/80">
                      Our Address
                    </p>
                    <p className="mt-2 break-words text-sm leading-7 text-white/70">
                      {restaurant.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 border-t border-white/[0.08] pt-5">
                  <span className="mt-0.5 text-lg text-amber-300">◷</span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300/80">
                      Opening Hours
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/70">
                      {restaurant.hours}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* QR Menu Card */}
            <section className="group relative overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-br from-[#211a0d] via-[#14110b] to-[#0d0b08] p-5 shadow-[0_15px_50px_rgba(0,0,0,0.2)] sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -right-12 h-48 w-48 rounded-full bg-amber-400/[0.08] blur-3xl"
              />

              <div className="relative flex flex-col items-center gap-6 sm:flex-row">
                <div className="relative shrink-0 rounded-2xl bg-gradient-to-br from-amber-200 via-yellow-500 to-amber-700 p-[2px] shadow-[0_0_30px_rgba(245,158,11,0.12)]">
                  <div className="rounded-[14px] bg-white p-3">
                    <QrBox size={130} />
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-amber-300">
                    A Taste Away
                  </p>

                  <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
                    Explore Our{" "}
                    <span className="text-amber-300">Menu</span>
                  </h2>

                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/55 sm:mx-0">
                    Scan the QR code with your phone and discover something
                    delicious in seconds.
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.05] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-amber-200">
                    <span className="text-amber-300">✦</span>
                    Scan · Explore · Enjoy
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Map */}
          <section className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-3xl border border-amber-400/20 bg-[#100e0a] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:min-h-[480px] lg:min-h-full">
            <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl ring-1 ring-inset ring-white/[0.04]" />

            <div className="relative flex min-h-16 items-center justify-between gap-3 rounded-t-2xl border-b border-amber-400/15 bg-gradient-to-r from-[#211a0d] to-[#110e09] px-4 py-3 sm:px-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-amber-300/80">
                  Find Your Way
                </p>
                <h2 className="mt-1 text-base font-bold sm:text-lg">
                  Golden Bite Location
                </h2>
              </div>

              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-amber-400/20 bg-amber-400/[0.06] text-lg text-amber-200">
                📍
              </span>
            </div>

            <div className="relative min-h-[350px] flex-1 overflow-hidden rounded-b-2xl sm:min-h-[420px]">
              <iframe
                title="Golden Bite Location Map"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  restaurant.mapQuery
                )}&output=embed`}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="pointer-events-none absolute inset-0 border border-white/[0.04]" />
            </div>

            <div className="flex items-center justify-between gap-3 px-3 py-3">
              <p className="text-xs text-white/40">
                We look forward to welcoming you.
              </p>
              <span className="text-xs font-bold tracking-wider text-amber-300">
                GOLDEN BITE ✦
              </span>
            </div>
          </section>
        </div>

        {/* Bottom Signature */}
        <footer className="mt-14 text-center sm:mt-16">
          <div className="mx-auto flex max-w-xs items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-400/40" />
            <span className="text-sm text-amber-300">✦</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-400/40" />
          </div>

          <p className="mt-4 font-display text-sm font-bold tracking-[0.25em] text-amber-200">
            GOLDEN BITE
          </p>

          <p className="mt-2 text-xs text-white/40">
            Every Craving. One Place.
          </p>
        </footer>
      </div>
    </main>
  );
}

