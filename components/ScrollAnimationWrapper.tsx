"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
}

export default function ScrollAnimationWrapper({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollAnimationWrapperProps) {
  const initial = {
    opacity: 0,
    y: direction === "up" ? 18 : 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
