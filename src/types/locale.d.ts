type LocaleType = "ko" | "en";

type LocalePropsType = {
  /**
   * locale: "ko", "en"
   */
  locale: LocaleType;
};

type LocaleDataType = {
  [localeKey: string]: string;
  ko: string;
  en: string;
};

type LocaleDataCollectionType = {
  /**
   * { ko: "한국어 컨텐츠", en: "영문 컨텐츠" }
   */
  [localeKey: string]: LocaleDataType;
};
