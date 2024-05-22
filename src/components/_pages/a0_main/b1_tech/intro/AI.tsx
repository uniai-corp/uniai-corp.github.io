import { getImageProps } from "next/image";

export default function PageTechIntroAI() {
  const common = { alt: "AI" };

  const {
    props: { srcSet: desktopLarge },
  } = getImageProps({
    ...common,
    width: 1062,
    height: 674,
    src: "/img/main/tech/intro/ai_desktop_large.png",
  });

  const {
    props: { srcSet: desktopMedium },
  } = getImageProps({
    ...common,
    width: 850,
    height: 539,
    src: "/img/main/tech/intro/ai_desktop_medium.png",
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 531,
    height: 337,
    src: "/img/main/tech/intro/ai_tablet.png",
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 360,
    height: 337,
    src: "/img/main/tech/intro/ai_mobile.png",
  });
  return (
    <div className="bg-object-container">
      <figure className="bg-object">
        <picture>
          <source media="(min-width: 1340px)" srcSet={desktopLarge} />
          <source media="(min-width: 1280px)" srcSet={desktopMedium} />
          <source media="(min-width: 360px)" srcSet={tablet} />
          <source srcSet={mobile} />
          <img {...rest} alt="AI" style={{ width: "100%", height: "auto" }} />
        </picture>
      </figure>
    </div>
  );
}
