import PageMainFarmaid from "@/components/_pages/a0_main/b2_farmaid/Container";
import PageMainTechContainer from "@/components/_pages/a0_main/b1_tech/Container";
import PageMainVisualContainer from "@/components/_pages/a0_main/b0_visual/Container";

export default function PageMain() {
  return (
    <>
      <PageMainVisualContainer />
      <PageMainTechContainer />
      <PageMainFarmaid />
    </>
  );
}
