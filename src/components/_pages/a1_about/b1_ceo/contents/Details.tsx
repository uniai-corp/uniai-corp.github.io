"use client";

import useLocale from "@/hooks/useLocale";
import PageAboutCEODetailItem from "./DetailItem";
import { useMemo } from "react";

export default function PageAboutCEODetails() {
  const { t } = useLocale();
  const ceo = useMemo(
    (): CEODataType => ({
      edu: {
        classifyKey: "about/ceo/edu",
        title: t("about/ceo/edu/title", "학력"),
        list: [
          <>
            <strong>{t("about/ceo/edu/0/university", "서울대학교")}</strong>
            <span>{t("about/ceo/edu/0/study", "기계항공공학부 학사")}</span>
          </>,
          <>
            <strong>{t("about/ceo/edu/1/university", "University of Michigan")}</strong>
            <span>{t("about/ceo/edu/1/study", "기계공학과 (로봇) 석사")}</span>
          </>,
          <>
            <strong>{t("about/ceo/edu/2/university", "한국과학기술원 (KAIST)")}</strong>
            <span>{t("about/ceo/edu/2/study", "인공지능, 로봇 박사")}</span>
          </>,
        ],
      },
      career: {
        classifyKey: "about/ceo/career",
        title: t("about/ceo/career/title", "경력"),
        list: [
          "Aerospace Eng. @GATEC",
          "Robot/AI Mech. Eng. @ U of Michigan",
          t("about/ceo/career/desc/2", "2021.01. - 현재 유니아이 기술개발 총괄 대표이사"),
        ],
      },
      expert: {
        classifyKey: "about/ceo/expert",
        title: t("about/ceo/expert/title", "전문분야"),
        list: [
          "Computer vision object detection algorithms",
          "Anomaly detection algorithms",
          "Development of bipedal robot walking gait algorithms",
        ],
      },
    }),
    [t],
  );

  return (
    <div className="page-about-ceo-details">
      <PageAboutCEODetailItem {...ceo.edu} />
      <PageAboutCEODetailItem {...ceo.career} />
      <PageAboutCEODetailItem {...ceo.expert} />
    </div>
  );
}
