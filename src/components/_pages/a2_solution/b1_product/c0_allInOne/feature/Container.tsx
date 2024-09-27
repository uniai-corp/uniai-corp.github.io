"use client";

import { useMemo } from "react";
import PageSolutionProductFeatureListItem from "./Item";
import useLocale from "@/hooks/useLocale";

export default function PageSolutionProductFeatureContainer({
  categories,
  isDetail,
}: {
  categories: string[];
  isDetail: boolean;
}) {
  const { t } = useLocale();

  const feature = useMemo(
    (): SolutionProductFeatureDataType[] => [
      {
        classifyKey: "solution/product/feature/feeding",
        category: "feeding",
        title: t<string>("solution/product/feature/feeding/title", "사양관리"),
        features: [
          t("solution/product/feature/feeding/desc/0", "IoT 통합 환경관리 시스템"),
          t("solution/product/feature/feeding/desc/1", "실시간 IoT 센싱 모니터링"),
          t("solution/product/feature/feeding/desc/2", "편의성/안정성"),
          t("solution/product/feature/feeding/desc/3", "개체 상태 분석"),
          t("solution/product/feature/feeding/desc/4", "계사 내/외부 환경 분석"),
          t("solution/product/feature/feeding/desc/5", "통합분석 (A.I, IoT, 생육정보 등)"),
        ],
      },
      {
        classifyKey: "solution/product/feature/weight",
        category: "weight",
        title: t<string>("solution/product/feature/weight/title", "체중관리"),
        features: [
          t("solution/product/feature/weight/desc/0", "무게 추정 시스템"),
          t("solution/product/feature/weight/desc/1", "실시간 체중(분포도) 분석"),
          t("solution/product/feature/weight/desc/2", "체중 변화 예측"),
          t("solution/product/feature/weight/desc/3", "체중 분포도 예측"),
          t("solution/product/feature/weight/desc/4", "농가 생산성 예측"),
          t("solution/product/feature/weight/desc/5", "출하 관리"),
        ],
      },
      {
        classifyKey: "solution/product/feature/disease",
        category: "disease",
        title: t<string>("solution/product/feature/disease/title", "질병관리"),
        features: [
          t("solution/product/feature/disease/desc/0", "가축 건강상태 유지"),
          t("solution/product/feature/disease/desc/1", "인공지능 분석 시스템"),
          t("solution/product/feature/disease/desc/2", "질병 예측 시스템"),
          t("solution/product/feature/disease/desc/3", "이상감지 알림"),
          t("solution/product/feature/disease/desc/4", "실시간 건강 모니터링"),
          t("solution/product/feature/disease/desc/5", "시계열 데이터 분석"),
          t("solution/product/feature/disease/desc/6", "행동 분류 분석"),
          t("solution/product/feature/disease/desc/7", "군집 분포 패턴 분석"),
        ],
      },
      {
        classifyKey: "solution/product/feature/control",
        category: "control",
        title: t<string>("solution/product/feature/control/title", "통합제어"),
        features: [
          t("solution/product/feature/control/desc/0", "통합관제 및 자동제어 시스템"),
          t("solution/product/feature/control/desc/1", "인공지능 최적화 시스템"),
          t("solution/product/feature/control/desc/2", "농가 데이터 안정성 확보"),
          t("solution/product/feature/control/desc/3", "실시간 IoT 모니터링"),
          t("solution/product/feature/control/desc/4", "계열농가 출하 관리"),
          t("solution/product/feature/control/desc/5", "사육현황 모니터링"),
          t("solution/product/feature/control/desc/6", "농장 위생/방역관리"),
        ],
      },
    ],
    [t],
  );

  return (
    <div className="page-solution-product-feature-container">
      <ul className="page-solution-product-feature-list">
        {feature
          .filter(({ category }) => categories.includes(category))
          .map((d, itemIndex) => (
            <PageSolutionProductFeatureListItem
              key={d.classifyKey}
              {...d}
              itemIndex={itemIndex}
              isDetail={isDetail}
              itemLength={feature.filter(({ category }) => categories.includes(category)).length}
            />
          ))}
      </ul>
    </div>
  );
}
