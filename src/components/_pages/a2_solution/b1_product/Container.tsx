import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";
import PageSolutionProductFeatureContainer from "./feature/Container";
import PageSolutionProductSummaryContainer from "./summary/Container";
import PageSolutionProductHeader from "./Header";

export default function PageSolutionProduct() {
  return (
    <PageSectionContainer className="page-solution-product">
      <PageSectionWrapper>
        <PageSolutionProductHeader />
        <PageSolutionProductSummaryContainer />
        <PageSolutionProductFeatureContainer />
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
