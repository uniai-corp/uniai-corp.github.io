import { forwardRef } from "react";

const PageSolutionProductCategoryContainer = forwardRef(
  (
    {
      className,
      children,
    }: {
      className?: string;
      children: React.ReactNode;
    },
    ref: React.ForwardedRef<HTMLDivElement | null>,
  ) => {
    return (
      <div
        className={`page-solution-product-category-container ${className ? className : ""}`}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
export default PageSolutionProductCategoryContainer;
