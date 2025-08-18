"use client";

import { useRef } from "react";
import useScrollAnimation from "@/hooks/interaction/useScrollAnimation";

export default function PageSolutionProductFeatureDetailItem({
  classifyKey,
  itemIndex,
  trigger,
  index,
  children,
}: SolutionProductFeatureDetailItemPropsType) {
  const descRef = useRef<HTMLDListElement | null>(null);

  useScrollAnimation({
    refs: [trigger, descRef.current],
    options: [
      {
        optionKey: `${classifyKey}/${itemIndex}/details/${index}`,
        target: descRef.current,
        animation: [
          {
            duration: 0.4,
            autoAlpha: 1,
            translateY: 0,
            delay: 0.4 * itemIndex + index * 0.08,
            scrollTrigger: {
              trigger,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
    ],
  });
  return <dd ref={descRef}>{children}</dd>;
}
