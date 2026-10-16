// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { motion, useReducedMotion } from "motion/react";
// import { Product, money } from "@/lib/data";
// import { useCart } from "@/lib/cart";

// // export function Thumb({
// // p,
// // className = "h-48 min-[480px]:h-56 sm:h-60 lg:h-52 xl:h-56",
// // }: {
// // p: Product;
// // className?: string;
// // }) {
// // return (
// // <div
// // className={`product-thumb group/thumb relative grid w-full min-w-0 place-items-center overflow-hidden ${className}`}
// // >
// // {p.image ? ( <img
// //        src={p.image}
// //        alt={p.name}
// //        loading="lazy"
// //        decoding="async"
// //        className="block h-full w-full object-contain object-center transition-transform duration-300 group-hover/thumb:scale-[1.01]"
// //      />
// // ) : ( <span className="relative z-[1] text-7xl drop-shadow-lg sm:text-8xl">
// // {p.emoji} </span>
// // )}

// //   <div className="product-image-shine pointer-events-none absolute inset-0 z-[1]" />

// //   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
// // </div>

// // );
// // }

// export function Thumb({
//   p,
//   className = "aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3]",
// }: {
//   p: Product;
//   className?: string;
// }) {
//   return (
//     <div
//       className={`product-thumb group/thumb relative w-full min-w-0 overflow-hidden ${className}`}
//     >
//       {p.image ? (
//         <img
//           src={p.image}
//           alt={p.name}
//           loading="lazy"
//           decoding="async"
//           className="absolute inset-0 block h-full w-full object-cover transition-transform duration-300 group-hover/thumb:scale-[1.03]"
//           style={{ objectPosition: p.focus ?? "center" }}
//         />
//       ) : (
//         <span className="absolute inset-0 grid place-items-center text-7xl drop-shadow-lg sm:text-8xl">
//           {p.emoji}
//         </span>
//       )}

//       <div className="product-image-shine pointer-events-none absolute inset-0 z-[1]" />
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
//     </div>
//   );
// }
// export default function ProductCard({ p }: { p: Product }) {
// const { add } = useCart();
// const [done, setDone] = useState(false);
// const reduceMotion = useReducedMotion();

// const handleAdd = () => {
// add(p);
// setDone(true);
// setTimeout(() => setDone(false), 1200);
// };

// return (
// <>
// <motion.article
// initial={
// reduceMotion
// ? false
// : { opacity: 0, y: 35, scale: 0.97 }
// }
// whileInView={{ opacity: 1, y: 0, scale: 1 }}
// viewport={{ once: true, amount: 0.15 }}
// transition={{
// duration: reduceMotion ? 0 : 0.65,
// ease: [0.22, 1, 0.36, 1],
// }}
// whileHover={reduceMotion ? undefined : { y: -7 }}
// className="gold-product-card group relative flex flex-col"
// >
// {/* Metallic gold frame */} <div className="gold-card-border pointer-events-none absolute -inset-px rounded-[19px]" />

//     {/* Animated light reflection */}
//     <div className="gold-card-glow pointer-events-none absolute inset-0 rounded-[18px]" />

//     {p.badge && (
//       <span className="product-badge absolute left-3 top-3 z-20 rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-wider">
//         <span className="relative z-[1]">{p.badge}</span>
//       </span>
//     )}

//     <Link
//       href={`/menu/${p.id}`}
//       aria-label={`View ${p.name} details`}
//       className="relative z-[1] block overflow-hidden rounded-t-[17px]"
//     >
//       <Thumb p={p} />
//     </Link>

//     <div className="product-card-content relative z-[1] flex flex-1 flex-col gap-2.5 rounded-b-[17px] p-4 sm:p-5">
//       <Link
//         href={`/menu/${p.id}`}
//         className="line-clamp-1 font-display text-lg font-extrabold text-white transition-colors duration-300 hover:text-[#ffd978]"
//       >
//         {p.name}
//       </Link>

//       <p className="line-clamp-2 min-h-10 flex-1 text-xs leading-relaxed text-white/60">
//         {p.desc}
//       </p>

//       <div className="gold-divider my-1" />

//       <div className="flex items-center justify-between gap-3">
//         <p className="gold-price text-lg font-black">
//           {money(p.price)}
//         </p>

//         <Link
//           href={`/menu/${p.id}`}
//           className="product-details-link text-xs font-semibold transition-colors"
//         >
//           View Details <span aria-hidden="true">→</span>
//         </Link>
//       </div>

//       <button
//         type="button"
//         onClick={handleAdd}
//         className={`gold-cart-button mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-extrabold transition-all duration-300 ${
//           done ? "is-added" : ""
//         }`}
//         aria-label={
//           done
//             ? `${p.name} added to cart`
//             : `Add ${p.name} to cart`
//         }
//       >
//         {done ? (
//           <>
//             <span aria-hidden="true">✓</span>
//             Added to Cart
//           </>
//         ) : (
//           <>
//             <span aria-hidden="true">🛒</span>
//             Add to Cart
//           </>
//         )}
//       </button>
//     </div>
//   </motion.article>

//   <style jsx>{`
//     .gold-product-card {
//       isolation: isolate;
//       min-width: 0;
//       overflow: hidden;
//       border-radius: 18px;
//       background: linear-gradient(
//         145deg,
//         rgba(255, 255, 255, 0.055),
//         rgba(15, 13, 9, 0.98) 32%,
//         rgba(8, 8, 8, 0.99)
//       );
//       box-shadow:
//         0 8px 25px rgba(0, 0, 0, 0.3),
//         inset 0 1px 0 rgba(255, 255, 255, 0.07);
//       transition:
//         box-shadow 350ms ease,
//         background 350ms ease;
//     }

//     .gold-card-border {
//       z-index: -1;
//       background: linear-gradient(
//         135deg,
//         #fff2b0 0%,
//         #b78022 15%,
//         #fce8a0 29%,
//         #755016 46%,
//         #e7b94f 63%,
//         #fff0ad 78%,
//         #8e641c 100%
//       );
//       background-size: 250% 250%;
//       opacity: 0.72;
//       transition: opacity 350ms ease;
//       animation: gold-border-flow 7s ease infinite;
//     }

//     .gold-card-glow {
//       z-index: -1;
//       box-shadow: inset 0 0 0 1px rgba(255, 220, 130, 0.12);
//       transition:
//         box-shadow 350ms ease,
//         background 350ms ease;
//     }

//     .gold-product-card:hover {
//       box-shadow:
//         0 18px 45px rgba(0, 0, 0, 0.5),
//         0 0 28px rgba(224, 173, 60, 0.2),
//         0 0 65px rgba(224, 173, 60, 0.07);
//     }

//     .gold-product-card:hover .gold-card-border {
//       opacity: 1;
//     }

//     .gold-product-card:hover .gold-card-glow {
//       box-shadow:
//         inset 0 0 28px rgba(255, 208, 92, 0.08),
//         inset 0 0 0 1px rgba(255, 224, 145, 0.45);
//     }

//     .product-thumb {
//       background:
//         radial-gradient(
//           ellipse at 50% 70%,
//           rgba(190, 133, 35, 0.2),
//           transparent 68%
//         ),
//         #11100d;
//     }

//     .product-image-shine {
//       background: linear-gradient(
//         112deg,
//         transparent 20%,
//         rgba(255, 255, 255, 0.01) 35%,
//         rgba(255, 225, 151, 0.13) 47%,
//         rgba(255, 255, 255, 0.035) 52%,
//         transparent 67%
//       );
//       background-size: 230% 100%;
//       background-position: 130% 0;
//       transition: background-position 800ms ease;
//     }

//     .gold-product-card:hover .product-image-shine {
//       background-position: -30% 0;
//     }

//     .product-card-content {
//       background: linear-gradient(
//         145deg,
//         rgba(30, 25, 15, 0.98),
//         rgba(11, 11, 10, 1) 70%
//       );
//     }

//     .product-badge {
//       color: #171006;
//       background: linear-gradient(
//         115deg,
//         #fff0ad,
//         #d5a43e 42%,
//         #ffe9a0 70%,
//         #b17b1d
//       );
//       box-shadow:
//         0 3px 15px rgba(0, 0, 0, 0.35),
//         0 0 18px rgba(255, 199, 67, 0.18);
//     }

//     .gold-price {
//       color: #f8d777;
//       text-shadow: 0 0 18px rgba(248, 215, 119, 0.13);
//     }

//     .gold-divider {
//       height: 1px;
//       background: linear-gradient(
//         90deg,
//         transparent,
//         rgba(219, 173, 70, 0.62),
//         rgba(255, 231, 164, 0.8),
//         rgba(219, 173, 70, 0.3),
//         transparent
//       );
//     }

//     .product-details-link {
//       color: rgba(255, 255, 255, 0.56);
//     }

//     .product-details-link:hover {
//       color: #ffdc80;
//     }

//     .gold-cart-button {
//       position: relative;
//       overflow: hidden;
//       color: #211605;
//       border: 1px solid rgba(255, 235, 170, 0.85);
//       background: linear-gradient(
//         115deg,
//         #a9751c 0%,
//         #f4d574 22%,
//         #fff0b0 42%,
//         #d7a63e 67%,
//         #f9df89 84%,
//         #a9751c 100%
//       );
//       background-size: 220% 100%;
//       box-shadow:
//         0 4px 16px rgba(205, 153, 44, 0.14),
//         inset 0 1px 0 rgba(255, 255, 255, 0.55);
//       animation: button-gold-flow 6s ease infinite;
//     }

//     .gold-cart-button::before {
//       position: absolute;
//       top: 0;
//       bottom: 0;
//       left: -90%;
//       width: 55%;
//       content: "";
//       transform: skewX(-20deg);
//       background: linear-gradient(
//         90deg,
//         transparent,
//         rgba(255, 255, 255, 0.48),
//         transparent
//       );
//       transition: left 550ms ease;
//     }

//     .gold-cart-button:hover::before {
//       left: 140%;
//     }

//     .gold-cart-button:hover {
//       box-shadow:
//         0 5px 24px rgba(232, 184, 65, 0.32),
//         inset 0 1px 0 rgba(255, 255, 255, 0.7);
//       filter: brightness(1.07);
//     }

//     .gold-cart-button:active {
//       transform: scale(0.98);
//     }

//     .gold-cart-button.is-added {
//       color: white;
//       border-color: rgba(100, 255, 170, 0.5);
//       background: linear-gradient(110deg, #137d47, #25d366, #137d47);
//       animation: none;
//     }

//     @keyframes gold-border-flow {
//       0%,
//       100% {
//         background-position: 0% 50%;
//       }
//       50% {
//         background-position: 100% 50%;
//       }
//     }

//     @keyframes button-gold-flow {
//       0%,
//       100% {
//         background-position: 0% 50%;
//       }
//       50% {
//         background-position: 100% 50%;
//       }
//     }

//     @media (prefers-reduced-motion: reduce) {
//       .gold-card-border,
//       .gold-cart-button {
//         animation: none;
//       }

//       .gold-product-card,
//       .product-image-shine,
//       .gold-cart-button {
//         transition: none;
//       }
//     }
//   `}</style>
// </>

// );
// }


















"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Product, money } from "@/lib/data";
import { useCart } from "@/lib/cart";

export function Thumb({
  p,
  
  className = "aspect-[4/3]",
}: {
  p: Product;
  className?: string;
}) {
  return (
    <div
      className={`product-thumb group/thumb relative w-full min-w-0 overflow-hidden bg-[#11100d] ${className}`}
    >
      {p.image ? (
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 block h-full w-full object-cover transition-transform duration-300 group-hover/thumb:scale-[1.03]"
          style={{ objectPosition: p.focus ?? "center" }}
        />
      ) : (
        <span className="absolute inset-0 z-[1] grid place-items-center text-7xl drop-shadow-lg sm:text-8xl">
          {p.emoji}
        </span>
      )}

      <div className="product-image-shine pointer-events-none absolute inset-0 z-[1]" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </div>
  );
}

export default function ProductCard({ p }: { p: Product }) {
  const { add } = useCart();
  const [done, setDone] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleAdd = () => {
    add(p);
    setDone(true);
    setTimeout(() => setDone(false), 1200);
  };

  return (
    <>
      <motion.article
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 35, scale: 0.97 }
        }
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: reduceMotion ? 0 : 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={reduceMotion ? undefined : { y: -7 }}
        className="gold-product-card group relative flex flex-col"
      >
        {/* Metallic gold frame */}
        <div className="gold-card-border pointer-events-none absolute -inset-px rounded-[19px]" />

        {/* Animated light reflection */}
        <div className="gold-card-glow pointer-events-none absolute inset-0 rounded-[18px]" />

        {p.badge && (
          <span className="product-badge absolute left-3 top-3 z-20 rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-wider">
            <span className="relative z-[1]">{p.badge}</span>
          </span>
        )}

        <Link
          href={`/menu/${p.id}`}
          aria-label={`View ${p.name} details`}
          className="relative z-[1] block overflow-hidden rounded-t-[17px]"
        >
          <Thumb p={p} />
        </Link>

        <div className="product-card-content relative z-[1] flex flex-1 flex-col gap-2.5 rounded-b-[17px] p-4 sm:p-5">
          <Link
            href={`/menu/${p.id}`}
            className="line-clamp-1 font-display text-lg font-extrabold text-white transition-colors duration-300 hover:text-[#ffd978]"
          >
            {p.name}
          </Link>

          <p className="line-clamp-2 min-h-10 flex-1 text-xs leading-relaxed text-white/60">
            {p.desc}
          </p>

          <div className="gold-divider my-1" />

          <div className="flex items-center justify-between gap-3">
            <p className="gold-price text-lg font-black">
              {money(p.price)}
            </p>

            <Link
              href={`/menu/${p.id}`}
              className="product-details-link text-xs font-semibold transition-colors"
            >
              View Details <span aria-hidden="true">→</span>
            </Link>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className={`gold-cart-button mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-extrabold transition-all duration-300 ${
              done ? "is-added" : ""
            }`}
            aria-label={
              done
                ? `${p.name} added to cart`
                : `Add ${p.name} to cart`
            }
          >
            {done ? (
              <>
                <span aria-hidden="true">✓</span>
                Added to Cart
              </>
            ) : (
              <>
                <span aria-hidden="true">🛒</span>
                Add to Cart
              </>
            )}
          </button>
        </div>
      </motion.article>

      <style jsx>{`
        .gold-product-card {
          isolation: isolate;
          min-width: 0;
          overflow: hidden;
          border-radius: 18px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.055),
            rgba(15, 13, 9, 0.98) 32%,
            rgba(8, 8, 8, 0.99)
          );
          box-shadow:
            0 8px 25px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.07);
          transition:
            box-shadow 350ms ease,
            background 350ms ease;
        }

        .gold-card-border {
          z-index: -1;
          background: linear-gradient(
            135deg,
            #fff2b0 0%,
            #b78022 15%,
            #fce8a0 29%,
            #755016 46%,
            #e7b94f 63%,
            #fff0ad 78%,
            #8e641c 100%
          );
          background-size: 250% 250%;
          opacity: 0.72;
          transition: opacity 350ms ease;
          animation: gold-border-flow 7s ease infinite;
        }

        .gold-card-glow {
          z-index: -1;
          box-shadow: inset 0 0 0 1px rgba(255, 220, 130, 0.12);
          transition:
            box-shadow 350ms ease,
            background 350ms ease;
        }

        .gold-product-card:hover {
          box-shadow:
            0 18px 45px rgba(0, 0, 0, 0.5),
            0 0 28px rgba(224, 173, 60, 0.2),
            0 0 65px rgba(224, 173, 60, 0.07);
        }

        .gold-product-card:hover .gold-card-border {
          opacity: 1;
        }

        .gold-product-card:hover .gold-card-glow {
          box-shadow:
            inset 0 0 28px rgba(255, 208, 92, 0.08),
            inset 0 0 0 1px rgba(255, 224, 145, 0.45);
        }

        /* :global لأن Thumb component منفصل عن الـ scope بتاع styled-jsx */
        :global(.product-thumb) {
          background:
            radial-gradient(
              ellipse at 50% 70%,
              rgba(190, 133, 35, 0.2),
              transparent 68%
            ),
            #11100d;
        }

        :global(.product-image-shine) {
          background: linear-gradient(
            112deg,
            transparent 20%,
            rgba(255, 255, 255, 0.01) 35%,
            rgba(255, 225, 151, 0.13) 47%,
            rgba(255, 255, 255, 0.035) 52%,
            transparent 67%
          );
          background-size: 230% 100%;
          background-position: 130% 0;
          transition: background-position 800ms ease;
        }

        .gold-product-card:hover :global(.product-image-shine) {
          background-position: -30% 0;
        }

        .product-card-content {
          background: linear-gradient(
            145deg,
            rgba(30, 25, 15, 0.98),
            rgba(11, 11, 10, 1) 70%
          );
        }

        .product-badge {
          color: #171006;
          background: linear-gradient(
            115deg,
            #fff0ad,
            #d5a43e 42%,
            #ffe9a0 70%,
            #b17b1d
          );
          box-shadow:
            0 3px 15px rgba(0, 0, 0, 0.35),
            0 0 18px rgba(255, 199, 67, 0.18);
        }

        .gold-price {
          color: #f8d777;
          text-shadow: 0 0 18px rgba(248, 215, 119, 0.13);
        }

        .gold-divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(219, 173, 70, 0.62),
            rgba(255, 231, 164, 0.8),
            rgba(219, 173, 70, 0.3),
            transparent
          );
        }

        .product-details-link {
          color: rgba(255, 255, 255, 0.56);
        }

        .product-details-link:hover {
          color: #ffdc80;
        }

        .gold-cart-button {
          position: relative;
          overflow: hidden;
          color: #211605;
          border: 1px solid rgba(255, 235, 170, 0.85);
          background: linear-gradient(
            115deg,
            #a9751c 0%,
            #f4d574 22%,
            #fff0b0 42%,
            #d7a63e 67%,
            #f9df89 84%,
            #a9751c 100%
          );
          background-size: 220% 100%;
          box-shadow:
            0 4px 16px rgba(205, 153, 44, 0.14),
            inset 0 1px 0 rgba(255, 255, 255, 0.55);
          animation: button-gold-flow 6s ease infinite;
        }

        .gold-cart-button::before {
          position: absolute;
          top: 0;
          bottom: 0;
          left: -90%;
          width: 55%;
          content: "";
          transform: skewX(-20deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.48),
            transparent
          );
          transition: left 550ms ease;
        }

        .gold-cart-button:hover::before {
          left: 140%;
        }

        .gold-cart-button:hover {
          box-shadow:
            0 5px 24px rgba(232, 184, 65, 0.32),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);
          filter: brightness(1.07);
        }

        .gold-cart-button:active {
          transform: scale(0.98);
        }

        .gold-cart-button.is-added {
          color: white;
          border-color: rgba(100, 255, 170, 0.5);
          background: linear-gradient(110deg, #137d47, #25d366, #137d47);
          animation: none;
        }

        @keyframes gold-border-flow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes button-gold-flow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gold-card-border,
          .gold-cart-button {
            animation: none;
          }

          .gold-product-card,
          :global(.product-image-shine),
          .gold-cart-button {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
