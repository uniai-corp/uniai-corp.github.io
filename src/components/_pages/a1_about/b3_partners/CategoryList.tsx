import Image from "next/image";

export default function PageAboutPartnersCategoryList({
  title,
  list,
}: {
  title: string;
  list: PartnerListDataType[];
}) {
  return (
    <div className="page-about-partners-category-list">
      <header className="category-title">{title}</header>
      {list && (
        <ul>
          {list.map(d => (
            <li key={d.key}>
              <figure>
                <Image
                  src={`/img/about/${d.key}.jpg`}
                  alt={d.name}
                  width={140}
                  height={40}
                />
              </figure>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
