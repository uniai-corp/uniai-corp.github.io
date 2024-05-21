import { ReactNode } from "react";

export default function PageSectionHeaderTitleContainer({
  title,
  subtitle,
  deco,
  children,
}: {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  deco?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="page-section-header-title-container" title-deco={deco ? "true" : "false"}>
      {children ? children : <h2 className="page-section-header-title">{title}</h2>}
      {subtitle && <p className="page-section-header-subtitle">{subtitle}</p>}
    </div>
  );
}
