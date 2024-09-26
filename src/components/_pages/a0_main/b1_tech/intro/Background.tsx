// import { getImageProps } from "next/image";
import SectionBackgroundImage from "@/components/section/BackgroundImage";

export default function PageTechIntroBackground() {
  // const common = { alt: "AI 기술 배경", fill: true };

  // const {
  //   props: { srcSet: desktopLarge },
  // } = getImageProps({
  //   ...common,
  //   src: "/img/main/tech/intro/bg_desktop_large.png",
  // });

  // const {
  //   props: { srcSet: desktopMedium },
  // } = getImageProps({
  //   ...common,
  //   src: "/img/main/tech/intro/bg_desktop_medium.png",
  // });

  // const {
  //   props: { srcSet: tablet },
  // } = getImageProps({
  //   ...common,
  //   src: "/img/main/tech/intro/bg_tablet.png",
  // });

  // const {
  //   props: { srcSet: mobile, ...rest },
  // } = getImageProps({
  //   ...common,
  //   src: "/img/main/tech/intro/bg_mobile.png",
  // });

  return (
    <SectionBackgroundImage>
      <picture>
        <source media="(min-width: 1340px)" srcSet="/img/main/tech/intro/bg_desktop_large.png" />
        <source media="(min-width: 1280px)" srcSet="/img/main/tech/intro/bg_desktop_medium.png" />
        <source media="(min-width: 768px)" srcSet="/img/main/tech/intro/bg_tablet.png" />
        <img
          src="/img/main/tech/intro/bg_mobile.png"
          alt="AI 기술 배경"
          style={{ width: "100%", height: "100%" }}
        />
      </picture>
    </SectionBackgroundImage>
  );
}
