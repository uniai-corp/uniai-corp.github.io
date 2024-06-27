import Image from "next/image";
import { forwardRef } from "react";

const PageSolutionProductSummaryItemImage = forwardRef(
  (
    {
      category,
      name,
    }: {
      category: string;
      name: string;
    },
    ref: React.ForwardedRef<HTMLElement | null>,
  ) => {
    return (
      <figure ref={ref}>
        <Image
          src={`/img/solution/product/summary/${category}.png`}
          alt={name}
          width={101}
          height={97}
        />
      </figure>
    );
  },
);
export default PageSolutionProductSummaryItemImage;
