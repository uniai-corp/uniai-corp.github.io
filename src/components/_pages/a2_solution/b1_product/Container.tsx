import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";
import PageSolutionProductHeader from "./Header";
import PageSolutionProductAllInOneContainer from "./c0_allInOne/Container";
import PageSolutionProductWeightContainer from "./c1_weight/Container";

export default function PageSolutionProduct() {
  return (
    <PageSectionContainer className="page-solution-product">
      <PageSectionWrapper>
        <PageSolutionProductHeader />
        <PageSolutionProductAllInOneContainer />
        <PageSolutionProductWeightContainer />
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
