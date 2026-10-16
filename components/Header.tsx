// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useCart } from "@/lib/cart";
// import { restaurant } from "@/lib/data";

// const links = [["/", "الرئيسية"], ["/menu", "المنيو"], ["/contact", "تواصل معنا"]];
// export default function Header() {
//   const { count } = useCart();
//   const path = usePathname();
//   return (
//     <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur">
//       <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
//         <Link href="/" className="flex items-center gap-2">
//           <span className="text-3xl">🍔</span>
//           <span><span className="block font-display text-2xl font-bold leading-none">{restaurant.name}</span><span className="text-[11px] text-white/60">{restaurant.tagline}</span></span>
//         </Link>
//         <nav className="flex items-center gap-1 text-sm sm:gap-5 sm:text-base">
//           {links.map(([h, l]) => (
//             <Link key={h} href={h} className={`border-b-2 px-1 py-1 ${path === h ? "border-brand text-brand" : "border-transparent text-white/80 hover:text-white"}`}>{l}</Link>
//           ))}
//           <Link href="/cart" className="btn !px-4 !py-2 text-sm">🛒 السلة {count > 0 && <span className="rounded-full bg-black px-2 text-brand">{count}</span>}</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }


















"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart";
import { restaurant } from "@/lib/data";

const links = [
["/", "Home"],
["/menu", "Menu"],
["/contact", "Contact"],
];

function GoldenBiteLogo() {
return ( <Link
   href="/"
   aria-label="Golden Bite Home"
   className="group flex min-w-0 items-center gap-2.5"
 >
{/* Custom GB Logo */} <span className="relative grid h-12 w-12 shrink-0 place-items-center sm:h-14 sm:w-14"> <span className="absolute inset-1 rotate-45 rounded-xl border border-amber-400/50 bg-gradient-to-br from-amber-300/20 via-yellow-600/10 to-transparent transition-all duration-500 group-hover:rotate-[135deg] group-hover:border-amber-300 group-hover:shadow-[0_0_22px_rgba(245,158,11,0.3)]" />

    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative z-10 h-10 w-10 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)] transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12"
    >
      <defs>
        <linearGradient id="goldenBiteGold" x1="8" y1="4" x2="55" y2="60">
          <stop offset="0%" stopColor="#FFF1A6" />
          <stop offset="35%" stopColor="#FBBF24" />
          <stop offset="65%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#FFF0A0" />
        </linearGradient>
      </defs>

      <path
        d="M15 26C8 25 7 17 13 13C17 10 22 11 25 14C27 6 37 4 42 10C47 15 44 21 40 24"
        stroke="url(#goldenBiteGold)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      <path
        d="M12 31L22 24L35 22L43 16L40 28L32 35L23 38L18 47L12 49L16 39L10 41L12 31Z"
        stroke="url(#goldenBiteGold)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      <text
        x="19"
        y="54"
        fontSize="23"
        fontWeight="bold"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fill="url(#goldenBiteGold)"
      >
        GB
      </text>

      <path
        d="M48 9L49.5 13L53.5 14.5L49.5 16L48 20L46.5 16L42.5 14.5L46.5 13Z"
        fill="#FFE7A0"
      />
    </svg>
  </span>

  <span className="min-w-0">
    <span className="block whitespace-nowrap font-display text-lg font-extrabold leading-tight tracking-tight sm:text-2xl">
      <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
        Golden
      </span>{" "}
      <span className="text-white transition-colors duration-300 group-hover:text-amber-100">
        Bite
      </span>
    </span>

    <span className="mt-1 block whitespace-nowrap text-[7px] font-medium tracking-[0.18em] text-white/55 sm:text-[9px] sm:tracking-[0.23em]">
      EVERY CRAVING. ONE PLACE.
    </span>
  </span>
</Link>

);
}

export default function Header() {
const { count } = useCart();
const path = usePathname();
const [menuOpen, setMenuOpen] = useState(false);

const isActive = (href: string) => {
if (href === "/") return path === "/";
return path === href || path.startsWith(`${href}/`);
};

return (<header className="sticky top-0 z-50 overflow-visible border-b border-amber-400/50 bg-[#050403]/95 shadow-[0_4px_25px_rgba(245,158,11,0.12),0_8px_40px_rgba(245,158,11,0.08)] backdrop-blur-2xl">{/* Fine golden glow */} {/* Bright golden top glow */}
<div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-200 to-transparent shadow-[0_0_8px_2px_rgba(255,190,40,0.8)]" />

{/* Golden light reflection */}
<div className="pointer-events-none absolute -top-8 left-[15%] h-16 w-40 rounded-full bg-amber-400/15 blur-2xl" />

<div className="pointer-events-none absolute -top-8 right-[15%] h-16 w-40 rounded-full bg-yellow-500/10 blur-2xl" />

  <div className="pointer-events-none absolute -top-12 left-1/3 h-20 w-40 rounded-full bg-amber-500/10 blur-3xl" />

  <div className="relative mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
    <GoldenBiteLogo />

    {/* Desktop Navigation */}
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-2 md:flex lg:gap-5"
    >
      {links.map(([href, label]) => {
        const active = isActive(href);

        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`group relative rounded-lg px-3 py-3 text-sm font-semibold transition-colors duration-300 lg:px-4 ${
              active
                ? "text-amber-300"
                : "text-white/70 hover:text-amber-200"
            }`}
          >
            {label}

            <span
              className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500 via-yellow-200 to-amber-500 shadow-[0_0_10px_rgba(251,191,36,0.7)] transition-all duration-300 ${
                active
                  ? "w-7"
                  : "w-0 group-hover:w-7"
              }`}
            />
          </Link>
        );
      })}
    </nav>

    {/* Desktop Cart */}
    <Link
      href="/cart"
      aria-label={`Shopping cart${count > 0 ? `, ${count} items` : ""}`}
      className={`hidden items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 md:inline-flex ${
        path.startsWith("/cart")
          ? "border-amber-300 bg-amber-400/15 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.15)]"
          : "border-amber-400/40 bg-gradient-to-r from-amber-400/10 to-transparent text-white hover:border-amber-300 hover:bg-amber-400/10 hover:shadow-[0_0_22px_rgba(245,158,11,0.15)]"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M3 3H5L7.5 15.5H18L21 7H6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="20" r="1.2" />
        <circle cx="18" cy="20" r="1.2" />
      </svg>

      <span>Cart</span>

      {count > 0 && (
        <span className="grid min-h-6 min-w-6 place-items-center rounded-full bg-gradient-to-br from-amber-200 to-amber-500 px-1.5 text-xs font-extrabold text-black shadow-[0_0_10px_rgba(245,158,11,0.25)]">
          {count}
        </span>
      )}
    </Link>

    {/* Mobile Cart */}
    <div className="ml-auto flex shrink-0 items-center gap-2 md:hidden">
      <Link
        href="/cart"
        aria-label={`Shopping cart${count > 0 ? `, ${count} items` : ""}`}
        className="relative grid h-10 w-10 place-items-center rounded-full border border-amber-400/40 bg-amber-400/5 text-amber-300 transition-all hover:border-amber-300 hover:bg-amber-400/10"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M3 3H5L7.5 15.5H18L21 7H6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="20" r="1.2" />
          <circle cx="18" cy="20" r="1.2" />
        </svg>

        {count > 0 && (
          <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gradient-to-br from-amber-200 to-amber-500 px-1 text-[10px] font-extrabold text-black">
            {count}
          </span>
        )}
      </Link>

      {/* Hamburger */}
      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
        className="group grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-amber-400/50 hover:bg-amber-400/5"
      >
        <span className="flex w-5 flex-col gap-[5px]">
          <span
            className={`h-[2px] rounded-full bg-amber-300 transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : "w-5"
            }`}
          />
          <span
            className={`h-[2px] rounded-full bg-amber-300 transition-all duration-300 ${
              menuOpen ? "opacity-0" : "w-3.5 group-hover:w-5"
            }`}
          />
          <span
            className={`h-[2px] rounded-full bg-amber-300 transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : "w-4"
            }`}
          />
        </span>
      </button>
    </div>
  </div>

  {/* Mobile Navigation */}
  <div
    id="mobile-navigation"
    className={`grid overflow-hidden border-t border-amber-400/10 transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
      menuOpen
        ? "grid-rows-[1fr] opacity-100"
        : "pointer-events-none grid-rows-[0fr] opacity-0"
    }`}
    aria-hidden={!menuOpen}
  >
    <nav className="min-h-0 overflow-hidden">
      <div className="mx-4 mb-4 mt-3 rounded-2xl border border-amber-400/15 bg-gradient-to-br from-amber-400/[0.06] to-transparent p-2 shadow-[inset_0_1px_rgba(255,255,255,0.03)]">
        <div className="mb-2 flex items-center gap-2 px-3 py-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-400/40" />
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-amber-300/70">
            Explore Golden Bite
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-400/40" />
        </div>

        {links.map(([href, label]) => {
          const active = isActive(href);

          return (
            <Link
              key={href}
              href={href}
              tabIndex={menuOpen ? 0 : -1}
              aria-current={active ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
              className={`mb-1 flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 last:mb-0 ${
                active
                  ? "border border-amber-400/25 bg-amber-400/10 text-amber-200 shadow-[inset_0_0_18px_rgba(245,158,11,0.04)]"
                  : "border border-transparent text-white/75 hover:border-amber-400/15 hover:bg-white/[0.03] hover:text-amber-200"
              }`}
            >
              <span>{label}</span>
              <span
                className={`text-lg transition-transform duration-200 ${
                  active
                    ? "translate-x-0 text-amber-300"
                    : "-translate-x-1 text-white/30"
                }`}
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          );
        })}

        <div className="mt-3 border-t border-white/[0.07] px-4 py-3 text-center">
          <p className="text-[10px] tracking-[0.2em] text-white/40">
            EVERY CRAVING. ONE PLACE.
          </p>
        </div>
      </div>
    </nav>
  </div>

  {/* Bottom accent */}
{/* Glowing golden bottom edge */}
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-300 to-transparent shadow-[0_0_6px_2px_rgba(255,190,40,0.65)]" /></header>

);
}
