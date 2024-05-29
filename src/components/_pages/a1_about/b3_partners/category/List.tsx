"use client";

import { useRef } from "react";
import PageAboutPartnersCategoryItem from "./Item";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function PageAboutPartnersCategoryList({
  title,
  list,
}: {
  title: string;
  list: PartnerListDataType[];
}) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const largeCircleRef = useRef<HTMLDivElement | null>(null);
  const smallCircleRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  useScrollAnimation({
    refs: [
      itemRef.current,
      titleRef.current,
      largeCircleRef.current,
      smallCircleRef.current,
      listRef.current,
    ],
    options: [
      {
        optionKey: "about/partners/category/header/title",
        target: titleRef.current,
        animation: [
          {
            duration: 0.64,
            autoAlpha: 1,
            translateX: 0,
            scrollTrigger: {
              trigger: itemRef.current,
              start: "top 75%",
              end: "top 75%",
            },
          },
        ],
      },
      {
        optionKey: "about/partners/category/header/largeCircle",
        target: largeCircleRef.current,
        animation: [
          {
            duration: 0.48,
            autoAlpha: 1,
            scale: 1,
            delay: 0.32,
            scrollTrigger: {
              trigger: itemRef.current,
              start: "top 75%",
              end: "top 75%",
            },
          },
        ],
      },
      {
        optionKey: "about/partners/category/header/smallCircle",
        target: smallCircleRef.current,
        animation: [
          {
            duration: 0.48,
            autoAlpha: 1,
            delay: 0.4,
            scrollTrigger: {
              trigger: itemRef.current,
              start: "top 75%",
              end: "top 75%",
            },
          },
        ],
      },
      {
        optionKey: "about/partners/category/header/line",
        target: smallCircleRef.current?.querySelector(".line") || null,
        animation: [
          {
            duration: 0.56,
            autoAlpha: 1,
            width: 71,
            delay: 0.48,
            scrollTrigger: {
              trigger: itemRef.current,
              start: "top 75%",
              end: "top 75%",
            },
          },
        ],
      },
      ...(listRef.current === null
        ? []
        : Array.from(listRef.current.children).map((target, i) => ({
            optionKey: "about/partners/category/header/list",
            target,
            animation: [
              {
                duration: 0.8,
                autoAlpha: 1,
                translateX: 0,
                delay: 0.8 + i * 0.24,
                scrollTrigger: {
                  trigger: itemRef.current,
                  start: "top 75%",
                  end: "top 75%",
                },
              },
            ],
          }))),
    ],
  });

  return (
    <div className="page-about-partners-item" ref={itemRef}>
      <header className="page-about-partners-category-title">
        <h4 className="page-about-partners-category-name" ref={titleRef}>
          {title}
        </h4>
        <figure className="page-about-partners-category-title-deco">
          <div className="large-circle">
            <div className="circle-object" ref={largeCircleRef}></div>
          </div>
          <div className="chain-line" ref={smallCircleRef}>
            <span className="line"></span>
          </div>
        </figure>
      </header>
      {list && (
        <ul className="page-about-partners-category-list" ref={listRef}>
          {list.map(d => (
            <PageAboutPartnersCategoryItem key={d.key} classify={d.key} name={d.name} />
          ))}
        </ul>
      )}
    </div>
  );
}
