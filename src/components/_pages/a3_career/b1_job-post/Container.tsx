"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import PageCareerTabMenu from "./TabMenu";

import recruit from "@/data/career/recruit-post";

export default function PageCareerJobPostContainer() {
  const searchParams = useSearchParams();
  const postKey = useMemo(() => searchParams.get("post_key") || "fe_engineer", [searchParams]);

  const list = useMemo(
    () =>
      Object.entries(recruit).map(([code, d]) => ({
        routeKey: d.key,
        name: d.position.name,
        code,
        path: `/career?post_key=${code}`,
        selected: d.key === postKey,
      })),
    [postKey],
  );

  console.log("list", list);
  // const contents = useMemo(() => ({}), []);

  return (
    <div>
      <PageCareerTabMenu list={list} />
    </div>
  );
}
