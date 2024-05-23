import { getImageProps } from "next/image";
import { useRef } from "react";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useAtomValue } from "jotai";
import { scrollContainer } from "@/jotai/scroll";

export default function PageMainVisualEarth() {
  const common = { alt: "global" };

  const {
    props: { srcSet: desktopLarge },
  } = getImageProps({
    ...common,
    width: 1340,
    height: 1000,
    src: "/img/main/visual/earth_desktop_large.png",
  });

  const {
    props: { srcSet: desktopMedium },
  } = getImageProps({
    ...common,
    width: 1220,
    height: 1000,
    src: "/img/main/visual/earth_desktop_medium.png",
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 668,
    height: 600,
    src: "/img/main/visual/earth_tablet.png",
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 360,
    height: 400,
    src: "/img/main/visual/earth_mobile.png",
  });

  const container = useAtomValue(scrollContainer);
  const earthRef = useRef<HTMLElement | null>(null);
  useScrollAnimation({
    container,
    options: [
      {
        optionKey: "main/visual/earth",
        target: earthRef.current,
        animation: [{ duration: 3, autoAlpha: 1 }],
      },
    ],
  });

  return (
    <div className="bg-object-container">
      <figure className="bg-object" ref={earthRef}>
        <picture>
          <source media="(min-width: 1340px)" srcSet={desktopLarge} />
          <source media="(min-width: 1280px)" srcSet={desktopMedium} />
          <source media="(min-width: 768px)" srcSet={tablet} />
          <source srcSet={mobile} />
          <img {...rest} alt="global" style={{ width: "100%", height: "auto" }} />
        </picture>
      </figure>
    </div>
  );
}
