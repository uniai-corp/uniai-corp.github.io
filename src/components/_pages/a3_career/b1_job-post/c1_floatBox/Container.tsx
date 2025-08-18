import PageCareerJobPostApplyButton from "./ApplyButton";
import PageCareerJobPostFloatBoxTable from "./Table";

export default function PageCareerJobPostFloatBoxContainer({ post }: { post: RecruitPost }) {
  return (
    <aside className="page-career-job-post-float-box-container">
      <PageCareerJobPostFloatBoxTable post={post} />
      <PageCareerJobPostApplyButton />
    </aside>
  );
}
