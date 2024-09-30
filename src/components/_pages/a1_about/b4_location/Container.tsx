"use client";

import PageSectionContainer from "@/components/section/Container";
import PageSectionHeader from "@/components/section/Header";
import PageSectionHeaderTitleContainer from "@/components/section/Title";
import PageSectionWrapper from "@/components/section/Wrapper";
import PageAboutLocationItem from "./Item";
import useLocale from "@/hooks/useLocale";

export default function PageAboutLocation() {
  const { t } = useLocale();

  return (
    <PageSectionContainer className="page-about-section page-about-location">
      <PageSectionHeader className="page-about-location-header">
        <PageSectionHeaderTitleContainer category="about/location" title="location" deco={true} />
      </PageSectionHeader>
      <div className="page-about-location-container">
        <PageSectionWrapper>
          <PageAboutLocationItem
            title={t("common/company/hq", "본사")}
            address={t("common/company/hq/address", "대전광역시 유성구 대학로 99 대전 팁스타운")}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2412.3589472457707!2d127.34511410786531!3d36.36304636647881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654b6f24eafc15%3A0xec1d8def175451f3!2z64yA7KCEIO2MgeyKpO2DgOyatA!5e0!3m2!1sko!2skr!4v1725413377528!5m2!1sko!2skr"
          />
          <PageAboutLocationItem
            title={t("common/company/research", "기업부설연구소")}
            address={t(
              "common/company/research/address",
              "경기 성남시 수정구 대왕판교로 815 기업지원허브",
            )}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.988353543341!2d127.09731217651269!3d37.41375017207871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca793cdccad0b%3A0x50347f7afd9c7f49!2z6rK96riw64-EIOyEseuCqOyLnCDsiJjsoJXqtawg64yA7JmV7YyQ6rWQ66GcIDgxNQ!5e0!3m2!1sko!2skr!4v1715844283971!5m2!1sko!2skr"
          />
        </PageSectionWrapper>
      </div>
    </PageSectionContainer>
  );
}
