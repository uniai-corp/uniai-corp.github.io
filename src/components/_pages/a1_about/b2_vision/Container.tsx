import PageSectionContainer from "@/components/section/Container";
import PageSectionHeader from "@/components/section/Header";
import PageSectionHeaderTitleContainer from "@/components/section/Title";
import PageSectionWrapper from "@/components/section/Wrapper";
import PageAboutVisionItem from "./Item";
import PageAboutVisionContentsTitle from "./ContentsTitle";

export default function PageAboutVision() {
  const vision: VisionListDataType[] = [
    { key: `vision/ai`, category: "ai", name: "A.I" },
    { key: `vision/bio`, category: "bio", name: "BIO" },
    { key: `vision/medical`, category: "medical", name: "MEDICAL" },
    { key: `vision/robot`, category: "robot", name: "ROBOT" },
    {
      key: `vision/livestock_industry`,
      category: "livestock_industry",
      name: "Livestock Industry",
    },
    {
      key: `vision/embedded_system`,
      category: "embedded_system",
      name: "Embedded System",
    },
  ];

  return (
    <PageSectionContainer className="page-about-section page-about-vision">
      <PageSectionHeader className="page-about-vision-header">
        <PageSectionHeaderTitleContainer category="about/vision" title="vision" deco={true} />
      </PageSectionHeader>
      <PageAboutVisionContentsTitle />
      <div className="page-about-vision-container">
        <PageSectionWrapper>
          <ul className="page-about-vision-list">
            {vision.map((d, i) => (
              <PageAboutVisionItem key={d.key} category={d.category} name={d.name} index={i} />
            ))}
          </ul>
        </PageSectionWrapper>
      </div>
    </PageSectionContainer>
  );
}
