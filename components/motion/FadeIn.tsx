"use client";

import { type ReactNode, useMemo } from "react";
import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  rotate?: boolean;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 40,
  className,
  once = true,
  rotate = false,
}: FadeInProps) {
  const initial = useMemo(() => {
    const y = direction === "up" ? distance : direction === "down" ? -distance : 0;
    const x = direction === "left" ? distance : direction === "right" ? -distance : 0;
    return {
      opacity: 0,
      y,
      x,
      ...(rotate ? { rotateX: -60 } : {}),
    };
  }, [direction, distance, rotate]);

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0, rotateX: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      style={rotate ? { transformStyle: "preserve-3d" } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
