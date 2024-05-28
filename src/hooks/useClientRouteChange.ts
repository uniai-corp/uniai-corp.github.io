"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSetAtom } from "jotai";

import { isNavOpenState } from "@/jotai/nav";

export default function useClientRouteChange() {
  const pathname = usePathname();
  const [currentPathname, setPathname] = useState("");

  const setNavOpen = useSetAtom(isNavOpenState);

  useEffect(() => {
    if (currentPathname === pathname) return;
    setPathname(pathname);
    setNavOpen(false);
  }, [currentPathname, pathname, setNavOpen]);

  return null;
}
