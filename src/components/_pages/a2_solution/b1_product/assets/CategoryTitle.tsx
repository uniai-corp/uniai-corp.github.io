import { forwardRef } from "react";

const PageSolutionProductCategoryTitle = forwardRef(
  (
    { className, title }: { className?: string; title: React.ReactNode },
    ref: React.ForwardedRef<HTMLHeadingElement | null>,
  ) => {
    return (
      <h3
        className={`page-solution-product-category-title ${className ? className : ""}`}
        ref={ref}
      >
        {title}
      </h3>
    );
  },
);

export default PageSolutionProductCategoryTitle;
