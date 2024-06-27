import { forwardRef } from "react";

const PageSectionContainer = forwardRef(
  (
    {
      className,
      children,
    }: {
      className?: string;
      children: React.ReactNode;
    },
    ref: React.ForwardedRef<HTMLElement>,
  ) => {
    return (
      <section className={`page-section-container ${className ? className : ""}`} ref={ref}>
        {children}
      </section>
    );
  },
);

export default PageSectionContainer;
