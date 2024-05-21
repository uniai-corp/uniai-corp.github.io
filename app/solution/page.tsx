import { Metadata } from "next";

import PageSolutionSystem from "@/components/_pages/a2_solution/b0_system/Container";
import PageSolutionProduct from "@/components/_pages/a2_solution/b1_product/Container";

export const metadata: Metadata = {
  title: "솔루션",
};

export default function PageSolution() {
  return (
    <>
      <PageSolutionSystem />
      <PageSolutionProduct />
      {/* <PageSolutionCustomerSupport /> */}
    </>
  );
}
