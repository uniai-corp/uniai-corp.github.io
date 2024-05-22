import PageMainTechIntroContainer from "./intro/Container";
import PageMainTechMedical from "./Medical";
import PageMainTechTransport from "./Transport";

export default function PageMainTechContainer() {
  return (
    <>
      <PageMainTechIntroContainer />
      <PageMainTechMedical />
      <PageMainTechTransport />
    </>
  );
}
