"use client";

import { forwardRef } from "react";
import clsx from "clsx";
import PageSectionContainer from "../section/Container";
import PageSectionWrapper from "../section/Wrapper";

const PageSubVisual = forwardRef(
  (
    {
      className,
      children,
    }: {
      children: React.ReactNode;
    } & Partial<{
      className: string;
    }>,
    ref: React.ForwardedRef<HTMLElement | null>,
  ) => {
    return (
      <PageSectionContainer className={clsx("page-sub-visual", className)} ref={ref}>
        <figure className="bg">
          <picture>
            <img
              src="/renew/career/sub-visual.jpg"
              alt="Sub Page Visual Background"
              style={{ width: "100%", height: "100%" }}
            />
          </picture>
        </figure>
        <div className="cover">
          <PageSectionWrapper>{children}</PageSectionWrapper>
        </div>
      </PageSectionContainer>
    );
  },
);

export default PageSubVisual;
