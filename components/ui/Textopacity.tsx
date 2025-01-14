'use client';

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function TextOpacity({ children }: { children: React.ReactNode }) {
  const element = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["0 0.7", "0.05 0"],  
  });
  const paragraph = (children as any)?.props?.children;
  const words = paragraph.split(" ");

  return (
    <div
      ref={element}
      className="text-3xl flex flex-wrap"
      style={{
        fontSize: "50px",
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
  progress: any;
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
  progress: any;
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
      <motion.span style={{ opacity }} >{children}</motion.span>
    </span>
  );
}
