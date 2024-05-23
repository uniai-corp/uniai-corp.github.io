import { ReactNode } from "react";
import PageScrollContainer from "./PageScrollContainer";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <main id="pageContainer" className="page-container">
      <PageScrollContainer>{children}</PageScrollContainer>
    </main>
  );
}
