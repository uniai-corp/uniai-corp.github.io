import PageSectionContainer from "@/components/section/Container";
import PageSectionHeader from "@/components/section/Header";
import PageSectionHeaderTitleContainer from "@/components/section/Title";
import PageSectionWrapper from "@/components/section/Wrapper";

export default function PageSolutionCustomerSupport() {
  return (
    <PageSectionContainer>
      <PageSectionHeader>
        <PageSectionHeaderTitleContainer title="고객지원" />
      </PageSectionHeader>
      <PageSectionWrapper>고객지원 양식</PageSectionWrapper>
    </PageSectionContainer>
  );
}
