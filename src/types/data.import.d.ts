import { ReactNode } from "react";

type CEODetailDataType = {
  classifyKey: string;
  title: string;
  list: (string | ReactNode)[];
};
type CEODataType = {
  [category: string]: CEODetailDataType;
};
