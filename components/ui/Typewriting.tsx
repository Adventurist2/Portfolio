"use client"
import React, { useEffect, useState, useCallback } from "react";

export function Typewriter({
  strings = [],
  loop = false,
  typingSpeed = 50,
  deletingSpeed = 50,
  pauseTime = 2000,
  className = "",
  cursorClassName = "",
  autoStart = true,
}: {
  strings: string[];
  loop?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
  cursorClassName?: string;
  autoStart?: boolean;
}) {
  const [text, setText] = useState("");
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(autoStart);

  // Get the longest string to set a fixed width
  const maxStringLength = Math.max(...strings.map((str) => str.length));

  const handleTyping = useCallback(() => {
    if (!isTyping) return;
    
    const currentString = strings[currentStringIndex];
    
    if (!isDeleting) {
      if (text === currentString) {
        // Finished typing current string
        if (loop || currentStringIndex < strings.length - 1) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
        return;
      }
      
      setText(currentString.slice(0, text.length + 1));
    } else {
      if (text === "") {
        setIsDeleting(false);
        setCurrentStringIndex((prev) => 
          loop ? (prev + 1) % strings.length : 
          Math.min(prev + 1, strings.length - 1)
        );
        return;
      }
      
      setText(text.slice(0, -1));
    }
  }, [text, isDeleting, currentStringIndex, strings, loop, pauseTime, isTyping]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [handleTyping, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <div className={`block-flex items-center ${className}`} style={{ minWidth: `${maxStringLength}ch` }}>
      <span >{text}</span> {/* This will ensure consistent width even when text is empty */}
      <span 
        className={`ml-1 animate-pulse ${cursorClassName || 'text-black dark:text-white'}`}
        style={{ animationDuration: '1s' }}
      >
        |
      </span>
    </div>
  );
}