import { useCallback, useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export default function useResizeObserver<T extends HTMLElement>({
  ref,
  delay,
  notDebounce,
}: {
  ref?: React.RefObject<T>;
  delay?: number;
  notDebounce?: boolean;
}) {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const onResizeObserve = useCallback((entries: ResizeObserverEntry[]) => {
    const el = entries[0].target;
    setWidth(el.clientWidth);
    setHeight(el.clientHeight);
  }, []);

  const onDebounceResizeObserve = useDebounce(onResizeObserve, delay);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // ref 없으면 윈도우 사이즈 모니터링
    // ref가 존재하면, 특정 요소의 사이즈 모니터링
    const element =
      !ref?.current || !(ref.current instanceof Element)
        ? window.document.documentElement
        : ref.current;

    const observer = new ResizeObserver(notDebounce ? onResizeObserve : onDebounceResizeObserve);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [notDebounce, onDebounceResizeObserve, onResizeObserve, ref]);

  return { width, height };
}
