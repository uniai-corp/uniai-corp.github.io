"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useAtomValue } from "jotai";

import PageHeaderNavLanguage from "./Language";

import useLocale from "@/hooks/useLocale";
import useClientRouteChange from "@/hooks/useClientRouteChange";

import { isNavOpenState } from "@/jotai/nav";

import sitemap from "@/data/sitemap";

export default function PageHeaderNavMenuContainer() {
  const { t, locale } = useLocale();
  const pathName = usePathname();
  const isNavOpen = useAtomValue(isNavOpenState);

  useClientRouteChange();

  return (
    <div className={`page-nav-menu-container ${isNavOpen ? "active" : ""}`}>
      <PageHeaderNavLanguage />
      {/* {process.env.NODE_ENV === "development" && <PageHeaderNavLanguage />} */}
      <ul>
        {sitemap.map(d => (
          <li key={d.key} className={pathName.endsWith(d.href) ? "selected" : ""}>
            <Link className="nav-button" href={`${locale === "en" ? "/en" : ""}${d.href}`}>
              <span>{d.name[locale]}</span>
            </Link>
          </li>
        ))}
        <li className="inquiry-button-item">
          <Link
            className="radius-button inquiry-button"
            href="https://farmaid.kr/inquiry"
            target="_blank"
          >
            <span>{t("page/inquiry", "서비스 문의")}</span>
            <figure>
              <Image
                src="/img/common/icon_link_external.svg"
                alt="치킨몽거 서비스 문의로 이동"
                width={20}
                height={20}
              />
            </figure>
          </Link>
        </li>
      </ul>
    </div>
  );
}
