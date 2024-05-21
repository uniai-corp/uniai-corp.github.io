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
  key: string;
  category: string;
  name: string;
  width: number;
  height: number;
};

type SolutionProductFeatureDataType = {
  key: string;
  category: string;
  title: string;
  features: string[];
};
