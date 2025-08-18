"use client";

import Link from "next/link";
import clsx from "clsx";

import useLocale from "@/hooks/useLocale";

import LanguageIcon from "@img/common/language_icon.svg";
import { useEffect } from "react";

export default function PageNavLanguage() {
  const { locale } = useLocale();

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <dl className="page-nav-language-menu">
      <dt className="page-nav-language-icon">
        <figure>
          <picture>
            <LanguageIcon />
          </picture>
        </figure>
      </dt>
      {(["ko", "en"] as LocaleType[]).map(lang => (
        <dd
          key={`page/header/nav/language/${lang}`}
          className={clsx("page-nav-language-item", { selected: locale === lang })}
        >
          <Link className="page-nav-language-button" href={`/${lang === "ko" ? "" : lang}`}>
            {lang.toUpperCase()}
          </Link>
        </dd>
      ))}
    </dl>
  );
}
