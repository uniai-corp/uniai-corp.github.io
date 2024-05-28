"use client";

import { responsiveDeviceState } from "@/jotai/deviceViewport";
import { useAtomValue } from "jotai";
import { getImageProps } from "next/image";
import { useMemo } from "react";

export default function PageAboutPartnersCategoryItem({
  classify,
  name,
}: {
  classify: string;
  name: string;
}) {
  const { viewport } = useAtomValue(responsiveDeviceState);

  const style = useMemo(
    () => (viewport === "desktop" ? { width: "100%", height: "auto" } : {}),
    [viewport],
  );

  const common = { alt: name };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 240,
    height: 80,
    src: `/img/about/${classify}_desktop.jpg`,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 210,
    height: 70,
    src: `/img/about/${classify}_tablet.jpg`,
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 140,
    height: 47,
    src: `/img/about/${classify}_mobile.jpg`,
  });

  return (
    <li className="page-about-partners-category-list-item">
      <figure>
        <picture>
          <source media="(min-width: 1280px)" srcSet={desktop} />
          <source media="(min-width: 768px)" srcSet={tablet} />
          <source srcSet={mobile} />
          <img {...rest} alt={name} style={style} />
        </picture>
      </figure>
    </li>
  );
}
