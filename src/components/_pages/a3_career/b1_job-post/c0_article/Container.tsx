export default function PageCareerJobPostArticleContainer({ post }: { post: RecruitPost }) {
  return (
    <div className="page-career-job-post-article-container">
      <p>{JSON.stringify(post, null, 2)}</p>
    </div>
  );
}
