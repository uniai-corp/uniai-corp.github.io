import Image from "next/image";

export default function PageAboutVisionItem({
  category,
  name,
}: {
  category: string;
  name: string;
}) {
  return (
    <figure className="page-about-vision-item">
      <Image
        src={`/img/about/vision/${category}.png`}
        alt={category}
        width={140}
        height={140}
      />
      <figcaption>{name}</figcaption>
    </figure>
  );
}
