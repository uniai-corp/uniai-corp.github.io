import PageMainVisualContainer from "./b0_visual/Container";
import PageMainTechContainer from "./b1_tech/Container";
import PageMainChickenMonger from "./b2_chicken_monger/Container";

export default function PageMainContainer({ locale }: { locale: "ko" | "en" }) {
  console.log(`[page/main] ${locale}`);
  return (
    <>
      <PageMainVisualContainer />
      <PageMainTechContainer />
      <PageMainChickenMonger />
    </>
  );
}
