import PageHeaderNavMenuContainer from "./MenuContainer";
import PageHeaderNavOpenButton from "./OpenButton";

export default function PageHeaderNavContainer() {
  return (
    <nav id="navContainer" className="page-nav-container">
      <PageHeaderNavOpenButton />
      <PageHeaderNavMenuContainer />
    </nav>
  );
}
