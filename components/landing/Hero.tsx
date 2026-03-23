"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="SPOR 3 Sandnes interiør"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <div
        className="flex max-w-[770px] flex-col items-center text-center"
        style={{ perspective: "2000px" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <Image
            src="/images/logo-spor3.png"
            alt="SPOR 3 logo"
            width={200}
            height={100}
            className="mb-8 max-h-[100px] w-auto"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 60, rotateX: -60 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ transformStyle: "preserve-3d" }}
          className="mb-10 max-w-[500px] font-mono text-sm leading-relaxed text-white/90"
        >
          En lun og folkelig bar i hjertet av Sandnes sentrum. Vi serverer gode
          drinker fra proffe bartendere og mat fra à la carte meny til moderate
          priser. Utesevering med varmeovner.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex max-w-[300px] gap-2"
        >
          <Link
            href="https://cdn.prod.website-files.com/63a2161950ebce0ce95268f9/6985d7bce3b0bcfd13203048_meny2026%20korrektur2.pdf"
            target="_blank"
            className="rounded bg-gold px-6 py-2 font-sans text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gold/80 hover:shadow-lg hover:shadow-gold/20"
          >
            Meny
          </Link>
          <Link
            href="https://spor3sandnes.no/booking"
            target="_blank"
            className="rounded border-2 border-white px-6 py-2 font-sans text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
          >
            Book bord
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <div className="h-8 w-[1px] bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
