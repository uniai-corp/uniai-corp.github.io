"use client";

import { useRef } from "react";
import useScrollAnimation from "@/hooks/interaction/useScrollAnimation";

export default function PageAboutLocationAddress({
  title,
  address,
}: {
  title: React.ReactNode;
  address: React.ReactNode;
}) {
  const dlRef = useRef<HTMLDListElement | null>(null);
  const dtRef = useRef<HTMLElement | null>(null);
  const ddRef = useRef<HTMLElement | null>(null);

  useScrollAnimation({
    refs: [dlRef.current, dtRef.current, ddRef.current],
    options: [
      {
        optionKey: `about/location/title`,
        target: dtRef.current,
        animation: [
          {
            duration: 0.8,
            translateX: 0,
            autoAlpha: 1,
            scrollTrigger: { trigger: dlRef.current, start: "top 70%", end: "top 70%" },
          },
        ],
      },
      {
        optionKey: `about/location/address`,
        target: ddRef.current,
        animation: [
          {
            duration: 0.8,
            autoAlpha: 1,
            translateX: 0,
            delay: 0.16,
            scrollTrigger: { trigger: dlRef.current, start: "top 70%", end: "top 70%" },
          },
        ],
      },
    ],
  });

  return (
    <dl className="page-about-location-info" ref={dlRef}>
      <dt className="page-about-location-info-title" ref={dtRef}>
        {title}
      </dt>
      <dd className="page-about-location-info-address" ref={ddRef}>
        {address}
      </dd>
    </dl>
  );
}
