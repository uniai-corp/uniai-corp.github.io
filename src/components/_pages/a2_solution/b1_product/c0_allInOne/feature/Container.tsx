import solution from "@/data/pages/solution";
import PageSolutionProductFeatureListItem from "./Item";

export default function PageSolutionProductFeatureContainer({
  categories,
  isDetail,
}: {
  categories: string[];
  isDetail: boolean;
}) {
  return (
    <div className="page-solution-product-feature-container">
      <ul className="page-solution-product-feature-list">
        {solution.feature
          .filter(({ category }) => categories.includes(category))
          .map((d, itemIndex) => (
            <PageSolutionProductFeatureListItem
              key={d.classifyKey}
              {...d}
              itemIndex={itemIndex}
              isDetail={isDetail}
              itemLength={
                solution.feature.filter(({ category }) => categories.includes(category)).length
              }
            />
          ))}
      </ul>
    </div>
  );
}
