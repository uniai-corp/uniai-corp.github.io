"use client";

import { useMemo } from "react";

import PageSolutionProductSummaryItem from "./Item";
import useLocale from "@/hooks/useLocale";

export default function PageSolutionProductSummaryList() {
  const { t } = useLocale();
  const summary = useMemo(
    (): SolutionProductSummaryDataType[] => [
      {
        classifyKey: "solution/product/summary/monitoring",
        category: "monitoring",
        name: t<string>("solution/product/allInOne/feature/control", "축사 모니터링과 제어"),
      },
      {
        classifyKey: "solution/product/summary/disease",
        category: "disease",
        name: t<string>("solution/product/allInOne/feature/disease", "질병 예측과 진단"),
      },
      {
        classifyKey: "solution/product/summary/weight",
        category: "weight",
        name: t<string>("solution/product/allInOne/feature/weight", "AI 자동 체중 측정, 예측"),
      },
      {
        classifyKey: "solution/product/summary/analysis",
        category: "analysis",
        name: t<string>("solution/product/allInOne/feature/analysis", "생육정보 입력, 분석"),
      },
    ],
    [t],
  );

  return (
    <ul className="page-solution-product-summary-list">
      {summary.map((d, i) => (
        <PageSolutionProductSummaryItem key={d.classifyKey} {...d} index={i} />
      ))}
    </ul>
  );
}
