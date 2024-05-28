"use client";

import { getImageProps } from "next/image";
import { useMemo } from "react";
import { useAtomValue } from "jotai";

import { responsiveDeviceState } from "@/jotai/deviceViewport";

export default function PageHeaderLogo() {
  const { viewport } = useAtomValue(responsiveDeviceState);
  const style = useMemo(
    () => (viewport === "desktop" ? { width: "100%", height: "auto" } : {}),
    [viewport],
  );

  const common = { alt: "UNiAI" };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 144,
    height: 40,
    src: "/img/common/logo_header_desktop.png",
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 108,
    height: 30,
    src: "/img/common/logo_header_tablet.png",
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 87,
    height: 24,
    src: "/img/common/logo_header_mobile.png",
  });

  return (
    <h1 className="page-header-logo">
      <a href="/">
        <figure>
          <picture>
            <source media="(min-width: 1280px)" srcSet={desktop} />
            <source media="(min-width: 768px)" srcSet={tablet} />
            <source srcSet={mobile} />
            <img {...rest} alt="UNiAI" style={style} />
          </picture>
        </figure>
      </a>
    </h1>
  );
}
