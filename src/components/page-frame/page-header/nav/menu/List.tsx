"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import useLocale from "@/hooks/useLocale";

import sitemap from "@/data/sitemap";

export default function PageNavMenuList() {
  const { locale } = useLocale();
  const pathname = usePathname();

  return (
    <ul className="page-nav-menu-list">
      {sitemap.map(d => (
        <li
          key={d.key}
          className={pathname.endsWith(d.href) || pathname.endsWith(`${d.href}/`) ? "selected" : ""}
        >
          <Link className="nav-button" href={`${locale === "en" ? "/en" : ""}${d.href}`}>
            {d.name[locale]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
