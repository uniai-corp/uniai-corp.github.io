import { ReactNode } from "react";

export default function PageHeaderNavItem({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a className="nav-button" href={href}>
      {children}
    </a>
  );
}
