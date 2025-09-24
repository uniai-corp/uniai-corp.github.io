"use client";

import Link from "next/link";
import useLocale from "@/hooks/useLocale";

export default function PageFooterLower() {
  const { t } = useLocale();

  return (
    <div className="page-footer-section page-footer-lower">
      <div className="footer-lower-item company-info">
        <dl className="company-info-item">
          <dt>{t("common/company/ceo/title", "대표이사")}</dt>
          <dd>{t("common/company/ceo/name", "백승환")}</dd>
        </dl>
        <dl className="company-info-item">
          <dt>{t("common/company/register/title", "사업자등록번호")}</dt>
          <dd>269-87-01967</dd>
        </dl>
        <dl className="company-info-item">
          <dt>E-mail</dt>
          <dd>
            <Link href="mailto:uniai@uniai.co.kr">support@uniai.co.kr</Link>
          </dd>
        </dl>
      </div>
      <div className="footer-lower-item address-info">
        <dl className="address-info-item">
          <dt>{t("common/company/hq", "본사")}</dt>
          <dd>
            <address>
              (34134) {t("common/company/hq/address", "대전광역시 유성구 대학로 99 대전 팁스타운")}
            </address>
          </dd>
        </dl>
        <dl className="address-info-item">
          <dt>{t("common/company/research", "기업부설연구소")}</dt>
          <dd>
            <address>
              (13449){" "}
              {t(
                "common/company/research/address",
                "경기 성남시 수정구 대왕판교로 815 기업지원허브",
              )}
            </address>
          </dd>
        </dl>
        <dl className="address-info-item">
          <dt>TEL</dt>
          <dd>
            <a href="tel:070-8657-0073">070-8657-0073</a>
          </dd>
        </dl>
      </div>
    </div>
  );
}
