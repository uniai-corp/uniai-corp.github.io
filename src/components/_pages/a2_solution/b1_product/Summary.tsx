import Image from "next/image";

export default function PageSolutionProductSummary() {
  const summary: SolutionProductSummaryDataType[] = [
    {
      key: "solution/product/summary/monitoring",
      category: "monitoring",
      name: "축사 모니터링과 제어",
      width: 100,
      height: 96,
    },
    {
      key: "solution/product/summary/disease",
      category: "disease",
      name: "질병 예측과 진단",
      width: 80,
      height: 80,
    },
    {
      key: "solution/product/summary/weight",
      category: "weight",
      name: "AI 자동 체중 측정, 예측",
      width: 61,
      height: 68,
    },
    {
      key: "solution/product/summary/analysis",
      category: "analysis",
      name: "생육정보 입력, 분석",
      width: 70,
      height: 67,
    },
  ];
  return (
    <div className="page-solution-product-summary-container">
      <header className="page-solution-product-summary-header">
        <h3>통합상품</h3>
        <p className="mid-phrase">
          사양관리 + 질병관리 + 체중관리 + 통합제어 <br />
          <span>팜에이드의 모든 서비스</span>를
        </p>
        <p>
          <strong>한번에!</strong>
        </p>
      </header>
      <ul>
        {summary.map(d => (
          <li key={d.key}>
            <SummaryItem {...d} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function SummaryItem({
  category,
  name,
  width,
  height,
}: {
  category: string;
  name: string;
  width: number;
  height: number;
}) {
  return (
    <>
      <figure>
        <Image
          src={`/img/solution/product/summary/${category}.png`}
          alt={name}
          width={width}
          height={height}
        />
      </figure>
      <span>{name}</span>
    </>
  );
}
