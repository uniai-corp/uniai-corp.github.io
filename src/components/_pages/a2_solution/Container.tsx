import PageSolutionSystem from "./b0_system/Container";
import PageSolutionProduct from "./b1_product/Container";

export default function PageSolutionContainer({ locale }: { locale: "ko" | "en" }) {
  console.log(`[page/solution] ${locale}`);
  return (
    <>
      <PageSolutionSystem />
      <PageSolutionProduct />
      {/* <PageSolutionCustomerSupport /> */}
    </>
  );
}
