"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useAtomValue } from "jotai";

import useLocale from "@/hooks/useLocale";

import { responsiveDeviceState } from "@/jotai/device-viewport";

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
            <source media="(min-width: 768px)" srcSet="/img/logo/logo-header-desktop.png" />
            <img src="/img/logo/logo-header-mobile.png" alt="UNiAI" style={style} />
          </picture>
        </figure>
      </Link>
    </h1>
  );
}
