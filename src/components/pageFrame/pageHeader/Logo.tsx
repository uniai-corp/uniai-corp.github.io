import { getImageProps } from "next/image";

export default function PageHeaderLogo() {
  const common = { alt: "UNiAI" };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 144,
    height: 40,
    src: "/img/common/logo_header_desktop.png",
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 108,
    height: 30,
    src: "/img/common/logo_header_tablet.png",
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 87,
    height: 24,
    src: "/img/common/logo_header_mobile.png",
  });

  return (
    <h1 className="page-header-logo">
      <a href="/">
        <figure>
          <picture>
            <source media="(min-width: 1280px)" srcSet={desktop} />
            <source media="(min-width: 768px)" srcSet={tablet} />
            <source srcSet={mobile} />
            <img {...rest} alt="UNiAI" style={{ width: "100%", height: "auto" }} />
          </picture>
        </figure>
      </a>
    </h1>
  );
}
