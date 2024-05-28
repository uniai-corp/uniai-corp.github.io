import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";
import PageAboutCEOHeader from "./Header";
import PageAboutCEOImage from "./Image";
import PageAboutCEOName from "./contents/Name";
import PageAboutCEODetails from "./contents/Details";

export default function PageAboutCeo() {
  return (
    <PageSectionContainer className="page-about-section page-about-ceo">
      <PageAboutCEOHeader />
      <PageSectionWrapper className="page-about-ceo-info">
        <PageAboutCEOImage />
        <div className="page-about-ceo-contents">
          <PageAboutCEOName />
          <PageAboutCEODetails />
        </div>
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
