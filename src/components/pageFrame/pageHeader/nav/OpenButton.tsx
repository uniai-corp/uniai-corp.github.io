"use client";

import { useCallback } from "react";
import { useAtom } from "jotai";

import { isNavOpenState } from "@/jotai/nav";

export default function PageHeaderNavOpenButton() {
  const [isNavOpen, setNavOpen] = useAtom(isNavOpenState);

  const onOpen = useCallback(() => {
    setNavOpen(!isNavOpen);
  }, [isNavOpen, setNavOpen]);

  return (
    <button
      className={`page-header-nav-open-button ${isNavOpen ? "active" : ""}`}
      type="button"
      onClick={onOpen}
    >
      <figure>
        <span className="top"></span>
        <span className="mid"></span>
        <span className="btm"></span>
      </figure>
    </button>
  );
}
