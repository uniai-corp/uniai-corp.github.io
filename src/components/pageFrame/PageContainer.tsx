import { ReactNode } from "react";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <main id="pageContainer" className="page-container">
      {children}
    </main>
  );
}
