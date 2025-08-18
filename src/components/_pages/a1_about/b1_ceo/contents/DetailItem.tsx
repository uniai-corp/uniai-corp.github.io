"use client";

import { useRef } from "react";

import useScrollAnimation from "@/hooks/interaction/useScrollAnimation";

export default function PageAboutCEODetailItem({ classifyKey, title, list }: CEODetailDataType) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const listLineRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  useScrollAnimation({
    refs: [itemRef.current, titleRef.current, listLineRef.current, listRef.current],
    options: [
      {
        optionKey: `${classifyKey}/title`,
        target: titleRef.current,
        animation: [
          {
            duration: 0.8,
            autoAlpha: 1,
            scrollTrigger: {
              trigger: itemRef.current,
              start: "top 80%",
              end: "top 80%",
              toggleClass: "active",
            },
          },
        ],
      },
      {
        optionKey: `${classifyKey}/list/line`,
        target: listLineRef.current,
        animation: [
          {
            duration: 1.2,
            autoAlpha: 1,
            height: `calc(100% - var(--about-ceo-detail-title-line-height) - var(--about-ceo-detail-title-margin))`,
            delay: 0.16,
            scrollTrigger: {
              trigger: itemRef.current,
              start: "top 80%",
              end: "top 80%",
              toggleClass: "active",
            },
          },
        ],
      },
      ...(listRef.current === null
        ? []
        : Array.from(listRef.current.children).map((target, i) => ({
            optionKey: `${classifyKey}/list/${i}`,
            target,
            animation: [
              {
                duration: 0.8,
                autoAlpha: 1,
                translateX: 0,
                delay: 0.16 * (i + 1),
                scrollTrigger: {
                  trigger: itemRef.current,
                  start: "top 80%",
                  end: "top 80%",
                },
              },
            ],
          }))),
    ],
  });

  return (
    <div className="page-about-ceo-detail-item" ref={itemRef}>
      <h4 className="page-about-ceo-detail-item-title" ref={titleRef}>
        {title}
      </h4>
      <div className="list-border" ref={listLineRef}></div>
      <ul className="page-about-ceo-detail-list" ref={listRef}>
        {list.map((content, i) => (
          <li className="page-about-ceo-detail-list-item" key={`${classifyKey}/${i}`}>
            {content}
          </li>
        ))}
      </ul>
    </div>
  );
}
