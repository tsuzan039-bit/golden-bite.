"use client";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
export default function QrBox({ size = 90 }: { size?: number }) {
  const [url, setUrl] = useState("");
  useEffect(() => setUrl(`${window.location.origin}/menu`), []);
  return <div className="rounded-lg bg-white p-1.5" style={{ width: size + 12, height: size + 12 }}>{url && <QRCodeSVG value={url} size={size} />}</div>;
}
