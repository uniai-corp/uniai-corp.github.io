import { useCallback } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

/**
 * GSAP ScrollTrigger 공통 전역옵션
 * @hook
 */
export function useGsapRegister<ContainerElement extends HTMLElement>({
  container,
}: {
  container?: ContainerElement | null;
}) {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, useGSAP);

    const defaultOptions = {
      // 뷰포트 리사이즈에 대한 옵션
      invalidateOnRefresh: true,
      // onRefresh: () => ScrollTrigger.refresh(),
    };

    // 스크롤 영역 기준 요소
    if (typeof container !== "undefined") {
      Object.assign(defaultOptions, { scroller: container });
    }

    ScrollTrigger.defaults({
      ...defaultOptions,
    });
  }, []);

  return null;
}

/**
 * 스크롤 애니메이션 Hook
 * @hook
 * @param {object} props
 * @param {RefObject<HTMLElement | null>} props.container 스크롤 전체 영역
 * @param {boolean} [props.isTimeline] 타임라인 적용 여부
 * @param {ScrollTriggerTweenArrayOptions[]} props.options 애니메이션 및 스크롤트리거 옵션
 * @see https://stackblitz.com/edit/stackblitz-starters-u6rgzq?file=README.md gsap + ScrollTrigger + Next.js Starter Templates
 * @see https://gsap.com/resources/React useGSAP Hook
 * @example
 * ```
 * export default function SectionComponent({ children }: { children: ReactNode }) {
 *  const containerEl = useAtomValue(scrollContainer);
 *  const container = useRef<HTMLElement | null>(containerEl);
 *
 *  const sectionRef = useRef<HTMLElement | null>(null);
 *  const titleRef = useRef<HTMLHeading | null>(null);
 *
 *  useEffect(() => {
 *    container.current = containerEl;
 *  }, [containerEl]);
 *
 *  // Hook 사용
 *  useScrollAnimation({
 *    container,
 *    options: [
 *      // fromTo option
 *      {
 *        target: titleRef.current,
 *        direction: "fromTo",
 *        animation: [
 *          { opacity: 0, y: 50 },
 *          {
 *            opacity: 1,
 *            scrollTrigger: {
 *              trigger: sectionRef.current,
 *              start: "top 80%",
 *              end: "top 50%",
 *              scrub: true,
 *            }
 *          },
 *        ]
 *      }
 *    ]
 *  });
 *
 *  return (
 *    <section className="page-section" ref={sectionRef}>
 *      <h2 ref={titleRef}>제목</h2>
 *    </section>
 *  )
 * }
 * ```
 */
export default function useScrollAnimation<ContainerElement extends HTMLElement>({
  container,
  isTimeline = false,
  options,
}: {
  container: ContainerElement | null;
  isTimeline?: boolean;
  options: ScrollTriggerTweenArrayOptions[];
}) {
  // GSAP initiate register
  useGsapRegister({ container });
  /**
   * 애니메이션 옵션별 gsap tween 설정 실행
   * @param {ScrollTriggerTweenArrayOptions} option 애니메이션 옵션
   */
  const gsapTween = useCallback(
    (option: ScrollTriggerTweenArrayOptions) => {
      if (!(typeof option.target === "string" || option.target instanceof Element)) {
        console.error("스크롤 인터랙션 초기화 오류 :: target 없음", option);
        return;
      }

      // 타임라인 적용 여부에 따른 라이브러리 객체 선언
      const libObject = isTimeline ? gsap.timeline() : gsap;

      // 옵션 추출
      console.log("스크롤 인터랙션 초기화", option);
      const { target, direction, animation } = option;

      // 진행방향에 따른 tween 애니메이션 적용
      if (typeof direction === "undefined" || direction === "to") {
        libObject.to(
          target,
          // to tween
          {
            ...animation[0],
            immediateRender: false, // 애니메이션 초기화 이슈 해결을 위한 옵션
          },
        );
      } else if (direction === "from") {
        libObject.from(
          target,
          // from tween
          {
            ...animation[0],
            immediateRender: false, // 애니메이션 초기화 이슈 해결을 위한 옵션
          },
        );
      } else if (direction === "fromTo") {
        if (!animation[1]) {
          console.error("스크롤 인터랙션 초기화 오류 :: fromTo 애니메이션 없음", animation);
          return;
        }
        libObject.fromTo(
          target,
          // from tween
          {
            ...animation[0],
            immediateRender: false, // 애니메이션 초기화 이슈 해결을 위한 옵션
          },
          // to tween
          { ...animation[1] },
        );
      }
    },
    [isTimeline],
  );

  return useGSAP(() => {
    if (typeof window === "undefined") return;

    if (options.length === 0) {
      console.error("스크롤 인터랙션 초기화 오류 :: options 없음");
      return;
    }

    console.log(`[useScrollAnimation :: useGSAP] options`, ...options);

    const validTargetOptions = options.filter(
      ({ target }) => typeof target === "string" || target instanceof Element,
    );
    if (validTargetOptions.length === 0) {
      console.error("스크롤 인터랙션 초기화 오류 :: target이 유효하지 않음");
      return;
    }
    // tween 배열에 대한 애니메이션 설정 적용
    options.forEach(gsapTween);
  }, [...options.map(({ target }) => target)]);
}
