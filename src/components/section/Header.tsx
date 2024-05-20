import { ReactNode } from "react";

export default function PageSectionHeader({
  children,
}: {
  children: ReactNode;
}) {
  return <header className="page-section-header">{children}</header>;
}
