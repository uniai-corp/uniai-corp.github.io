import PageSectionWrapper from "@/components/section/Wrapper";
import PageHeaderLogo from "./Logo";
import PageHeaderNavContainer from "./nav/Container";

export default function PageHeader() {
  return (
    <header className="page-header" id="pageHeader">
      <PageSectionWrapper className="page-header-wrapper">
        <PageHeaderLogo />
        <PageHeaderNavContainer />
      </PageSectionWrapper>
    </header>
  );
}
