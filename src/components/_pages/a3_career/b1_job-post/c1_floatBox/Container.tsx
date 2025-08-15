export default function PageCareerJobPostFloatBoxContainer({ post }: { post: RecruitPost }) {
  return (
    <aside className="page-career-job-post-float-box-container">
      <div>
        <p>{JSON.stringify(post, null, 2)}</p>
      </div>
      <a href="mailto:support@uniai.co.kr">
        <span>지원하기</span>
      </a>
    </aside>
  );
}
