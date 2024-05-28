import { getImageProps } from "next/image";

import SectionObjectImage from "@/components/section/ObjectImage";

export default function PageMainVisualEarth({ trigger }: { trigger: HTMLElement | null }) {
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

  return (
    <SectionObjectImage
      trigger={trigger}
      scrollAnimationOptions={[
        {
          optionKey: "main/visual/earth",
          target: null,
          animation: [{ duration: 3, autoAlpha: 1 }],
        },
      ]}
    >
      <picture>
        <source media="(min-width: 1340px)" srcSet={desktopLarge} />
        <source media="(min-width: 1280px)" srcSet={desktopMedium} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source srcSet={mobile} />
        <img {...rest} alt="global" style={{ width: "100%", height: "auto" }} />
      </picture>
    </SectionObjectImage>
  );
}
