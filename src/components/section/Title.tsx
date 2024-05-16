import { ReactNode } from "react";

export default function PageSectionHeaderTitleContainer({
  title,
  subtitle,
  deco,
}: {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  deco?: boolean;
}) {
  return (
    <div
      className="page-section-header-title-container"
      title-deco={deco ? "true" : "false"}
    >
      <h2 className="page-section-header-title">{title}</h2>
      {subtitle && <p className="page-section-header-subtitle">{subtitle}</p>}
    </div>
  );
}
