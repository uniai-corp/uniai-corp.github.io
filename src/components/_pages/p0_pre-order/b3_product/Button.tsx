"use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

export default function PagePreOrderProductButton() {
  // const pathname = usePathname();

  // return (
  //   <Link href={`${pathname}/inquiry`} className="page-pre-order-product-button">
  //     <span>Pre-order</span>
  //   </Link>
  // );
  return (
    <button
      type="button"
      className="page-pre-order-product-button"
      onClick={() => {
        alert("사전구매 신청 페이지가 곧 공개됩니다.");
      }}
    >
      <span>Pre-order</span>
    </button>
  );
}
