import { useRef } from "react";

import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function PageSolutionProductFeatureDetails({
  classifyKey,
  features,
  itemIndex,
  trigger,
}: SolutionProductFeatureDetailsPropsType) {
  const dlRef = useRef<HTMLDListElement | null>(null);

  useScrollAnimation({
    refs: [trigger, dlRef.current],
    options:
      dlRef.current === null
        ? []
        : Array.from(dlRef.current.children).map((target, i) => ({
            optionKey: `${classifyKey}/${itemIndex}/details/${i}`,
            target,
            animation: [
              {
                duration: 0.4,
                autoAlpha: 1,
                translateY: 0,
                delay: 0.4 * itemIndex + i * 0.08,
                scrollTrigger: {
                  trigger,
                  start: "top 70%",
                  end: "top 70%",
                },
              },
            ],
          })),
  });

  return (
    <dl className="page-solution-product-feature-details" ref={dlRef}>
      <dt>주요기능</dt>
      {features.map((desc, i) => (
        <dd key={`${classifyKey}/${itemIndex}/details/${i}`}>{desc}</dd>
      ))}
    </dl>
  );
}
