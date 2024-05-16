import Image from "next/image";
import Link from "next/link";

export default function PageFooterUpper() {
  return (
    <div className="page-footer-section page-footer-upper">
      <div className="footer-upper-item logo-box">
        <figure>
          <Image
            src="/img/common/logo_footer.svg"
            width={158}
            height={44}
            alt="UNiAI"
          />
          <figcaption>주식회사 유니아이</figcaption>
        </figure>
      </div>
      <div className="footer-upper-item inquiry-box">
        <Link href="/cs" className="radius-button inquiry-button">
          <span>문의하기</span>
        </Link>
      </div>
    </div>
  );
}
