'use client';

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export function TextOpacity({ children }: { children: string }) {
  const element = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "end 0.8"], 
  });
  const paragraph = children;
  const words = paragraph.split(" ");

  return (
    <div
      ref={element}
      className=" flex flex-wrap items-center"
      style={{
        fontSize: "35px",
        padding: "40px",
        lineHeight: "1",
      }}
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={index} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </div>
  );
}

function Word({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;  // Properly typed progress
}) {
  const chars = children.split("");
  const amt = range[1] - range[0];
  const step = amt / children.length;

  return (
    <span
      className="relative"
      style={{
        marginRight: "12px",
        marginTop: "12px",
      }}
    >
      {chars.map((char, index) => {
        const start = range[0] + step * index;
        const end = range[0] + step * (index + 1);
        return (
          <Character key={index} range={[start, end]} progress={progress}>
            {char}
          </Character>
        );
      })}
    </span>
  );
}

function Character({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;  // Properly typed progress
}) {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span>
      <span
        className="absolute"
        style={{
          opacity: 0.3,
        }}
      >
        {children}
      </span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}
