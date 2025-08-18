export default function PageCareerJobPostArticleContainer({
  title,
  contents,
  direction,
}: {
  title: React.ReactNode;
  contents: React.ReactNode;
} & Partial<{
  direction: "row" | "column";
}>) {
  return (
    <dl className="page-career-job-post-float-box-table-row">
      <dt>{typeof title === "string" ? <span>{title}</span> : title}</dt>
      <dd className={`align-direction-${direction || "row"}`}>
        {typeof contents === "string" ? <span>{contents}</span> : contents}
      </dd>
    </dl>
  );
}
