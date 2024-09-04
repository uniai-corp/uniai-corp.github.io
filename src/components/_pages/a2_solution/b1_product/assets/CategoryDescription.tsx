import { forwardRef } from "react";

const PageSolutionProductCategoryDescription = forwardRef(
  (
    { children, className }: { children: React.ReactNode; className?: string },
    ref: React.ForwardedRef<HTMLParagraphElement | null>,
  ) => {
    return (
      <p
        className={`page-solution-product-category-description ${className ? className : ""}`}
        ref={ref}
      >
        {children}
      </p>
    );
  },
);

export default PageSolutionProductCategoryDescription;
