"use client";

import { createContext, useEffect } from "react";

export const LocaleContext = createContext<LocalePropsType>({ locale: "ko" });

/**
 * 언어 컨텍스트 공급자
 * @component
 * @param {object} props
 * @param {LocalePropsType} props.locale
 * @param {React.ReactNode} props.children
 */
export default function LocaleProvider({
  locale = "ko",
  children,
}: LocalePropsType & { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.setAttribute("lang", locale);
  }, [locale]);
  return <LocaleContext.Provider value={{ locale }}>{children}</LocaleContext.Provider>;
}
