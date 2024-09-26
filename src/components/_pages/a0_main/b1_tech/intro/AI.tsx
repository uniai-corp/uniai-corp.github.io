// import { getImageProps } from "next/image";

import SectionObjectImage from "@/components/section/ObjectImage";

export default function PageTechIntroAI({ trigger }: { trigger: HTMLElement | null }) {
  // const common = { alt: "AI" };

  // const {
  //   props: { srcSet: desktopLarge },
  // } = getImageProps({
  //   ...common,
  //   width: 1062,
  //   height: 674,
  //   src: "/img/main/tech/intro/ai_desktop_large.png",
  // });

  // const {
  //   props: { srcSet: desktopMedium },
  // } = getImageProps({
  //   ...common,
  //   width: 850,
  //   height: 539,
  //   src: "/img/main/tech/intro/ai_desktop_medium.png",
  // });

  // const {
  //   props: { srcSet: tablet },
  // } = getImageProps({
  //   ...common,
  //   width: 531,
  //   height: 337,
  //   src: "/img/main/tech/intro/ai_tablet.png",
  // });

  // const {
  //   props: { srcSet: mobile, ...rest },
  // } = getImageProps({
  //   ...common,
  //   width: 360,
  //   height: 337,
  //   src: "/img/main/tech/intro/ai_mobile.png",
  // });

  return (
    <SectionObjectImage
      className="tech-intro-ai"
      trigger={trigger}
      scrollAnimationOptions={[
        {
          optionKey: "main/tech/intro/ai",
          target: null,
          animation: [
            {
              duration: 1.6,
              autoAlpha: 1,
              delay: 0.4,
              scrollTrigger: {
                trigger,
                start: "top 80%",
                end: "top 80%",
              },
            },
          ],
        },
      ]}
    >
      <picture>
        <source media="(min-width: 1340px)" srcSet="/img/main/tech/intro/ai_desktop_large.png" />
        <source media="(min-width: 1280px)" srcSet="/img/main/tech/intro/ai_desktop_medium.png" />
        <source media="(min-width: 360px)" srcSet="/img/main/tech/intro/ai_tablet.png" />
        <img
          src="/img/main/tech/intro/ai_mobile.png"
          alt="AI"
          style={{ width: "100%", height: "auto" }}
        />
      </picture>
    </SectionObjectImage>
  );
}
