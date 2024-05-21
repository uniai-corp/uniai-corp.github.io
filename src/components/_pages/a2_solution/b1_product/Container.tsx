import { getImageProps } from "next/image";

import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";
import PageSolutionProductSummary from "./Summary";
import PageSolutionProductFeature from "./Feature";

export default function PageSolutionProduct() {
  const common = { alt: "팜에이드" };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 540,
    height: 63,
    src: `/img/solution/product/logo_desktop.png`,
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 300,
    height: 35,
    src: `/img/solution/product/logo_mobile.png`,
  });

  return (
    <PageSectionContainer className="page-solution-product">
      <PageSectionWrapper>
        <header className="page-solution-product-header">
          <h2>스마트 축사 통합 관제 시스템</h2>
          <div className="page-solution-product-logo">
            <figure>
              <picture>
                <source media="(min-width: 768px)" srcSet={desktop} />
                <source srcSet={mobile} />
                <img {...rest} alt="팜에이드" style={{ width: "100%", height: "auto" }} />
              </picture>
            </figure>
          </div>
        </header>
        <PageSolutionProductSummary />
        <PageSolutionProductFeature />
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
