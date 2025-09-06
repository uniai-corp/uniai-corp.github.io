"use client";

import useLocale from "@/hooks/useLocale";

export default function PagePreOrderIntroWhatHasChanged() {
  const { locale } = useLocale();

  return (
    <div className="page-pre-order-intro-what-has-changed">
      <figure>
        <picture>
          <img
            src={`/renew/pre-order/intro/what-has-changed-${locale}.png`}
            alt="What Has Changed?"
          />
        </picture>
      </figure>
    </div>
  );
}
