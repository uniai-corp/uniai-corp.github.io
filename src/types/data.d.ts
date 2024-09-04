type VisionListDataType = {
  key: string;
  category: string;
  name: string;
};

type PartnerListDataType = {
  key: string;
  name: string;
};

type PartnersCollection = {
  [key: string]: PartnerListDataType[];
};

type SolutionProductSummaryDataType = {
  classifyKey: string;
  category: string;
  name: string;
};

type SolutionProductFeatureDataType = {
  classifyKey: string;
  category: string;
  title: string;
  features: string[];
};
type SolutionProductFeaturePropsType = SolutionProductFeatureDataType & {
  itemIndex: number;
  isDetail: boolean;
  itemLength: number;
};

type SolutionProductFeatureDetailsPropsType = SolutionProductFeaturePropsType & {
  trigger: HTMLDivElement | null;
};
