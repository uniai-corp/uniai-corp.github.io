import PageSectionWrapper from "@/components/section/Wrapper";
import PagePreOrderProductHeader from "./Header";
import PagePreOrderProductPackages from "./Packages";
import PagePreOrderProductButton from "./Button";
import PageSectionContainer from "@/components/section/Container";

export default function PagePreOrderProductContainer() {
  return (
    <PageSectionContainer className="page-pre-order-product-container">
      <PageSectionWrapper>
        <PagePreOrderProductHeader />
        <PagePreOrderProductPackages />
        <PagePreOrderProductButton />
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
