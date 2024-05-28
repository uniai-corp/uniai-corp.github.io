import PageSectionContainer from "@/components/section/Container";
import PageSectionHeader from "@/components/section/Header";
import PageSectionHeaderTitleContainer from "@/components/section/Title";
import PageAboutPartnersCategoryContainer from "./category/Container";

export default function PageAboutPartners() {
  return (
    <PageSectionContainer className="page-about-section page-about-partners">
      <PageSectionHeader>
        <PageSectionHeaderTitleContainer
          category="about/partners"
          title="partner"
          subtitle={
            <>
              다양한 파트너사와 함께 성장하고 있는 주식회사 <br />
              유니아이
            </>
          }
          deco={true}
        />
      </PageSectionHeader>
      <PageAboutPartnersCategoryContainer />
    </PageSectionContainer>
  );
}
