"use client";

import useLocale from "@/hooks/useLocale";

export default function PagePreOrderFeatureHeader() {
  const { locale } = useLocale();
  return (
    <header className="page-pre-order-feature-header">
      <figure>
        <picture>
          <img src={`/renew/pre-order/feature/header-${locale}.png`} alt="Feature" />
        </picture>
      </figure>
    </header>
  );
}
