// import { getImageProps } from "next/image";
import { forwardRef } from "react";

const PageMainChickenMongerLogo = forwardRef((props, ref: React.ForwardedRef<HTMLElement>) => {
  // const common = { alt: "ChickenMonger" };

  // const {
  //   props: { srcSet: desktop },
  // } = getImageProps({
  //   ...common,
  //   width: 654,
  //   height: 80,
  //   src: "/img/main/chicken_monger/logo_desktop.png",
  // });

  // const {
  //   props: { srcSet: tablet },
  // } = getImageProps({
  //   ...common,
  //   width: 490,
  //   height: 60,
  //   src: "/img/main/chicken_monger/logo_tablet.png",
  // });

  // const {
  //   props: { srcSet: mobile, ...rest },
  // } = getImageProps({
  //   ...common,
  //   width: 262,
  //   height: 32,
  //   src: "/img/main/chicken_monger/logo_mobile.png",
  // });

  return (
    <figure className="service-logo" ref={ref}>
      <picture>
        <source media="(min-width: 1280px)" srcSet="/img/main/chicken_monger/logo_desktop.png" />
        <source media="(min-width: 768px)" srcSet="/img/main/chicken_monger/logo_tablet.png" />
        <img
          src="/img/main/chicken_monger/logo_mobile.png"
          alt="치킨몽거"
          style={{ width: "100%", height: "auto" }}
        />
      </picture>
    </figure>
  );
});
export default PageMainChickenMongerLogo;
