"use client";

// import { getImageProps } from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useAtomValue } from "jotai";

import { responsiveDeviceState } from "@/jotai/deviceViewport";
import useLocale from "@/hooks/useLocale";

export default function PageHeaderLogo() {
  const { locale } = useLocale();
  const { viewport } = useAtomValue(responsiveDeviceState);
  const style = useMemo(
    () => (viewport === "desktop" ? { width: "100%", height: "auto" } : {}),
    [viewport],
  );

  return (
    <h1 className="page-header-logo">
      <Link href={`/${locale === "ko" ? "" : locale}`}>
        <figure>
          <picture>
            <source media="(min-width: 1280px)" srcSet="/img/common/logo_header_desktop.png" />
            <source media="(min-width: 768px)" srcSet="/img/common/logo_header_tablet.png" />
            <img src="/img/common/logo_header_mobile.png" alt="UNiAI" style={style} />
          </picture>
        </figure>
      </Link>
    </h1>
  );
}
