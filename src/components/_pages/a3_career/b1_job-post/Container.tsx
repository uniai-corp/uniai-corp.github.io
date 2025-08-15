"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";

import PageCareerTabMenu from "./TabMenu";
import PageCareerJobPostBody from "./Body";

import recruit from "@/data/career/recruit-post";
import PageTopButton from "@/components/page-frame/TopButton";
import PageCareerJobPostHeader from "./Header";

export default function PageCareerJobPostContainer() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const postKey = useMemo(() => searchParams.get("post_key") || "fe_engineer", [searchParams]);

  const list = useMemo(
    () =>
      Object.entries(recruit).map(([code, d]) => ({
        routeKey: d.key,
        name: d.position.name,
        code,
        path: `${pathname}?post_key=${code}`,
        selected: d.code === postKey,
      })),
    [pathname, postKey],
  );

  const post = useMemo((): RecruitPost => recruit[postKey], [postKey]);

  return (
    <div className="page-career-job-post-container">
      <PageCareerTabMenu list={list} />
      <PageCareerJobPostHeader title={post.title} period={post.period} />
      <PageCareerJobPostBody post={post} />
      <PageTopButton />
    </div>
  );
}
