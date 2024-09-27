import SectionBackgroundImage from "@/components/section/BackgroundImage";
// import { getImageProps } from "next/image";

export default function PageMainVisualBackground() {
  // const common = { alt: "유니아이 홈페이지", fill: true };

  // const {
  //   props: { srcSet: desktopLarge },
  // } = getImageProps({
  //   ...common,
  //   src: "/img/main/visual/bg_desktop_large.png",
  // });

  // const {
  //   props: { srcSet: desktopMedium },
  // } = getImageProps({
  //   ...common,
  //   src: "/img/main/visual/bg_desktop_medium.png",
  // });

  // const {
  //   props: { srcSet: tablet },
  // } = getImageProps({
  //   ...common,
  //   src: "/img/main/visual/bg_tablet.png",
  // });

  // const {
  //   props: { srcSet: mobile, ...rest },
  // } = getImageProps({
  //   ...common,
  //   src: "/img/main/visual/bg_mobile.png",
  //   priority: true,
  // });

  return (
    <SectionBackgroundImage>
      <picture>
        <source media="(min-width: 1340px)" srcSet="/img/main/visual/bg_desktop_large.png" />
        <source media="(min-width: 1280px)" srcSet="/img/main/visual/bg_desktop_medium.png" />
        <source media="(min-width: 768px)" srcSet="/img/main/visual/bg_tablet.png" />
        <img
          src="/img/main/visual/bg_mobile.png"
          alt="UNiAI"
          style={{ width: "100%", height: "100%" }}
        />
      </picture>
    </SectionBackgroundImage>
  );
}
