import Link from "next/link";

export default function PageNavPreOrderButton() {
  return (
    <Link className="page-nav-pre-order-button" href="/pre-order">
      <span>V2 사전구매</span>
    </Link>
  );
}
