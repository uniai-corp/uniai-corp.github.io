type CEODetailDataType = {
  classifyKey: string;
  title: React.ReactNode;
  list: (string | React.ReactNode)[];
};
type CEODataType = {
  [category: string]: CEODetailDataType;
};

type SolutionSystemItemPropsType = {
  desc: string;
  alt: string;
  sizes: {
    desktop_large: [number, number];
    desktop_medium: [number, number];
    tablet: [number, number];
    mobile: [number, number];
  };
};
type SolutionSystemDataType = {
  key: string;
  title: string | React.ReactNode;
} & SolutionSystemItemPropsType;
