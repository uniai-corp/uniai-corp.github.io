"use client";

export default function PageCareerJobPostArticleSection({
  title,
  contents,
  children: extra,
}: {
  title: React.ReactNode;
  contents: (JDSection & { renderKey: string })[];
} & Partial<{
  children: React.ReactNode;
}>) {
  return (
    <section className="page-career-job-post-article-section">
      <header className="page-career-job-post-article-section-block page-career-job-post-article-section-header">
        <h4>{typeof title === "string" ? <span>{title}</span> : title}</h4>
      </header>
      <div className="page-career-job-post-article-section-block page-career-job-post-article-section-body">
        {contents.map(c => (
          <div className="page-career-job-post-article-section-contents" key={c.renderKey}>
            {c.title && <h5>{c.title}</h5>}
            <ul>
              {c.items.map((text, i) => (
                <li key={`${c.renderKey}/contents/${i}`}>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {extra}
      </div>
    </section>
  );
}
