import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";
import Image from "next/image";
import PageSolutionProductSummary from "./Summary";
import PageSolutionProductFeature from "./Feature";

export default function PageSolutionProduct() {
  return (
    <PageSectionContainer>
      <PageSectionWrapper>
        <div className="page-solution-product-container">
          <header className="page-solution-product-header">
            <h2>스마트 축사 통합 관제 시스템</h2>
            <figure>
              <Image src="/img/solution/product/logo.svg" alt="팜에이드" width={540} height={63} />
            </figure>
          </header>
          <PageSolutionProductSummary />
          <PageSolutionProductFeature />
        </div>
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
