import { forwardRef } from "react";

const PageSolutionProductCategoryHeader = forwardRef(
  (
    {
      className,
      children,
    }: {
      className?: string;
      children: React.ReactNode;
    },
    ref: React.ForwardedRef<HTMLElement | null>,
  ) => {
    return (
      <header
        className={`page-solution-product-category-header ${className ? className : ""}`}
        ref={ref}
      >
        {children}
      </header>
    );
  },
);
export default PageSolutionProductCategoryHeader;
