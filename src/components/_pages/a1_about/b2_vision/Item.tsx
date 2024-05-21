import { getImageProps } from "next/image";

export default function PageAboutVisionItem({
  category,
  name,
}: {
  category: string;
  name: string;
}) {
  const common = { alt: name };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 140,
    height: 140,
    src: `/img/about/vision/${category}_desktop.png`,
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 100,
    height: 100,
    src: `/img/about/vision/${category}_mobile.png`,
  });

  return (
    <li>
      <figure className="page-about-vision-item">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <source srcSet={mobile} />
          <img {...rest} alt={name} style={{ width: "100%", height: "auto" }} />
        </picture>
      </figure>
      <h4>{name}</h4>
    </li>
  );
}
