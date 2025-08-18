// import Link from "next/link";

export default function PageNavPreOrderButton() {
  return (
    <button
      type="button"
      className="page-nav-pre-order-button"
      onClick={() => alert("페이지 준비중입니다.")}
    >
      <span>V2 사전구매</span>
    </button>
  );
}
