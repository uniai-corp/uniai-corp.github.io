// import { getImageProps } from "next/image";
import { forwardRef } from "react";

const PageAboutCEOHeaderLogo = forwardRef((props, ref: React.ForwardedRef<HTMLElement | null>) => {
  // const commonLogo = { alt: "유니아이" };

  // const {
  //   props: { srcSet: desktopLogo },
  // } = getImageProps({
  //   ...commonLogo,
  //   width: 248,
  //   height: 69,
  //   src: "/img/about/ceo/logo_desktop.png",
  // });

  // const {
  //   props: { srcSet: mobileLogo, ...restLogo },
  // } = getImageProps({
  //   ...commonLogo,
  //   width: 166,
  //   height: 46,
  //   src: "/img/about/ceo/logo_mobile.png",
  // });

  return (
    <figure ref={ref}>
      <picture>
        <source media="(min-width: 1280px)" srcSet="/img/about/ceo/logo_desktop.png" />
        <img
          src="/img/about/ceo/logo_mobile.png"
          alt="유니아이"
          style={{ width: "100%", height: "auto" }}
        />
      </picture>
    </figure>
  );
});

export default PageAboutCEOHeaderLogo;
