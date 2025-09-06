import PageSectionWrapper from "@/components/section/Wrapper";
import PagePreOrderFeatureHeader from "./Header";
import PagePreOrderFeatureList from "./List";
import PageSectionContainer from "@/components/section/Container";

export default function PagePreOrderFeatureContainer() {
  return (
    <PageSectionContainer className="page-pre-order-feature-container">
      <PageSectionWrapper>
        <PagePreOrderFeatureHeader />
        <PagePreOrderFeatureList />
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
