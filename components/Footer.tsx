import Link from "next/link";
import QrBox from "./QrBox";
import { restaurant } from "@/lib/data";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "/contact" },
];

const WHATSAPP_URL = "https://wa.me/201009951597";
const MESSENGER_URL = "https://www.facebook.com/share/19aBaGmivX/";
const MENU_URL =
  typeof window !== "undefined"
    ? `${window.location.origin}/menu`
    : "/menu";
export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-[#d6ad60]/20 bg-[#080706] text-white">
      {/* Ambient Gold Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[min(90%,800px)] -translate-x-1/2 rounded-full bg-[#d6ad60]/[0.07] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-[#b88635]/[0.06] blur-[100px]"
      />

      {/* Decorative Top Line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d6ad60]/70 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <Link
              href="/"
              aria-label="Golden Bite Home"
              className="group inline-flex items-center gap-3"
            >
              {/* Premium Logo Mark */}
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#d6ad60]/40 bg-gradient-to-br from-[#d6ad60]/20 via-[#17130c] to-[#080706] shadow-[0_0_25px_rgba(214,173,96,0.08)] transition-all duration-500 group-hover:border-[#e9c77e]/80 group-hover:shadow-[0_0_30px_rgba(214,173,96,0.2)]">
                <span className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" />

                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  aria-hidden="true"
                  className="relative h-7 w-7 transition-transform duration-500 group-hover:scale-110"
                >
                  <path
                    d="M10 19H38L35 34H13L10 19Z"
                    stroke="#E9C77E"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 24H35M15 29H33"
                    stroke="#E9C77E"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 15C16 11 20 11 24 15C28 11 32 11 34 15"
                    stroke="#E9C77E"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M19 8L21 10M28 7L27 10"
                    stroke="#E9C77E"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <span className="flex flex-col">
                <span className="font-display text-2xl font-black tracking-[0.12em] text-white sm:text-[27px]">
                  GOLDEN
                  <span className="ml-1 text-[#e5bd70]">BITE</span>
                </span>

                <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.32em] text-[#d6ad60]/65">
                  Taste the Golden Standard
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/55">
              Every craving. One place. Discover your favorites, explore our
              menu, and make every bite count.
            </p>

            {/* Social / Contact Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="group inline-flex items-center gap-2 rounded-xl border border-[#d6ad60]/25 bg-white/[0.025] px-4 py-2.5 text-xs font-semibold text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d6ad60]/70 hover:bg-[#d6ad60]/[0.08] hover:text-[#f1d394] hover:shadow-[0_5px_25px_rgba(214,173,96,0.08)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4 text-[#d6ad60] transition-transform duration-300 group-hover:scale-110"
                >
                  <path d="M20.52 3.48A11.78 11.78 0 0 0 12.14 0C5.55 0 .19 5.36.19 11.95c0 2.11.55 4.17 1.59 5.99L.08 24l6.22-1.63a11.94 11.94 0 0 0 5.84 1.49h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.58-8.43ZM12.15 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.69.97.99-3.6-.23-.37a9.88 9.88 0 0 1-1.52-5.26c0-5.46 4.44-9.9 9.91-9.9a9.83 9.83 0 0 1 7.01 2.91 9.83 9.83 0 0 1 2.9 7.01c0 5.46-4.44 9.83-9.96 9.83Zm5.43-7.4c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.23 5.14 4.53.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
                </svg>

                WhatsApp
                <span className="text-[#d6ad60]/70">↗</span>
              </a>

              {/* Messenger */}
              <a
                href={MESSENGER_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on Messenger"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-2.5 text-xs font-semibold text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d6ad60]/50 hover:bg-[#d6ad60]/[0.06] hover:text-[#f1d394]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4 text-[#d6ad60] transition-transform duration-300 group-hover:scale-110"
                >
                  <path d="M12 2C6.48 2 2 6.15 2 11.27c0 2.91 1.48 5.48 3.79 7.19V22l3.46-1.9c.88.24 1.8.36 2.75.36 5.52 0 10-4.15 10-9.27S17.52 2 12 2Zm1.01 12.49-2.55-2.72-4.97 2.72 5.47-5.8 2.62 2.72 4.9-2.72-5.47 5.8Z" />
                </svg>

                Messenger
                <span className="text-[#d6ad60]/70">↗</span>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white">
              <span className="h-px w-6 bg-gradient-to-r from-[#d6ad60] to-transparent" />
              Contact Us
            </h3>

            <div className="space-y-5">
              {/* Phone */}
              <a
                href="tel:+201009951597"
                className="group flex min-w-0 items-start gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#d6ad60]/15 bg-[#d6ad60]/[0.05] text-[#d6ad60] transition-all duration-300 group-hover:border-[#d6ad60]/50 group-hover:bg-[#d6ad60]/[0.1]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      d="M5 4h4l2 5-2.5 1.5a15 15 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span className="min-w-0 pt-1">
                  <span className="block text-[10px] uppercase tracking-wider text-white/35">
                    Call Us
                  </span>
                  <span className="mt-1 block break-words text-sm text-white/70 transition-colors group-hover:text-[#e5bd70]">
                    01009951597
                  </span>
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${restaurant.email}`}
                className="group flex min-w-0 items-start gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#d6ad60]/15 bg-[#d6ad60]/[0.05] text-[#d6ad60] transition-all duration-300 group-hover:border-[#d6ad60]/50 group-hover:bg-[#d6ad60]/[0.1]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path
                      d="m4 7 8 6 8-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span className="min-w-0 pt-1">
                  <span className="block text-[10px] uppercase tracking-wider text-white/35">
                    Email Us
                  </span>
                  <span className="mt-1 block break-all text-sm text-white/70 transition-colors group-hover:text-[#e5bd70]">
                    {restaurant.email}
                  </span>
                </span>
              </a>

              {/* Address */}
              <div className="flex min-w-0 items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#d6ad60]/15 bg-[#d6ad60]/[0.05] text-[#d6ad60]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>

                <span className="min-w-0 pt-1">
                  <span className="block text-[10px] uppercase tracking-wider text-white/35">
                    Our Address
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-white/70">
                    {restaurant.address}
                  </span>
                </span>
              </div>

              {/* Opening Hours */}
              <div className="flex min-w-0 items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#d6ad60]/15 bg-[#d6ad60]/[0.05] text-[#d6ad60]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path
                      d="M12 7v5l3 2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span className="min-w-0 pt-1">
                  <span className="block text-[10px] uppercase tracking-wider text-white/35">
                    Opening Hours
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-white/70">
                    {restaurant.hours}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links + QR Code */}
          <div>
            <h3 className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white">
              <span className="h-px w-6 bg-gradient-to-r from-[#d6ad60] to-transparent" />
              Explore
            </h3>

            <nav
              aria-label="Footer navigation"
              className="mb-8 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1"
            >
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex w-fit items-center gap-2 py-1 text-sm text-white/55 transition-colors duration-300 hover:text-[#e5bd70]"
                >
                  <span className="h-1 w-1 rounded-full bg-[#d6ad60]/40 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#e5bd70]" />
                  {item.label}
                  <span className="translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </Link>
              ))}
            </nav>

            {/* QR Code Card */}
            <a
              href={MENU_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Golden Bite menu"
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[#d6ad60]/20 bg-gradient-to-br from-[#d6ad60]/[0.07] to-transparent p-4 transition-all duration-300 hover:border-[#d6ad60]/40 hover:shadow-[0_8px_35px_rgba(214,173,96,0.06)]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#d6ad60]/[0.08] blur-2xl transition-all duration-500 group-hover:bg-[#d6ad60]/[0.15]"
              />

              <div className="relative shrink-0 rounded-xl bg-white p-2 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                <QrBox />
              </div>

              <div className="relative min-w-0">
                <p className="text-sm font-bold text-white">
                  Scan & Discover
                </p>

                <p className="mt-1.5 text-xs leading-5 text-white/50">
                  Explore our menu from your phone.
                </p>

                <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#d6ad60]">
                  View Menu
                  <span>↗</span>
                </span>
              </div>
            </a>
          </div>

          {/* Google Maps */}
          <div>
            <h3 className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white">
              <span className="h-px w-6 bg-gradient-to-r from-[#d6ad60] to-transparent" />
              Find Us
            </h3>

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#11100d] p-1 transition-all duration-500 hover:border-[#d6ad60]/45 hover:shadow-[0_8px_35px_rgba(214,173,96,0.08)]">
              <iframe
                title="Golden Bite Restaurant Location"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-48 w-full rounded-xl border-0 grayscale transition-all duration-700 group-hover:grayscale-0 sm:h-44 lg:h-52"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  restaurant.mapQuery
                )}&output=embed`}
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-1 rounded-xl ring-1 ring-inset ring-white/[0.04]"
              />
            </div>

            <p className="mt-3 text-xs leading-5 text-white/40">
              We look forward to welcoming you.
            </p>
          </div>
        </div>

        {/* Brand Statement */}
        <div className="mt-14 border-t border-white/[0.07] pt-8 sm:mt-16 sm:pt-10">
          <p className="text-center font-display text-xl font-bold tracking-wide text-white/90 sm:text-2xl">
            Every Craving.
            <span className="ml-2 bg-gradient-to-r from-[#b88635] via-[#f5dfa1] to-[#b88635] bg-clip-text text-transparent">
              One Place.
            </span>
          </p>

          <p className="mt-3 text-center text-[10px] uppercase tracking-[0.25em] text-white/30 sm:text-xs sm:tracking-[0.35em]">
            Crafted for your cravings
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/[0.07] bg-black/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-center sm:flex-row sm:px-8 sm:text-left lg:px-10">
          <p className="text-xs leading-5 text-white/35">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white/65">
              {restaurant.name}
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            <Link
              href="/"
              className="transition-colors duration-300 hover:text-[#e5bd70]"
            >
              Home
            </Link>

            <span className="h-3 w-px bg-white/10" />

            <Link
              href="/menu"
              className="transition-colors duration-300 hover:text-[#e5bd70]"
            >
              Menu
            </Link>

            <span className="h-3 w-px bg-white/10" />

            <Link
              href="/contact"
              className="transition-colors duration-300 hover:text-[#e5bd70]"
            >
              Contact Us <span className="text-[#d6ad60]">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
