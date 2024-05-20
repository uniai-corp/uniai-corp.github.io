import { getImageProps } from "next/image";

export default function PageFooterUpper() {
  const common = { alt: "UNiAI" };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 158,
    height: 44,
    src: "/img/common/logo_footer_desktop.png",
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 120,
    height: 34,
    src: "/img/common/logo_footer_mobile.png",
  });

  return (
    <div className="page-footer-section page-footer-upper">
      <div className="footer-upper-item logo-box">
        <figure>
          <picture>
            <source media="(min-width: 1280px)" srcSet={desktop} />
            <source srcSet={mobile} />
            <img
              {...rest}
              alt="UNiAI"
              style={{ width: "100%", height: "auto" }}
            />
          </picture>
        </figure>
        <figcaption>주식회사 유니아이</figcaption>
      </div>
    </div>
  );
}
