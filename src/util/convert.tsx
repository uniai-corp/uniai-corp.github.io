import { Fragment } from "react";

/**
 * <br />이 포함된 텍스트를 jsx로 변환
 * @util
 * @param {string} text
 * @param {string} [key] jsx 키
 * @return {string | React.ReactNode}
 */
export const convertTextToJsx = (text: string, key?: string): string | React.ReactNode => {
  // string 이외의 컨텐츠는 그대로 출력
  if (typeof text !== "string") return text;

  // <br로 시작되는 텍스트가 인식되는 경우
  if (!text.includes("<br")) return text;

  // 정규식으로 배열 분리
  const lines = text.split(/<br\s*\/?>|<br>/);

  return lines.map((line, index) => (
    <Fragment key={key ? `${key}_${index}` : `convertTextToJsx_${line}_${index}`}>
      {index !== 0 && <br />}
      {line}
    </Fragment>
  ));
};
