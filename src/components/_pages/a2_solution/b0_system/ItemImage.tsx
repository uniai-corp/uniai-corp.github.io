import { getImageProps } from "next/image";

export default function PageSolutionSystemItemImage({
  index,
  sizes,
  alt,
}: {
  index: number;
} & SolutionSystemItemPropsType) {
  const common = { alt };

  const {
    props: { srcSet: desktopLarge },
  } = getImageProps({
    ...common,
    width: sizes.desktop_large[0],
    height: sizes.desktop_large[1],
    src: `/img/solution/system/0${index}_desktop_large.png`,
  });

  const {
    props: { srcSet: desktopMedium },
  } = getImageProps({
    ...common,
    width: sizes.desktop_medium[0],
    height: sizes.desktop_medium[1],
    src: `/img/solution/system/0${index}_desktop_medium.png`,
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: sizes.tablet[0],
    height: sizes.tablet[1],
    src: `/img/solution/system/0${index}_tablet.png`,
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: sizes.mobile[0],
    height: sizes.mobile[1],
    src: `/img/solution/system/0${index}_mobile.png`,
    priority: true,
  });

  return (
    <figure>
      <picture>
        <source media="(min-width: 1340px)" srcSet={desktopLarge} />
        <source media="(min-width: 1280px)" srcSet={desktopMedium} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source srcSet={mobile} />
        <img {...rest} alt={alt} style={{ width: "100%", height: "auto" }} />
      </picture>
    </figure>
  );
}
