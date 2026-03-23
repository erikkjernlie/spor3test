"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";

const reviews = [
  {
    title: "Knallbra mat og drikke",
    text: "Veldig god biff og gode drinker! Hyggelig betjening! Kommer garantert tilbake hit! Det gikk også ganske fort fra vi bestilte til både mat og drikke var på bordet. Takk for en veldig koselig kveld \u2764",
  },
  {
    title: "Beste biffen i Rogaland",
    text: "Dette er definitivt favorittplassen når man skal ut å spise! Blandt venner har det blitt en selvfølge at det er hit vi skal når vi skal ut. Perfekt biff, service, atmosfære, drinker osv.. Anbefales absolutt!",
  },
  {
    title: "Veldig høy standard på drinkene.",
    text: "Hyggelig atmosfære og god service. De har gode tapas rett og snacks som passer ypperlig sent på kvelden \uD83D\uDC4D",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export function Reviews() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <FadeIn direction="up" className="relative flex flex-col items-center justify-center bg-black px-6 py-24">
      <div className="relative flex w-full max-w-[600px] items-center">
        <button
          onClick={prev}
          className="absolute -left-12 hidden text-white/50 transition-all duration-300 hover:scale-110 hover:text-white md:block"
          aria-label="Forrige anmeldelse"
        >
          <ChevronLeft className="size-8" />
        </button>

        <div className="w-full text-center">
          <div className="relative min-h-[200px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <h3 className="mb-6 font-heading text-2xl font-bold text-gold md:text-3xl">
                  {reviews[current].title}
                </h3>
                <p className="font-mono text-sm leading-relaxed text-white/90">
                  {reviews[current].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className="relative size-2.5 rounded-full bg-white/30"
                aria-label={`Anmeldelse ${i + 1}`}
              >
                {i === current && (
                  <motion.div
                    layoutId="reviewDot"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="absolute -right-12 hidden text-white/50 transition-all duration-300 hover:scale-110 hover:text-white md:block"
          aria-label="Neste anmeldelse"
        >
          <ChevronRight className="size-8" />
        </button>
      </div>

      <FadeIn direction="up" delay={0.3}>
        <Link
          href="https://no.tripadvisor.com/Restaurant_Review-g226926-d21186516-Reviews-Spor_3-Sandnes_Rogaland_Western_Norway.html"
          target="_blank"
          className="mt-10 inline-block transition-all duration-300 hover:scale-105 hover:opacity-80"
        >
          <Image
            src="/images/tripadvisor-badge.png"
            alt="TripAdvisor rated"
            width={160}
            height={40}
            className="opacity-90"
          />
        </Link>
      </FadeIn>
    </FadeIn>
  );
}
