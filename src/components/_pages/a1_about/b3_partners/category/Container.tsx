"use client";

import PageSectionWrapper from "@/components/section/Wrapper";
import PageAboutPartnersCategoryList from "./List";
import useLocale from "@/hooks/useLocale";

export default function PageAboutPartnersCategoryContainer() {
  const { t } = useLocale();

  const partners: PartnersCollection = {
    association: [
      { key: "partners/association/kpsha", name: "한국육용종계부화협회" },
      { key: "partners/association/boiler", name: "한국육계협회" },
      { key: "partners/association/poultry", name: "대한양계협회" },
    ],
    rnd: [
      { key: "partners/rnd/lg", name: "LG U+" },
      { key: "partners/rnd/samwoo", name: "삼우엔지니어링" },
      { key: "partners/rnd/ozray", name: "OZRAY" },
      { key: "partners/rnd/intellisource", name: "인텔리소스" },
    ],
    disease: [
      { key: "partners/disease/kbnp", name: "고려비엔피" },
      { key: "partners/disease/avinext", name: "아비넥스트" },
      { key: "partners/disease/cmc", name: "서울성모병원" },
    ],
    distribution: [
      // { key: "partners/distribution/haemil", name: "해밀" },
      { key: "partners/distribution/cherrybro", name: "체리부로" },
      { key: "partners/distribution/maniker", name: "마니커" },
      // { key: "partners/distribution/harim", name: "하림" },
    ],
    marketing: [
      // { key: "partners/marketing/mbc", name: "대전MBC" },
      { key: "partners/marketing/millban", name: "밀반 코리아" },
    ],
    // feeds: [{ key: "partners/feeds/farmsco", name: "팜스코" }],
    govern: [
      { key: "partners/govern/qia", name: "농림축산검역본부" },
      { key: "partners/govern/cnvri", name: "충청남도 동물위생시험소" },
    ],
    academic: [
      { key: "partners/academic/kaist", name: "KAIST" },
      { key: "partners/academic/dankook", name: "단국대학교" },
      { key: "partners/academic/chungnam", name: "충남대학교" },
      { key: "partners/academic/gist", name: "광주과학기술원" },
    ],
    law: [
      { key: "partners/law/mission", name: "미션" },
      { key: "partners/law/plus", name: "특허법인 플러스" },
      { key: "partners/law/manmin", name: "만민" },
    ],
  };

  return (
    <div className="page-about-partners-container">
      <PageSectionWrapper>
        <PageAboutPartnersCategoryList
          title={t("about/partner/association", "가금협회")}
          list={partners.association}
        />
        <PageAboutPartnersCategoryList
          title={t("about/partner/rnd", "제품개발")}
          list={partners.rnd}
        />
        <PageAboutPartnersCategoryList
          title={t("about/partner/disease", "질병연구")}
          list={partners.disease}
        />
        <PageAboutPartnersCategoryList
          title={t("about/partner/distribution", "가금계열사")}
          list={partners.distribution}
        />
        <PageAboutPartnersCategoryList
          title={t("about/partner/marketing", "마케팅")}
          list={partners.marketing}
        />
        {/* <PageAboutPartnersCategoryList
          title={t("about/partner/feeds", "사료유통")}
          list={partners.feeds}
        /> */}
        <PageAboutPartnersCategoryList
          title={t("about/partner/govern", "정부기관")}
          list={partners.govern}
        />
        <PageAboutPartnersCategoryList
          title={t("about/partner/academic", "산학협력")}
          list={partners.academic}
        />
        <PageAboutPartnersCategoryList
          title={t("about/partner/law", "법률자문")}
          list={partners.law}
        />
      </PageSectionWrapper>
    </div>
  );
}
