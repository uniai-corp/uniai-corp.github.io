import PageSectionWrapper from "@/components/section/Wrapper";
import PageFooterLower from "./Lower";
import PageFooterUpper from "./Upper";

export default function PageFooter() {
  return (
    <footer id="pageFooter" className="page-footer">
      <PageSectionWrapper>
        <PageFooterUpper />
        <PageFooterLower />
        <div className="copyright">
          <p>Copyright &copy; UNiAI. All Rights Reserved.</p>
        </div>
      </PageSectionWrapper>
    </footer>
  );
}
