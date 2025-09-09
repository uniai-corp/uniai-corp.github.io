"use client";

/**
 * 언어 기반 최소 리다이렉트 로직
 * - 목적: 사용자의 브라우저 언어에 따라 "/" ↔ "/en"만 정확히 매핑
 * - 보존: 쿼리스트링(?a=b)은 유지, 해시(#...)는 현재 단계에서 제외
 * - 제외: localStorage, 쿠키 등 상태 저장은 사용하지 않음 (디버깅 단순화를 위해)
 *
 * 동작 규칙
 * 1) "/ko"는 항상 "/"로 정규화 (ko는 기본 루트로 제공)
 * 2) 브라우저 언어가 한국어(ko*)이고 현재 경로가 "/en"으로 시작하면 동일 경로를 루트("/")로 이동
 * 3) 비로컬라이즈 경로(첫 세그먼트가 en/ko가 아님)이고 브라우저 언어가 영어이면 "/en" 프리픽스 부여
 */

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type SupportedLocale = "ko" | "en"; // 현재 지원 언어

const SUPPORTED: SupportedLocale[] = ["ko", "en"]; // 첫 세그먼트 판별용

// 브라우저 언어에서 ko 우선, 아니면 en으로 간주
function detectLocale(): SupportedLocale {
  try {
    const nav = typeof navigator !== "undefined" ? navigator : undefined;
    const lang = (nav?.language || nav?.languages?.[0] || "en").toLowerCase();
    if (lang.startsWith("ko")) return "ko";
    return "en";
  } catch {
    return "en";
  }
}

export default function LanguageRedirect() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    // 현재 경로의 첫 세그먼트 추출
    const firstSeg = pathname.split("/")[1] || "";

    // Build current search portion (?a=b)
    // 쿼리스트링은 보존(해시는 현재 단계에서 생략)
    const search = searchParams.toString();
    const qs = search ? `?${search}` : "";

    // 1) '/ko' 접근 시 항상 루트('/')로 정규화
    if (firstSeg === "ko") {
      const withoutKo = pathname.replace(/^\/ko(\/|$)/, "/");
      if (withoutKo !== pathname) {
        router.replace(`${withoutKo}${qs}`);
        return;
      }
    }

    const locale = detectLocale();

    // 2) 브라우저 언어가 한국어이고, 현재 '/en' 경로라면 루트로 이동
    if (firstSeg === "en" && locale === "ko") {
      const withoutEn = pathname.replace(/^\/en(\/|$)/, "/");
      if (withoutEn !== pathname) router.replace(`${withoutEn}${qs}`);
      return;
    }

    // 3) 비로컬라이즈 경로이고 브라우저 언어가 영어이면 '/en' 프리픽스 부여
    if (!SUPPORTED.includes(firstSeg as SupportedLocale) && locale === "en") {
      const target = `/en${pathname}`;
      if (target !== pathname) router.replace(`${target}${qs}`);
      return;
    }
  }, [pathname, router, searchParams]);

  return null;
}
