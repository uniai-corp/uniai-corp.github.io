import PageSolutionProductSummaryItem from "./Item";

export default function PageSolutionProductSummaryList() {
  const summary: SolutionProductSummaryDataType[] = [
    {
      classifyKey: "solution/product/summary/monitoring",
      category: "monitoring",
      name: "축사 모니터링과 제어",
    },
    {
      classifyKey: "solution/product/summary/disease",
      category: "disease",
      name: "질병 예측과 진단",
    },
    {
      classifyKey: "solution/product/summary/weight",
      category: "weight",
      name: "AI 자동 체중 측정, 예측",
    },
    {
      classifyKey: "solution/product/summary/analysis",
      category: "analysis",
      name: "생육정보 입력, 분석",
    },
  ];

  return (
    <ul className="page-solution-product-summary-list">
      {summary.map((d, i) => (
        <PageSolutionProductSummaryItem key={d.classifyKey} {...d} index={i} />
      ))}
    </ul>
  );
}
