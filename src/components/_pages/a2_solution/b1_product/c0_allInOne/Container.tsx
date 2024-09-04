import PageSolutionProductCategoryContainer from "../assets/CategoryContainer";
import PageSolutionProductFeatureContainer from "./feature/Container";
import PageSolutionProductAllInOneHeader from "./Header";

export default function PageSolutionProductAllInOneContainer() {
  return (
    <PageSolutionProductCategoryContainer className="product-all-in-one">
      <PageSolutionProductAllInOneHeader />
      <PageSolutionProductFeatureContainer
        categories={["feeding", "weight", "disease", "control"]}
        isDetail={true}
      />
    </PageSolutionProductCategoryContainer>
  );
}
