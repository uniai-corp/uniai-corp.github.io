export default function PageCareerJobPostProcessSteps({
  renderKey,
  steps,
}: {
  renderKey: string;
  steps: string[];
}) {
  return (
    <ol className="page-career-job-post-process-steps">
      {steps.map((text, i) => (
        <li key={`${renderKey}/${i}`}>
          <div className="step-circle">
            <span>Step {i + 1}</span>
            <p>{text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
