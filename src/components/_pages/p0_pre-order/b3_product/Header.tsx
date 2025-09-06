"use client";

import useLocale from "@/hooks/useLocale";

export default function PagePreOrderProductHeader() {
  const { locale } = useLocale();
  return (
    <header className="page-pre-order-product-header">
      <figure>
        <picture>
          <img src={`/renew/pre-order/product/header-${locale}.png`} alt="Product" />
        </picture>
      </figure>
    </header>
  );
}
