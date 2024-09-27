"use client";

import { localeSegment } from "@/data/locale";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export async function generateStaticParams() {
  return localeSegment;
}

export default function PageNotFount({ params: { locale } }: { params: LocalePropsType }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(`/${locale}`);
  }, [router, locale]);

  return null;
}
