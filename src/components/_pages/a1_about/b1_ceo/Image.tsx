// import { getImageProps } from "next/image";

export default function PageAboutCEOImage() {
  // const commonCeo = { alt: "CEO" };

  // const {
  //   props: { srcSet: desktopLargeCeo },
  // } = getImageProps({
  //   ...commonCeo,
  //   width: 540,
  //   height: 645,
  //   src: "/img/about/ceo/ceo_desktop_large.png",
  // });

  // const {
  //   props: { srcSet: desktopMediumCeo, ...restCeo },
  // } = getImageProps({
  //   ...commonCeo,
  //   width: 480,
  //   height: 645,
  //   src: "/img/about/ceo/ceo_desktop_medium.png",
  // });

  return (
    <figure className="page-about-ceo-img">
      <picture>
        <source media="(min-width: 1340px)" srcSet="/img/about/ceo/ceo_desktop_large.png" />
        <img
          src="/img/about/ceo/ceo_desktop_medium.png"
          alt="CEO"
          style={{ width: "100%", height: "auto" }}
        />
      </picture>
    </figure>
  );
}
