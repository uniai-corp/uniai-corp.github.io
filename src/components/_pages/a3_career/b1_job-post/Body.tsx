import PageSectionWrapper from "@/components/section/Wrapper";
import PageCareerJobPostArticleContainer from "./c0_article/Container";
import PageCareerJobPostFloatBoxContainer from "./c1_floatBox/Container";

export default function PageCareerJobPostBody({ post }: { post: RecruitPost }) {
  return (
    <div className="page-career-job-post-body">
      <PageSectionWrapper className="page-career-job-post-wrapper">
        <PageCareerJobPostArticleContainer post={post} />
        <PageCareerJobPostFloatBoxContainer post={post} />
      </PageSectionWrapper>
    </div>
  );
}
