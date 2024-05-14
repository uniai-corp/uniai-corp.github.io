import PageFooterLower from "./Lower";
import PageFooterUpper from "./Upper";

export default function PageFooter() {
  return (
    <footer className="page-footer">
      <PageFooterUpper />
      <PageFooterLower />
      <div className="copyright">
        <p>Copyright &copy; UNIAi. All Right Reserved.</p>
      </div>
    </footer>
  );
}
