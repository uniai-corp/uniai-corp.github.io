import PageContainer from "@/components/page-frame/PageContainer";
import PagePreOrderVisual from "./b0_visual/Container";
import PageTopButton from "@/components/page-frame/TopButton";
import PagePreOrderInquiryFormContainer from "./b1_form/Container";

import "@/styles/pages/pre-order.scss";

export default function PagePreOrderInquiryContainer() {
  return (
    <PageContainer>
      <PagePreOrderVisual />
      <PagePreOrderInquiryFormContainer />
      <PageTopButton />
    </PageContainer>
  );
}
