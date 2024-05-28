import PageAboutCEODetailItem from "./DetailItem";
import { CEODataType } from "@/types/data.import";

export default function PageAboutCEODetails() {
  const ceo: CEODataType = {
    edu: {
      classifyKey: "about/ceo/edu",
      title: "학력",
      list: [
        <>
          <strong>서울대학교</strong> <span>기계항공공학부 학사</span>
        </>,
        <>
          <strong>University of Michigan</strong>
          <span>기계공학과 (로봇) 석사</span>
        </>,
        <>
          <strong>한국과학기술원 (KAIST)</strong>
          <span>인공지능, 로봇 박사</span>
        </>,
      ],
    },
    career: {
      classifyKey: "about/ceo/career",
      title: "경력",
      list: [
        "Aerospace Eng. @GATEC",
        "Robot/AI Mech. Eng. @ U of Michigan",
        "2021.01. - 현재 유니아이 기술개발 총괄 대표이사",
      ],
    },
    expert: {
      classifyKey: "about/ceo/expert",
      title: "전문분야",
      list: [
        "Computer vision object detection algorithms",
        "Anomaly detection algorithms",
        "Development of bipedal robot walking gait algorithms",
      ],
    },
  };

  return (
    <div className="page-about-ceo-details">
      <PageAboutCEODetailItem {...ceo.edu} />
      <PageAboutCEODetailItem {...ceo.career} />
      <PageAboutCEODetailItem {...ceo.expert} />
    </div>
  );
}
