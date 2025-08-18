"use client";

import { useRef } from "react";

import useScrollAnimation from "@/hooks/interaction/useScrollAnimation";

export default function PageSectionHeaderTitleContainer({
  category,
  title,
  subtitle,
  deco,
  children,
}: {
  category: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  deco?: boolean;
  children?: React.ReactNode;
}) {
  const titleContainerRef = useRef<HTMLDivElement | null>(null);

  useScrollAnimation({
    refs: [titleContainerRef.current],
    options: [
      {
        optionKey: `${category}/header/title/deco`,
        target: titleContainerRef.current?.querySelector(".deco-bar") || null,
        animation: [
          {
            duration: 0.48,
            autoAlpha: 1,
            skewX: -30,
            delay: 0.16,
            scrollTrigger: {
              trigger: titleContainerRef.current,
              start: "top 60%",
              end: "top 60%",
            },
          },
        ],
      },
      {
        optionKey: `${category}/header/title`,
        target: titleContainerRef.current?.querySelector(".page-section-header-title") || null,
        animation: [
          {
            duration: 0.64,
            autoAlpha: 1,
            translateY: 0,
            scrollTrigger: {
              trigger: titleContainerRef.current,
              start: "top 60%",
              end: "top 60%",
            },
          },
        ],
      },
      {
        optionKey: `${category}/header/subtitle`,
        target: titleContainerRef.current?.querySelector(".page-section-header-subtitle") || null,
        animation: [
          {
            duration: 0.8,
            autoAlpha: 1,
            translateY: 0,
            delay: 0.64,
            scrollTrigger: {
              trigger: titleContainerRef.current,
              start: "top 60%",
              end: "top 60%",
            },
          },
        ],
      },
    ],
  });

  return (
    <div
      className="page-section-header-title-container"
      title-deco={deco ? "true" : "false"}
      ref={titleContainerRef}
    >
      <div className="deco">
        <span className="deco-bar">타이틀</span>
      </div>
      {children ? children : <h2 className="page-section-header-title">{title}</h2>}
      {subtitle && <p className="page-section-header-subtitle">{subtitle}</p>}
    </div>
  );
}
