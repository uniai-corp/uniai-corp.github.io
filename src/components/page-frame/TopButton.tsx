"use client";

import Image from "next/image";
import { useCallback } from "react";
import { useAtomValue } from "jotai";
import { scrollContainer } from "@/jotai/scroll";

export default function PageTopButton() {
  const container = useAtomValue(scrollContainer);

  const onScrollTop = useCallback(() => {
    if (typeof window === "undefined" || !container) return;

    container.scrollTo({ top: 0, behavior: "smooth" });
  }, [container]);

  return (
    <button type="button" className="page-top-button" onClick={onScrollTop}>
      <figure>
        <Image src="/renew/common/top_arrow.svg" alt="맨 위로 이동" width={11} height={7} />
      </figure>
      <span>Top</span>
    </button>
  );
}
