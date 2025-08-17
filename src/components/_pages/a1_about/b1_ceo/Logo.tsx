import { forwardRef } from "react";

const PageAboutCEOHeaderLogo = forwardRef((props, ref: React.ForwardedRef<HTMLElement | null>) => {
  return (
    <figure ref={ref}>
      <picture>
        <img src="/img/logo/logo-about.svg" alt="UNiAI" />
      </picture>
    </figure>
  );
});

export default PageAboutCEOHeaderLogo;
