"use client";

import { useSyncExternalStore } from "react";
import AnimatedCTA from "@/components/AnimatedCTA";

function subscribe() {
  return () => {};
}

function storeHrefFromUserAgent() {
  const userAgent = navigator.userAgent || navigator.vendor;
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return "https://apps.apple.com";
  }
  if (/android/i.test(userAgent)) {
    return "https://play.google.com";
  }
  return "#plans";
}

export default function HeroStoreCTA() {
  const href = useSyncExternalStore(
    subscribe,
    storeHrefFromUserAgent,
    () => "#plans",
  );

  return <AnimatedCTA href={href} text="Begin today" />;
}
