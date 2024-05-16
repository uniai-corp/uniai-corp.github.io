import PageAboutVisual from "@/components/_pages/a1_about/b0_visual/Container";
import PageAboutCeo from "@/components/_pages/a1_about/b1_ceo/Container";
import PageAboutVision from "@/components/_pages/a1_about/b2_vision/Container";
import PageAboutPartners from "@/components/_pages/a1_about/b3_partners/Container";
import PageAboutLocation from "@/components/_pages/a1_about/b4_location/Container";

export default function PageAbout() {
  return (
    <>
      <PageAboutVisual />
      <PageAboutCeo />
      <PageAboutVision />
      <PageAboutPartners />
      <PageAboutLocation />
    </>
  );
}
