import PageSectionContainer from "@/components/section/Container";
import PageSectionHeader from "@/components/section/Header";
import PageSectionHeaderTitleContainer from "@/components/section/Title";
import PageSectionWrapper from "@/components/section/Wrapper";
import PageAboutVisionItem from "./Item";

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
      <PageSectionHeader>
        <PageSectionHeaderTitleContainer title="vision" deco={true} />
      </PageSectionHeader>
      <PageSectionWrapper>
        <div className="vision-container">
          <div className="vision-title">
            <h3>
              필요한 데이터로 이 세상에 단 하나뿐인 <br />
              인공지능 혁신을 만듭니다.
            </h3>
            <p>유니아이의 시작</p>
          </div>
          <div className="vision-list">
            {vision.map(d => (
              <PageAboutVisionItem
                key={d.key}
                category={d.category}
                name={d.name}
              />
            ))}
          </div>
        </div>
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
