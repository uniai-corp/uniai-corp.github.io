import { getImageProps } from "next/image";
import Link from "next/link";

export default function PageHeaderLogo() {
  const common = { alt: "UNiAI" };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 144,
    height: 40,
    src: "/img/common/logo_header_desktop.svg",
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 108,
    height: 30,
    src: "/img/common/logo_header_tablet.svg",
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 87,
    height: 24,
    src: "/img/common/logo_header_mobile.svg",
  });

  return (
    <h1 className="page-header-logo">
      <Link href="/">
        <figure>
          <picture>
            <source media="(min-width: 1280px)" srcSet={desktop} />
            <source media="(min-width: 768px)" srcSet={tablet} />
            <source srcSet={mobile} />
            <img {...rest} alt="UNiAI" />
            {/* <Image
              src="/img/common/logo_header_mobile.svg"
              alt="UNiAI"
              width={87}
              height={24}
            /> */}
          </picture>
        </figure>
      </Link>
    </h1>
  );
}
