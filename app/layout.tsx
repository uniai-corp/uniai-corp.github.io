import { Suspense } from "react";

// SEO를 위한 메타데이터
export {
  // nextjs_metadata as metadata,
  nextjs_viewport as viewport,
} from "@/data/metadata";

import { nextjs_metadata } from "@/data/metadata";
export const generateMetadata = () => nextjs_metadata("ko");

// styles
import "pretendard/dist/web/static/pretendard.css";
import "@/styles/style.scss";

// components
import JotaiProvider from "@/components/roots/JotaiProvider";
import ViewportDeviceChecker from "@/components/roots/ViewportDeviceChecker";
import LanguageRedirect from "@/components/roots/LanguageRedirect";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" viewport-device="desktop" is-apple="false">
      <body>
        <Suspense fallback={null}>
          <LanguageRedirect />
        </Suspense>
        <JotaiProvider>
          <ViewportDeviceChecker />
          {children}
        </JotaiProvider>
      </body>
    </html>
  );
}
