import { forwardRef } from "react";

const PageSectionHeader = forwardRef(
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
      <header className={`page-section-header ${className ? className : ""}`} ref={ref}>
        {children}
      </header>
    );
  },
);

export default PageSectionHeader;
