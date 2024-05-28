import PageAboutPartnersCategoryItem from "./CategoryItem";

export default function PageAboutPartnersCategoryList({
  title,
  list,
}: {
  title: string;
  list: PartnerListDataType[];
}) {
  return (
    <div className="page-about-partners-item">
      <header className="page-about-partners-category-title">
        <h4>{title}</h4>
        <figure className="page-about-partners-category-title-deco">
          <div className="large-circle"></div>
          <div className="chain-line">
            <span className="line"></span>
          </div>
        </figure>
      </header>
      {list && (
        <ul className="page-about-partners-category-list">
          {list.map(d => (
            <PageAboutPartnersCategoryItem key={d.key} classify={d.key} name={d.name} />
          ))}
        </ul>
      )}
    </div>
  );
}
