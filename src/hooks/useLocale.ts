import { useCallback, useContext } from "react";
import { LocaleContext } from "@/components/roots/LocaleProvider";
import { convertTextToJsx } from "@/util/convert";
import localeData from "@/data/locale";

/**
 * 언어도구 훅
 * @hook
 * @return locale, t
 */
export default function useLocale() {
  const { locale } = useContext(LocaleContext);

  const t = useCallback(
    <ReturnType extends React.ReactNode>(key: string, alt: React.ReactNode): ReturnType =>
      (convertTextToJsx(localeData[key][locale]) || alt) as ReturnType,
    [locale],
  );

  return { locale, t };
}
