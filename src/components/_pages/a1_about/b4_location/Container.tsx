import PageSectionContainer from "@/components/section/Container";
import PageSectionHeader from "@/components/section/Header";
import PageSectionHeaderTitleContainer from "@/components/section/Title";
import PageSectionWrapper from "@/components/section/Wrapper";
import PageAboutLocationItem from "./Item";

export default function PageAboutLocation() {
  return (
    <PageSectionContainer className="page-about-location">
      <PageSectionHeader>
        <PageSectionHeaderTitleContainer title="location" />
      </PageSectionHeader>
      <PageSectionWrapper>
        <div className="location-container">
          <PageAboutLocationItem
            title="본사"
            address="대전광역시 유성구 대덕대로 593 대덕테크비즈센터 803-1호"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.9529352311324!2d127.37527777647422!3d36.386133372368114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654a2144a75e57%3A0x1a0a9b318349102f!2z64yA7KCE6rSR7Jet7IucIOycoOyEseq1rCDrjIDrjZXrjIDroZwgNTkz!5e0!3m2!1sko!2skr!4v1715843170828!5m2!1sko!2skr"
          />
          <PageAboutLocationItem
            title="성남지사"
            address="경기 성남시 수정구 대왕판교로 815 기업지원허브 835호"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.988353543341!2d127.09731217651269!3d37.41375017207871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca793cdccad0b%3A0x50347f7afd9c7f49!2z6rK96riw64-EIOyEseuCqOyLnCDsiJjsoJXqtawg64yA7JmV7YyQ6rWQ66GcIDgxNQ!5e0!3m2!1sko!2skr!4v1715844283971!5m2!1sko!2skr"
          />
        </div>
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
