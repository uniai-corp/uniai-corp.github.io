"use client";

// import { getImageProps } from "next/image";

import SectionObjectImage from "@/components/section/ObjectImage";
import useLocale from "@/hooks/useLocale";

export default function PageTechIntroKeywords({ trigger }: { trigger: HTMLElement | null }) {
  const { locale } = useLocale();
  // const common = { alt: "AI 키워드" };

  // const {
  //   props: { srcSet: desktopLarge },
  // } = getImageProps({
  //   ...common,
  //   width: 1247,
  //   height: 434,
  //   src: "/img/main/tech/intro/text_desktop_large.png",
  // });

  // const {
  //   props: { srcSet: desktopMedium, ...rest },
  // } = getImageProps({
  //   ...common,
  //   width: 1111,
  //   height: 434,
  //   src: "/img/main/tech/intro/text_desktop_medium.png",
  // });

  return (
    <SectionObjectImage
      className="tech-intro-ai-keywords"
      trigger={trigger}
      scrollAnimationOptions={[
        {
          optionKey: "main/tech/intro/keywords",
          target: null,
          animation: [
            {
              duration: 0.8,
              autoAlpha: 1,
              delay: 0.64,
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
        <source
          media="(min-width: 1340px)"
          srcSet={`/img/main/tech/intro/text_desktop_large${locale === "en" ? "_en" : ""}.png`}
        />
        <source
          media="(min-width: 1280px)"
          srcSet={`/img/main/tech/intro/text_desktop_medium${locale === "en" ? "_en" : ""}.png`}
        />
        <img
          src={`/img/main/tech/intro/text_desktop_medium${locale === "en" ? "_en" : ""}.png`}
          alt="AI Keywords"
          style={{ width: "100%", height: "auto" }}
        />
      </picture>
    </SectionObjectImage>
  );
}
