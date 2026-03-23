"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

export function Footer() {
  return (
    <footer className="flex items-center justify-center bg-black px-6 py-8">
      <FadeIn direction="none" delay={0}>
        <Link
          href="/"
          className="inline-block transition-all duration-300 hover:scale-105 hover:opacity-80"
        >
          <Image
            src="/images/footer-logo.jpg"
            alt="SPOR 3"
            width={120}
            height={60}
            className="opacity-90"
          />
        </Link>
      </FadeIn>
    </footer>
  );
}
