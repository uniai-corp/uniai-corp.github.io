"use client";

import useLocale from "@/hooks/useLocale";

export default function PageFooterUpper() {
  const { t } = useLocale();

  return (
    <div className="page-footer-section page-footer-upper">
      <div className="footer-upper-item logo-box">
        <figure>
          <picture>
            <img src="/img/logo/logo-footer.svg" alt="UNiAI" />
          </picture>
        </figure>
        <figcaption>{t("common/company/name", "주식회사 유니아이")}</figcaption>
      </div>
    </div>
  );
}
