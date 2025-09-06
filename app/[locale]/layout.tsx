import { nextjs_metadata } from "@/data/metadata";

// components
import LocaleProvider from "@/components/roots/LocaleProvider";
import { localeSegment } from "@/data/locale";

// SEO를 위한 메타데이터
export function generateStaticParams() {
  return localeSegment.length ? localeSegment : [{ locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const localeParam = (await params).locale;
  const locale: LocaleType = localeParam === "ko" || localeParam === "en" ? localeParam : "en";
  return nextjs_metadata(locale);
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const localeParam = (await params).locale;
  const locale: LocaleType = localeParam === "ko" || localeParam === "en" ? localeParam : "en";
  return <LocaleProvider locale={locale}>{children}</LocaleProvider>;
}
