import PageHeaderNavMenuContainer from "./MenuContainer";
import PageHeaderNavOpenButton from "./OpenButton";

export default function PageHeaderNavContainer() {
  return (
    <nav id="navContainer" className="nav-container">
      <PageHeaderNavOpenButton />
      <PageHeaderNavMenuContainer />
    </nav>
  );
}
