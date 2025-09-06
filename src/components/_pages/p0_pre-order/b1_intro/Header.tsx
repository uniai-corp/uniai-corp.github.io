"use client";

import useLocale from "@/hooks/useLocale";

export default function PagePreOrderIntroHeader() {
  const { locale } = useLocale();

  return (
    <header className="page-pre-order-intro-header">
      <figure>
        <picture>
          <img src={`/renew/pre-order/intro/header-${locale}.png`} alt="Introduce" />
        </picture>
      </figure>
    </header>
  );
}
