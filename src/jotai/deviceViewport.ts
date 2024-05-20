import { atom } from "jotai";

/**
 * 반응형 웹; breakpoint 상태
 * @state
 * @return {ResponsiveDeviceStateType} desktop, tablet, mobile
 */
export const responsiveDeviceState = atom<ResponsiveDeviceStateType>({
  hardware: "desktop",
  viewport: "desktop",
});

/**
 * 반응형 웹; 화면 가로/세로방향 상태
 * @state
 * @return {ViewportOrientationStateType} portrait, landscape
 */
export const viewportOrientationState =
  atom<ViewportOrientationStateType>("portrait");

/**
 * 애플 디바이스 접속여부 상태
 * @state
 * @return {boolean}
 */
export const isAppleDeviceState = atom<boolean>(false);
