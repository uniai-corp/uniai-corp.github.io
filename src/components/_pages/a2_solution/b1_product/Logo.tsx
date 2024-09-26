// import { getImageProps } from "next/image";

export default function PageSolutionProductLogo() {
  // const common = { alt: "치킨몽거" };

  // const {
  //   props: { srcSet: desktop },
  // } = getImageProps({
  //   ...common,
  //   width: 654,
  //   height: 81,
  //   src: `/img/solution/product/logo_desktop.png`,
  // });

  // const {
  //   props: { srcSet: tablet },
  // } = getImageProps({
  //   ...common,
  //   width: 572,
  //   height: 71,
  //   src: `/img/solution/product/logo_tablet.png`,
  // });

  // const {
  //   props: { srcSet: mobile, ...rest },
  // } = getImageProps({
  //   ...common,
  //   width: 262,
  //   height: 33,
  //   src: `/img/solution/product/logo_mobile.png`,
  // });

  return (
    <figure>
      <picture>
        <source media="(min-width: 1280px)" srcSet="/img/solution/product/logo_desktop.png" />
        <source media="(min-width: 768px)" srcSet="/img/solution/product/logo_tablet.png" />
        <img
          src="/img/solution/product/logo_mobile.png"
          alt="치킨몽거"
          style={{ width: "100%", height: "auto" }}
        />
      </picture>
    </figure>
  );
}
