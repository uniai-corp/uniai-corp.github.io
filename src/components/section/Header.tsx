import { ReactNode } from "react";

export default function PageSectionHeader({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <header className={`page-section-header ${className ? className : ""}`}>{children}</header>
  );
}
