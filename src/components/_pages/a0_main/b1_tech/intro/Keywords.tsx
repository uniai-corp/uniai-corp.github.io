import { getImageProps } from "next/image";

export default function PageTechIntroKeywords() {
  const common = { alt: "AI 키워드" };

  const {
    props: { srcSet: desktopLarge },
  } = getImageProps({
    ...common,
    src: "/img/main/tech/intro/text_desktop_large.png",
  });

  const {
    props: { srcSet: desktopMedium, ...rest },
  } = getImageProps({
    ...common,
    src: "/img/main/tech/intro/text_desktop_medium.png",
  });

  return (
    <div className="bg-object-container">
      <figure className="bg-object">
        <picture>
          <source media="(min-width: 1340px)" srcSet={desktopLarge} />
          <source media="(min-width: 1280px)" srcSet={desktopMedium} />
          <img {...rest} alt="AI" style={{ width: "100%", height: "auto" }} />
        </picture>
      </figure>
    </div>
  );
}
