export default function PageCareerJobPostPreCaution({
  renderKey,
  contents,
}: {
  renderKey: string;
  contents: string[];
}) {
  return (
    <section className="page-career-job-post-article-section page-career-job-post-pre-caution">
      <header className="page-career-job-post-article-section-header page-career-job-post-pre-caution-header">
        <h4>
          <span>유의사항</span>
        </h4>
      </header>
      <div className="page-career-job-post-pre-caution-body">
        <div className="page-career-job-post-article-section-contents">
          <ul>
            {contents.map((item, i) => (
              <li key={`${renderKey}/${i}`}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
