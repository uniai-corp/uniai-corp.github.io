"use client";
import useLocale from "@/hooks/useLocale";
import Link from "next/link";
import LanguageIcon from "@img/common/language_icon.svg";

export default function PageHeaderNavLanguage() {
  const { locale } = useLocale();

  return (
    <dl className="page-header-nav-language-menu">
      <dt className="page-header-nav-language-icon">
        <figure>
          <picture>
            <LanguageIcon />
          </picture>
        </figure>
      </dt>
      {(["ko", "en"] as LocaleType[]).map(lang => (
        <dd
          key={`page/header/nav/language/${lang}`}
          className={`page-header-nav-language-item${locale === lang ? " selected" : ""}`}
        >
          <Link href={`/${lang === "ko" ? "" : lang}`}>
            <span>{lang.toUpperCase()}</span>
          </Link>
        </dd>
      ))}
    </dl>
  );
}
