import { ForwardedRef, ReactNode, forwardRef } from "react";

const PageSectionContainer = forwardRef(
  (
    {
      className,
      children,
    }: {
      className?: string;
      children: ReactNode;
    },
    ref: ForwardedRef<HTMLElement>,
  ) => {
    return (
      <section className={`page-section-container ${className ? className : ""}`} ref={ref}>
        {children}
      </section>
    );
  },
);

export default PageSectionContainer;
