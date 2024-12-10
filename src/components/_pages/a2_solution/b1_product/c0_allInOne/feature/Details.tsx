"use client";

import { useRef } from "react";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import useLocale from "@/hooks/useLocale";
import PageSolutionProductFeatureDetailItem from "./DetailItem";

export default function PageSolutionProductFeatureDetails({
  classifyKey,
  features,
  itemIndex,
  trigger,
}: SolutionProductFeatureDetailsPropsType) {
  const { t } = useLocale();

  const dtRef = useRef<HTMLDListElement | null>(null);

  useScrollAnimation({
    refs: [trigger, dtRef.current],
    options: [
      {
        optionKey: `${classifyKey}/${itemIndex}/details/title`,
        target: dtRef.current,
        animation: [
          {
            duration: 0.4,
            autoAlpha: 1,
            translateY: 0,
            delay: 0.4 * itemIndex,
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

  return (
    <dl className="page-solution-product-feature-details">
      <dt ref={dtRef}>{t("solution/product/allInOne/feature/title", "주요기능")}</dt>
      {features.map((desc, i) => (
        <PageSolutionProductFeatureDetailItem
          key={`${classifyKey}/${itemIndex}/details/${i}`}
          trigger={trigger}
          classifyKey={classifyKey}
          itemIndex={itemIndex}
          index={i}
        >
          {desc}
        </PageSolutionProductFeatureDetailItem>
      ))}
    </dl>
  );
}
