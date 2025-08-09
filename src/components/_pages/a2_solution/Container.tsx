"use client";

import PageContainer from "@/components/page-frame/PageContainer";
import PageSolutionSystem from "./b0_system/Container";
import PageSolutionProduct from "./b1_product/Container";

export default function PageSolutionContainer() {
  return (
    <PageContainer>
      <PageSolutionSystem />
      <PageSolutionProduct />
      {/* <PageSolutionCustomerSupport /> */}
    </PageContainer>
  );
}
