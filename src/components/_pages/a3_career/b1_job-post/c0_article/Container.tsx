"use client";

import { useCallback, useMemo } from "react";
import PageCareerJobPostArticleSection from "./Section";
import PageCareerJobPostProcessSteps from "./ProcessSteps";
import PageCareerJobPostPreCaution from "./PreCaution";

export default function PageCareerJobPostArticleContainer({ post }: { post: RecruitPost }) {
  const RENDER_KEY = useMemo(() => `homepage/career/${post.key}/job-post/article`, [post.key]);

  const onWrapItems = useCallback(
    (
      sectionKey: "tasks" | "requirements" | "preferences",
    ): (JDSection & { renderKey: string })[] => {
      return post[sectionKey].map((item, i) => ({
        ...item,
        renderKey: `${RENDER_KEY}/${sectionKey}/${i}`,
      }));
    },
    [post, RENDER_KEY],
  );

  const preNotice = useMemo(
    () => [
      {
        ...post.pre_notice.condition,
        renderKey: `${RENDER_KEY}/pre_notice/condition`,
      },
      {
        ...post.pre_notice.welfare,
        renderKey: `${RENDER_KEY}/pre_notice/welfare`,
      },
    ],
    [post.pre_notice, RENDER_KEY],
  );

  const process = useMemo(
    () => [{ ...post.process, renderKey: `${RENDER_KEY}/process` }],
    [post.process, RENDER_KEY],
  );

  return (
    <div className="page-career-job-post-article-container">
      <PageCareerJobPostArticleSection title="주요 업무" contents={onWrapItems("tasks")} />
      <PageCareerJobPostArticleSection title="자격 요건" contents={onWrapItems("requirements")} />
      <PageCareerJobPostArticleSection title="우대사항" contents={onWrapItems("preferences")} />
      <PageCareerJobPostArticleSection title="필수 확인사항" contents={preNotice} />
      <PageCareerJobPostArticleSection title="채용절차" contents={process}>
        <PageCareerJobPostProcessSteps
          renderKey={`${RENDER_KEY}/process/steps`}
          steps={post.process.steps}
        />
      </PageCareerJobPostArticleSection>
      <PageCareerJobPostPreCaution
        renderKey={`${RENDER_KEY}/pre_caution`}
        contents={post.pre_caution}
      />
    </div>
  );
}
