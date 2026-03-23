"use client";

import { type ReactNode } from "react";
import { motion, type Variant } from "framer-motion";

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

const getInitial = (
  direction: Direction,
  distance: number,
  rotate: boolean
): Variant => {
  const base: Record<string, number> = { opacity: 0 };
  if (rotate) base.rotateX = -60;
  switch (direction) {
    case "up":
      base.y = distance;
      break;
    case "down":
      base.y = -distance;
      break;
    case "left":
      base.x = distance;
      break;
    case "right":
      base.x = -distance;
      break;
  }
  return base;
};

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
  return (
    <motion.div
      initial={getInitial(direction, distance, rotate)}
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
