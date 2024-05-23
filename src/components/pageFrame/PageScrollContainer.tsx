"use client";

import { ReactNode, useCallback } from "react";
import { useSetAtom } from "jotai";
import SimpleBarCore from "simplebar-core";
import SimpleBar from "simplebar-react";

import { scrollContainer } from "@/jotai/scroll";

export default function PageScrollContainer({ children }: { children: ReactNode }) {
  const setScrollContainer = useSetAtom(scrollContainer);

  const updateContainerRef = useCallback(
    (node: SimpleBarCore) => {
      setScrollContainer(node?.el || null);
    },
    [setScrollContainer],
  );

  return <SimpleBar ref={updateContainerRef}>{children}</SimpleBar>;
}
