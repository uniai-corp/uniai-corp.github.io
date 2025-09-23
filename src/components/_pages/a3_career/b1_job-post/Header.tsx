"use client";

import PageSectionWrapper from "@/components/section/Wrapper";
import { useCallback } from "react";

export default function PageCareerJobPostHeader({
  title,
  period,
}: {
  title: string;
  period: string[];
}) {
  const format = useCallback(
    (date: string, options: Intl.DateTimeFormatOptions) =>
      new Intl.DateTimeFormat("ko-KR", {
        ...options,
      }).format(new Date(date)),
    [],
  );
  const dateFormat = useCallback(
    (date: string) =>
      format(date, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
    [format],
  );
  const timeFormat = useCallback(
    (date: string) =>
      format(date, {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        // second: "numeric",
      }),
    [format],
  );
  const dDayFormat = useCallback((date: string) => {
    const d = new Date(date);
    const today = new Date();
    const diffTime = d.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays > 0 ? `D-${diffDays}` : "모집종료";
  }, []);

  return (
    <header className="page-career-job-post-header">
      <PageSectionWrapper>
        <p className="article-slogan">Looking forward to growing together</p>
        <div className="title">
          <div className="d-day">
            <span>{dDayFormat(period[1])}</span>
          </div>
          <h3>
            <span className="title-text">[{period[1].split("-")[0]} 유니아이]</span>
            <span className="title-text">{title}</span>
          </h3>
        </div>
        <div className="period">
          <time>{dateFormat(period[0])}</time>
          <span>-</span>
          <time>
            {dateFormat(period[1])}({timeFormat(period[1])})
          </time>
        </div>
      </PageSectionWrapper>
    </header>
  );
}
