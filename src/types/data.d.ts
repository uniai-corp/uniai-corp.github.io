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

type SolutionSystemItemPropsType = {
  title: string;
  desc: string;
  sizes: {
    desktop_large: [number, number];
    desktop_medium: [number, number];
    tablet: [number, number];
    mobile: [number, number];
  };
};
type SolutionSystemDataType = {
  key: string;
} & SolutionSystemItemPropsType;

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
};

type SolutionProductFeatureDetailsPropsType = SolutionProductFeaturePropsType & {
  trigger: HTMLDivElement | null;
};
