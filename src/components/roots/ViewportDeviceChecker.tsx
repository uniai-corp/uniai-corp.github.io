"use client";

import { useCallback, useEffect } from "react";
import { useAtom, useSetAtom } from "jotai";

import useResizeObserver from "@/hooks/useResizeObserver";

import {
  isAppleDeviceState,
  responsiveDeviceState,
  viewportOrientationState,
} from "@/jotai/deviceViewport";

import { checkAppleDevice, checkResponsiveDevice } from "@/util/checkDevice.util";

export default function ViewportDeviceChecker() {
  // 현재 해당하는 breakpoint 상태 업데이트
  const setResponsiveDevice = useSetAtom(responsiveDeviceState);

  // 현재 화면 방향 상태 업데이트
  const [viewportOrientation, setViewportOrientation] = useAtom(viewportOrientationState);

  // 현재 접속 기기가 애플기기인지의 여부
  const [isAppleDevice, setIsAppleDevice] = useAtom(isAppleDeviceState);

  const { width } = useResizeObserver({ delay: 10 });

  // 접속 기기가 애플인지 업데이트
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isAppleValue = checkAppleDevice(navigator.userAgent);
    // const isAppleValue = document.cookie.replace(
    //   /(?:(?:^|.*;\s*)X-Apple-Device\s*=\s*([^;]*).*$)|^.*$/,
    //   "$1",
    // );
    const isApple = isAppleValue === "true";

    if (isAppleDevice !== isApple) {
      // HTML 속성 업데이트
      const htmlAttr = document.documentElement.getAttribute("is-apple") || "";
      if (isAppleValue !== htmlAttr) {
        document.documentElement.setAttribute("is-apple", isAppleValue);
      }
      setIsAppleDevice(isApple);
    }
  }, [isAppleDevice, setIsAppleDevice]);

  // 화면 방향 상태 업데이트
  useEffect(() => {
    if (typeof window === "undefined") return;
    const orientation = window.matchMedia("(orientation: portrait)").matches
      ? "portrait"
      : "landscape";
    if (viewportOrientation !== orientation) setViewportOrientation(orientation);
  }, [setViewportOrientation, viewportOrientation]);

  const getViewport = useCallback(
    (hardware: BreakPointType): BreakPointType => {
      if (typeof window === "undefined") return "desktop";

      if (hardware === "desktop") {
        if (width >= 1280) return "desktop";
        else if (width < 1280 && width >= 768) return "tablet";
        return "mobile";
      }

      if (hardware === "tablet" && width < 768) return "mobile";

      return hardware;
    },
    [width],
  );

  // 감지 디바이스 확인
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hardware = checkResponsiveDevice(navigator.userAgent);
    // const hardware = (document.cookie.replace(
    //   /(?:(?:^|.*;\s*)X-Responsive-Device\s*=\s*([^;]*).*$)|^.*$/,
    //   "$1",
    // ) || "desktop") as BreakPointType;

    const viewport = getViewport(hardware);

    // HTML 속성 업데이트
    const viewportAttr = document.documentElement.getAttribute("viewport-device");
    if (viewport !== viewportAttr) {
      document.documentElement.setAttribute("viewport-device", viewport);
    }

    setResponsiveDevice({
      hardware,
      viewport,
    });
  }, [getViewport, setResponsiveDevice]);

  return null;
}
