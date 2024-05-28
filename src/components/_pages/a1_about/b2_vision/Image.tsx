import { getImageProps } from "next/image";
import { ForwardedRef, forwardRef } from "react";

const PageAboutVisionImage = forwardRef(
  (
    {
      category,
      name,
    }: {
      category: string;
      name: string;
    },
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const common = { alt: name };

    const {
      props: { srcSet: desktop },
    } = getImageProps({
      ...common,
      width: 140,
      height: 140,
      src: `/img/about/vision/${category}_desktop.png`,
    });

    const {
      props: { srcSet: mobile, ...rest },
    } = getImageProps({
      ...common,
      width: 100,
      height: 100,
      src: `/img/about/vision/${category}_mobile.png`,
    });

    return (
      <figure className="page-about-vision-item" ref={ref}>
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <source srcSet={mobile} />
          <img {...rest} alt={name} />
        </picture>
      </figure>
    );
  },
);

export default PageAboutVisionImage;