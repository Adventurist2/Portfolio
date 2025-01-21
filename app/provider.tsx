"use client";
import { createContext, ReactNode, useRef } from "react";

type RefContextType = {
  skillRef: React.RefObject<HTMLDivElement | null>;
  AboutRef: React.RefObject<HTMLDivElement | null>;
  ProjectRef: React.RefObject<HTMLDivElement | null>;
  ContactRef: React.RefObject<HTMLDivElement | null>;
  HeroRef: React.RefObject<HTMLDivElement | null>;
};

export const Refcontext = createContext<RefContextType | null>(null);

type AppcontextProps = {
  children: ReactNode;
};

export default function Appcontext({ children }: AppcontextProps) {
  const skillRef = useRef<HTMLDivElement | null>(null);
  const AboutRef = useRef<HTMLDivElement | null>(null);
  const ProjectRef = useRef<HTMLDivElement | null>(null);
  const ContactRef = useRef<HTMLDivElement | null>(null);
  const HeroRef = useRef<HTMLDivElement | null>(null);

  return (
    <Refcontext.Provider value={{ skillRef, AboutRef, ProjectRef, ContactRef, HeroRef }}>
      {children}
    </Refcontext.Provider>
  );
}
