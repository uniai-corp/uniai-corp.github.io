"use client";

import useLocale from "@/hooks/useLocale";

export default function PagePreOrderProductPackages() {
  const { locale } = useLocale();

  return (
    <div className="page-pre-order-product-packages">
      <figure>
        <picture>
          <img src={`/renew/pre-order/product/packages-${locale}.png`} alt="Packages" />
        </picture>
      </figure>
    </div>
  );
}
