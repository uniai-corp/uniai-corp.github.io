import PageNavMenuList from "./List";
import PageNavPreOrderButton from "./PreOrder";

export default function PageNavWrapper() {
  return (
    <div className="page-nav-wrapper">
      <PageNavPreOrderButton />
      <PageNavMenuList />
    </div>
  );
}
