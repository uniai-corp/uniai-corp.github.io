import { ReactNode } from "react";

export default function PageSectionWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`page-section-wrapper ${className ? className : ""}`}>{children}</div>;
}
