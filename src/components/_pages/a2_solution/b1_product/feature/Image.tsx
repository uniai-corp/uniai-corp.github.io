import Image from "next/image";
import { ForwardedRef, forwardRef } from "react";

const PageSolutionProductFeatureItemImage = forwardRef(
  ({ category, title }: { category: string; title: string }, ref: ForwardedRef<HTMLElement>) => {
    return (
      <figure ref={ref}>
        <Image
          src={`/img/solution/product/feature/${category}.png`}
          alt={title}
          width={100}
          height={101}
        />
        <figcaption>{title}</figcaption>
      </figure>
    );
  },
);
export default PageSolutionProductFeatureItemImage;