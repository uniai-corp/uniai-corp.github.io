"use client";

import { useCallback, useEffect, useRef } from "react";
import { useAtom } from "jotai";
import SimpleBarCore from "simplebar-core";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import useDebounce from "@/hooks/util/useDebounce";

import { scrollContainer } from "@/jotai/scroll";

export default function PageScrollContainer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<SimpleBarCore | null>(null);
  const [container, setContainer] = useAtom(scrollContainer);

  const updateContainerRef = useCallback(
    (instance: SimpleBarCore) => {
      if (!instance) {
        if (container !== null) {
          setContainer(null);
          containerRef.current = null;
        }
        return;
      }

      // jotai 업데이트
      const scrollWrapper = instance.getScrollElement();
      setContainer(scrollWrapper);
      containerRef.current = instance;
    },
    [container, setContainer],
  );

  // gsap ScrollTrigger 새로고침
  const onRefreshScrollTrigger = useDebounce(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
  }, 50);

  // 스크롤 height 변경에 따라 gsap ScrollTrigger 재계산
  useEffect(() => {
    if (typeof window === "undefined" || containerRef.current === null) return;

    const { heightAutoObserverEl } = containerRef.current;

    if (heightAutoObserverEl)
      heightAutoObserverEl.addEventListener("resize", onRefreshScrollTrigger);

    return () => {
      if (heightAutoObserverEl)
        heightAutoObserverEl.removeEventListener("resize", onRefreshScrollTrigger);
    };
  }, [onRefreshScrollTrigger]);

  return (
    <SimpleBar className="page-scroll-container" forceVisible="y" ref={updateContainerRef}>
      {children}
    </SimpleBar>
  );
}
