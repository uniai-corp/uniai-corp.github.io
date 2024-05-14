import { ReactNode } from "react";

export default function PageHeaderNavItem({
  children,
  clickEvent,
}: {
  children: ReactNode;
  clickEvent: () => void;
}) {
  return (
    <button className="nav-button" type="button" onClick={clickEvent}>
      {children}
    </button>
  );
}
