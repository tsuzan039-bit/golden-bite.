// "use client";
// import { createContext, useContext, useEffect, useState, ReactNode } from "react";
// import { Product, Addon } from "./data";

// export interface CartItem { key: string; product: Product; addons: Addon[]; qty: number }
// interface Ctx {
//   items: CartItem[]; count: number; total: number;
//   add: (p: Product, addons?: Addon[], qty?: number) => void;
//   setQty: (key: string, qty: number) => void;
//   remove: (key: string) => void; clear: () => void;
// }
// const CartCtx = createContext<Ctx | null>(null);
// export const unitPrice = (i: CartItem) => i.product.price + i.addons.reduce((s, a) => s + a.price, 0);

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [ready, setReady] = useState(false);
//   useEffect(() => { try { setItems(JSON.parse(localStorage.getItem("cart") || "[]")); } catch {} setReady(true); }, []);
//   useEffect(() => { if (ready) localStorage.setItem("cart", JSON.stringify(items)); }, [items, ready]);

//   const add: Ctx["add"] = (product, addons = [], qty = 1) => {
//     const key = product.id + "|" + addons.map((a) => a.id).sort().join(",");
//     setItems((cur) => cur.some((i) => i.key === key)
//       ? cur.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i))
//       : [...cur, { key, product, addons, qty }]);
//   };
//   const setQty = (key: string, qty: number) =>
//     setItems((cur) => (qty <= 0 ? cur.filter((i) => i.key !== key) : cur.map((i) => (i.key === key ? { ...i, qty } : i))));
//   const remove = (key: string) => setItems((cur) => cur.filter((i) => i.key !== key));
//   const clear = () => setItems([]);
//   const count = items.reduce((s, i) => s + i.qty, 0);
//   const total = items.reduce((s, i) => s + unitPrice(i) * i.qty, 0);
//   return <CartCtx.Provider value={{ items, count, total, add, setQty, remove, clear }}>{children}</CartCtx.Provider>;
// }
// export const useCart = () => { const c = useContext(CartCtx); if (!c) throw new Error("CartProvider missing"); return c; };



"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Product, Addon } from "./data";

export interface CartItem {
  key: string;
  product: Product;
  addons: Addon[];
  qty: number;
}

interface Ctx {
  items: CartItem[];
  count: number;
  total: number;
  add: (p: Product, addons?: Addon[], qty?: number) => void;
  setQty: (key: string, qty: number) => void;
  remove: (key: string) => void;
  clear: () => void;
}

const CartCtx = createContext<Ctx | null>(null);

export const unitPrice = (i: CartItem) =>
  i.product.price + i.addons.reduce((s, a) => s + a.price, 0);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      setItems(JSON.parse(localStorage.getItem("cart") || "[]"));
    } catch {}

    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) {
      localStorage.setItem("cart", JSON.stringify(items));
    }
  }, [items, ready]);

  const add: Ctx["add"] = (product, addons = [], qty = 1) => {
    const key =
      product.id + "|" + addons.map((a) => a.id).sort().join(",");

    setItems((cur) =>
      cur.some((i) => i.key === key)
        ? cur.map((i) =>
            i.key === key ? { ...i, qty: i.qty + qty } : i
          )
        : [...cur, { key, product, addons, qty }]
    );
  };

  const setQty = (key: string, qty: number) =>
    setItems((cur) =>
      qty <= 0
        ? cur.filter((i) => i.key !== key)
        : cur.map((i) => (i.key === key ? { ...i, qty } : i))
    );

  const remove = (key: string) =>
    setItems((cur) => cur.filter((i) => i.key !== key));

  const clear = () => setItems([]);

  const count = items.reduce((s, i) => s + i.qty, 0);

  const total = items.reduce(
    (s, i) => s + unitPrice(i) * i.qty,
    0
  );

  return (
    <CartCtx.Provider
      value={{ items, count, total, add, setQty, remove, clear }}
    >
      {children}
    </CartCtx.Provider>
  );
}

export const useCart = () => {
  const c = useContext(CartCtx);

  if (!c) {
    throw new Error("CartProvider missing");
  }

  return c;
};

