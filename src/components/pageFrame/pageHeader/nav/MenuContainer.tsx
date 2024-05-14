"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

import PageHeaderNavItem from "./MenuItem";

import sitemap from "@/data/sitemap";

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
    <div className="nav-menu-container">
      <ul>
        {sitemap.map(d => (
          <li key={d.key} className={pathName === d.href ? "selected" : ""}>
            <PageHeaderNavItem clickEvent={() => onClickNavButton(d.href)}>
              <span>{d.name}</span>
            </PageHeaderNavItem>
          </li>
        ))}
      </ul>
    </div>
  );
}
