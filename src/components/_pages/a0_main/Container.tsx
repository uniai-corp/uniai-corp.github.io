import PageContainer from "@/components/pageFrame/PageContainer";
import PageMainVisualContainer from "./b0_visual/Container";
import PageMainTechContainer from "./b1_tech/Container";
import PageMainChickenMonger from "./b2_service/Container";

export default function PageMainContainer() {
  return (
    <PageContainer>
      <PageMainVisualContainer />
      <PageMainTechContainer />
      <PageMainChickenMonger />
    </PageContainer>
  );
}
