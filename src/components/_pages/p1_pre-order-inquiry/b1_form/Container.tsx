import PageSectionWrapper from "@/components/section/Wrapper";

export default function PagePreOrderInquiryForm() {
  return (
    <div style={{ padding: `200px 0` }}>
      <PageSectionWrapper>
        <p style={{ fontSize: 48, fontWeight: 700, textAlign: "center", lineHeight: 1.4 }}>
          사전구매 입력 페이지가
          <br /> 곧 공개됩니다!
        </p>
      </PageSectionWrapper>
    </div>
  );
  // return (
  //   <iframe
  //     src="https://chickenmonger.com/inquiry"
  //     title="Pre-order Inquiry Form"
  //     width="100%"
  //     height="600"
  //     style={{ border: "none" }}
  //     allow="clipboard-write"
  //     loading="lazy"
  //     referrerPolicy="no-referrer"
  //   ></iframe>
  // );
}
