import solution from "@/data/pages/solution";
import PageSolutionProductSummaryItem from "./Item";

export default function PageSolutionProductSummaryList() {
  return (
    <ul className="page-solution-product-summary-list">
      {solution.summary.map((d, i) => (
        <PageSolutionProductSummaryItem key={d.classifyKey} {...d} index={i} />
      ))}
    </ul>
  );
}
