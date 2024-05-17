"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

import PageHeaderNavItem from "./MenuItem";

import sitemap from "@/data/sitemap";
import Link from "next/link";
import Image from "next/image";

export default function PageHeaderNavMenuContainer() {
  const pathName = usePathname();
  const router = useRouter();

  const onClickNavButton = useCallback(
    (href: string) => {
      if (pathName === href || href === "") return;
      router.push(href);
    },
    [pathName, router],
  );

  return (
    <div className="page-nav-menu-container">
      <ul>
        {sitemap.map(d => (
          <li key={d.key} className={pathName === d.href ? "selected" : ""}>
            <PageHeaderNavItem clickEvent={() => onClickNavButton(d.href)}>
              <span>{d.name}</span>
            </PageHeaderNavItem>
          </li>
        ))}
        <li className="inquiry-button-item">
          <Link
            className="radius-button inquiry-button"
            href="https://farmaid.kr/"
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
