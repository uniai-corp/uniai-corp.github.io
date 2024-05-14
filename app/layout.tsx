import { ReactNode } from "react";

// SEO를 위한 메타데이터
export {
  nextjs_metadata as metadata,
  nextjs_viewport as viewport,
} from "@/data/metadata";

// styles
import "pretendard/dist/web/static/pretendard.css";
import "@/styles/style.scss";

import PageHeader from "@/components/pageFrame/pageHeader/Container";
import PageFooter from "@/components/pageFrame/pageFooter/Container";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <main id="pageContainer" className="page-container">
          <PageHeader />
          {children}
          <PageFooter />
        </main>
      </body>
    </html>
  );
}
