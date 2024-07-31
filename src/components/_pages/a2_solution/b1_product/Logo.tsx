import { getImageProps } from "next/image";

export default function PageSolutionProductLogo() {
  const common = { alt: "치킨몽거" };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 540,
    height: 63,
    src: `/img/solution/product/logo_desktop.png`,
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 300,
    height: 35,
    src: `/img/solution/product/logo_mobile.png`,
  });

  return (
    <figure>
      <picture>
        <source media="(min-width: 768px)" srcSet={desktop} />
        <source srcSet={mobile} />
        <img {...rest} alt="치킨몽거" style={{ width: "100%", height: "auto" }} />
      </picture>
    </figure>
  );
}
