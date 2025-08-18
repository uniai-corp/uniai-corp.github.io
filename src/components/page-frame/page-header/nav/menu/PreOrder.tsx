"use client";

// import Link from "next/link";

import useLocale from "@/hooks/useLocale";

export default function PageNavPreOrderButton() {
  const { t } = useLocale();

  return (
    <button
      type="button"
      className="page-nav-pre-order-button"
      onClick={() => alert("페이지 준비중입니다.")}
    >
      <span>{t("page/pre-order", "V2 사전구매")}</span>
    </button>
  );
}
