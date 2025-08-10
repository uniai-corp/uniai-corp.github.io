import PageContainer from "@/components/page-frame/PageContainer";
import PageMainVisualContainer from "./b0_visual/Container";
import PageMainTechContainer from "./b1_tech/Container";
import PageMainChickenMonger from "./b2_service/Container";

import "@/styles/pages/main.scss";

export default function PageMainContainer() {
  return (
    <PageContainer>
      <PageMainVisualContainer />
      <PageMainTechContainer />
      <PageMainChickenMonger />
    </PageContainer>
  );
}
