"use client";

import { useRef } from "react";

import useScrollAnimation from "@/hooks/interaction/useScrollAnimation";

export default function SectionObjectImage({
  className,
  children,
  isTimeline,
  trigger,
  scrollAnimationOptions,
}: {
  className?: string;
  children: React.ReactNode;
  isTimeline?: boolean;
  trigger: HTMLElement | null;
  scrollAnimationOptions?: ScrollTriggerTweenArrayOptions[];
}) {
  const objectRef = useRef<HTMLElement | null>(null);

  useScrollAnimation({
    refs: [trigger, objectRef.current],
    isTimeline,
    options:
      typeof scrollAnimationOptions === "undefined"
        ? []
        : scrollAnimationOptions.map(option => ({
            ...option,
            target: objectRef.current,
          })),
  });

  return (
    <div className={`bg-object-container ${className ? className : ""}`}>
      <figure className="bg-object" ref={objectRef}>
        {children}
      </figure>
    </div>
  );
}
