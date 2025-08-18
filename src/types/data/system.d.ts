type MetaSiteDataType = {
  domain: LocaleDataType;
  domainAlt: string;
  title: LocaleDataType;
  desc: LocaleDataType;
};

type SitemapDataType = {
  key: string;
  /**
   * { ko: "한국어 메뉴", en: "영문 메뉴" }
   */
  name: LocaleDataType;
  /**
   * 라우트 경로
   */
  href: string;
};
