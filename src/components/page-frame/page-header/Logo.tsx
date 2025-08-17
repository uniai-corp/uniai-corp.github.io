"use client";

import Link from "next/link";
import useLocale from "@/hooks/useLocale";

export default function PageHeaderLogo() {
  const { locale } = useLocale();
  return (
    <h1 className="page-header-logo">
      <Link href={`/${locale === "ko" ? "" : locale}`}>
        <figure>
          <picture>
            <img src="/img/logo/logo-header.svg" alt="UNiAI" />
          </picture>
        </figure>
      </Link>
    </h1>
  );
}
