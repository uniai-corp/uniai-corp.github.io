"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useAtomValue } from "jotai";

import PageHeaderNavItem from "./MenuItem";

import useClientRouteChange from "@/hooks/useClientRouteChange";

import { isNavOpenState } from "@/jotai/nav";

import sitemap from "@/data/sitemap";

export default function PageHeaderNavMenuContainer() {
  const pathName = usePathname();
  const isNavOpen = useAtomValue(isNavOpenState);

  useClientRouteChange();

  return (
    <div className={`page-nav-menu-container ${isNavOpen ? "active" : ""}`}>
      <ul>
        {sitemap.map(d => (
          <li key={d.key} className={pathName === d.href ? "selected" : ""}>
            <PageHeaderNavItem href={d.href}>
              <span>{d.name}</span>
            </PageHeaderNavItem>
          </li>
        ))}
        <li className="inquiry-button-item">
          <Link
            className="radius-button inquiry-button"
            href="https://farmaid.kr/inquiry"
            target="_blank"
          >
            <span>서비스 문의</span>
            <figure>
              <Image
                src="/img/common/icon_link_external.svg"
                alt="팜에이드 서비스 문의로 이동"
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
