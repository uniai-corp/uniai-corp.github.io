"use client";

import Link from "next/link";

import useLocale from "@/hooks/useLocale";

export default function PageNavPreOrderButton() {
  const { locale, t } = useLocale();

  return (
    <Link href={`${locale === "en" ? "/en" : ""}/pre-order`} className="page-nav-pre-order-button">
      <span>{t("page/pre-order", "V2 사전구매")}</span>
    </Link>
  );
}
