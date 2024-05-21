import { ReactNode } from "react";

export default function PageSectionContainer({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={`page-section-container ${className ? className : ""}`}>{children}</section>
  );
}
