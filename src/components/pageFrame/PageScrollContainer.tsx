"use client";

import { ReactNode, useCallback } from "react";
import { useSetAtom } from "jotai";
import SimpleBarCore from "simplebar-core";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import { scrollContainer } from "@/jotai/scroll";

export default function PageScrollContainer({ children }: { children: ReactNode }) {
  const setScrollContainer = useSetAtom(scrollContainer);

  const updateContainerRef = useCallback(
    (instance: SimpleBarCore) => {
      const scrollWrapper = instance?.getScrollElement() || null;

      setScrollContainer(scrollWrapper);
    },
    [setScrollContainer],
  );

  return (
    <SimpleBar forceVisible="y" ref={updateContainerRef}>
      {children}
    </SimpleBar>
  );
}
