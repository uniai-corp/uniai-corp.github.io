import PageNavMenuContainer from "./menu/Container";
import PageNavOpenButton from "./OpenButton";

export default function PageNavContainer() {
  return (
    <nav className="page-nav-container" id="navContainer">
      <PageNavOpenButton />
      <PageNavMenuContainer />
    </nav>
  );
}
