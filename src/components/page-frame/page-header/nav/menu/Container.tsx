"use client";

import { useAtomValue } from "jotai";
import clsx from "clsx";

import PageNavWrapper from "./Wrapper";
import PageNavLanguage from "./Language";

import useClientRouteChange from "@/hooks/util/useClientRouteChange";

import { isNavOpenState } from "@/jotai/nav";

export default function PageNavMenuContainer() {
  const isNavOpen = useAtomValue(isNavOpenState);

  useClientRouteChange();

  return (
    <div className={clsx("page-nav-menu-container", { open: isNavOpen })}>
      <PageNavWrapper />
      <PageNavLanguage />
    </div>
  );
}
