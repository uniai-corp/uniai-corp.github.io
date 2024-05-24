import { ReactNode } from "react";

export default function SectionBackgroundImage({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <figure className={`bg ${className ? className : ""}`}>{children}</figure>;
}
