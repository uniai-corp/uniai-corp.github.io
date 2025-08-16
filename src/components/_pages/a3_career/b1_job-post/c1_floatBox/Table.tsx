import PageCareerJobPostArticleContainer from "./TableRow";

export default function PageCareerJobPostFloatBoxTable({ post }: { post: RecruitPost }) {
  return (
    <div className="page-career-job-post-float-box-table">
      <PageCareerJobPostArticleContainer
        title="직군"
        contents={
          <span>
            {post.position.name} ({post.openings}명)
          </span>
        }
      />
      <PageCareerJobPostArticleContainer
        title="경력"
        contents={
          <span className="highlight">
            경력 {typeof post.years === "number" ? post.years : post.years.join("~")}년
          </span>
        }
      />
      <PageCareerJobPostArticleContainer
        title="학력"
        contents={<span className="highlight">{post.education}</span>}
      />
      <PageCareerJobPostArticleContainer
        title="근무형태"
        contents={
          <>
            <span className="highlight">{post.employment_type.name}</span>
            {post.employment_type.probation && (
              <span>수습기간 {post.employment_type.probation}개월</span>
            )}
          </>
        }
      />
      <PageCareerJobPostArticleContainer
        title="근무시간"
        direction="column"
        contents={
          <>
            <span>
              {post.working_schedule.days} {post.working_schedule.hours}
            </span>
            <span>{post.working_schedule.benefits}</span>
          </>
        }
      />
      <PageCareerJobPostArticleContainer
        title="근무지역"
        direction="column"
        contents={
          <>
            <span>{post.office.address[0]}</span>
            <span>{post.office.address[1]}</span>
            {Object.entries(post.office.map).map(([playformKey, { link }]) => (
              <a
                key={`homepage/career/job-post/float-box/map-link/${playformKey}`}
                className="page-career-job-post-map-link"
                href={link}
                target="_blank"
              >
                지도보기 {">"}
              </a>
            ))}
          </>
        }
      />
    </div>
  );
}
