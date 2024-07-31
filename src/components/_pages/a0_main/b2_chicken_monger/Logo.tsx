import { getImageProps } from "next/image";
import { forwardRef } from "react";

const PageMainChickenMongerLogo = forwardRef((props, ref: React.ForwardedRef<HTMLElement>) => {
  const common = { alt: "ChickenMonger" };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 542,
    height: 69,
    src: "/img/main/chicken_monger/logo_desktop.png",
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 460,
    height: 59,
    src: "/img/main/chicken_monger/logo_tablet.png",
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 300,
    height: 39,
    src: "/img/main/chicken_monger/logo_mobile.png",
  });

  return (
    <figure className="service-logo" ref={ref}>
      <picture>
        <source media="(min-width: 1280px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source srcSet={mobile} />
        <img {...rest} alt="치킨몽거" style={{ width: "100%", height: "auto" }} />
      </picture>
    </figure>
  );
});
export default PageMainChickenMongerLogo;
