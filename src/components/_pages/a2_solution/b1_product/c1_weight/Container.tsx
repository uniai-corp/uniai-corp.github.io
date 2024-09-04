import PageSolutionProductCategoryContainer from "../assets/CategoryContainer";
import PageSolutionProductFeatureContainer from "../c0_allInOne/feature/Container";
import PageSolutionProductWeightHeader from "./Header";

export default function PageSolutionProductWeightContainer() {
  return (
    <PageSolutionProductCategoryContainer>
      <PageSolutionProductWeightHeader />
      <PageSolutionProductFeatureContainer
        categories={["feeding", "weight", "control"]}
        isDetail={false}
      />
    </PageSolutionProductCategoryContainer>
  );
}
