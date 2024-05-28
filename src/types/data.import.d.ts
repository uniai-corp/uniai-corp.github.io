import { ReactNode } from "react";

type CEODetailDataType = {
  classifyKey: string;
  title: string;
  list: (string | ReactNode)[];
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
  title: string | ReactNode;
} & SolutionSystemItemPropsType;
