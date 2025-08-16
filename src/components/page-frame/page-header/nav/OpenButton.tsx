"use client";

import { useCallback } from "react";
import { useAtom } from "jotai";
import clsx from "clsx";

import { isNavOpenState } from "@/jotai/nav";

export default function PageNavOpenButton() {
  const [isNavOpen, setNavOpen] = useAtom(isNavOpenState);

  const onOpen = useCallback(() => {
    setNavOpen(!isNavOpen);
  }, [isNavOpen, setNavOpen]);

  return (
    <button
      className={clsx("page-nav-open-button", { active: isNavOpen })}
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
