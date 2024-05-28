import PageSolutionProductSummaryList from "./List";

export default function PageSolutionProductSummaryContainer() {
  return (
    <div className="page-solution-product-summary-container">
      <header className="page-solution-product-summary-header">
        <h3 className="page-solution-product-summary-title">통합상품</h3>
        <p className="mid-phrase">
          사양관리 + 질병관리 + 체중관리 + 통합제어 <br />
          <span>팜에이드의 모든 서비스</span>를
        </p>
        <p>
          <strong>한번에!</strong>
        </p>
      </header>
      <PageSolutionProductSummaryList />
    </div>
  );
}
