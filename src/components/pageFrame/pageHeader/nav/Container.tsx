import PageHeaderNavMenuContainer from "./Menu";
import PageHeaderNavOpenButton from "./OpenButton";

export default function PageHeaderNavContainer() {
  return (
    <nav id="navContainer" className="page-nav-container">
      <PageHeaderNavOpenButton />
      <PageHeaderNavMenuContainer />
    </nav>
  );
}
