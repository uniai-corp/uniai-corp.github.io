// SEO를 위한 메타데이터
export async function generateStaticParams() {
  return localeSegment;
}

import { nextjs_metadata } from "@/data/metadata";
export const generateMetadata = async ({ params }: { params: Promise<LocalePropsType> }) => {
  const locale = (await params).locale || "en";
  return nextjs_metadata(locale);
};

// components
import LocaleProvider from "@/components/roots/LocaleProvider";
import { localeSegment } from "@/data/locale";

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: LocalePropsType;
}) {
  return <LocaleProvider locale={locale}>{children}</LocaleProvider>;
}
