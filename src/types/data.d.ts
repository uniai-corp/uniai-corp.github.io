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

type SolutionSystemDataType = {
  key: string;
  title: string;
  desc: string;
};

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
