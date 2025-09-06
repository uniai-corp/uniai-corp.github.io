import PageContainer from "@/components/page-frame/PageContainer";
import PagePreOrderVisual from "./b0_visual/Container";
import PagePreOrderIntroContainer from "./b1_intro/Container";
import PagePreOrderFeatureContainer from "./b2_feature/Container";
import PagePreOrderProductContainer from "./b3_product/Container";
import PageTopButton from "@/components/page-frame/TopButton";

import "@/styles/pages/pre-order.scss";

export default function PagePreOrderContainer() {
  return (
    <PageContainer>
      <PagePreOrderVisual />
      <PagePreOrderIntroContainer />
      <PagePreOrderFeatureContainer />
      <PagePreOrderProductContainer />
      <PageTopButton />
    </PageContainer>
  );
}
