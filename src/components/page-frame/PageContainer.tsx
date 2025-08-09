import PageFooter from "../page-frame/page-footer/Container";
import PageHeader from "../page-frame/page-header/Container";
import PageScrollContainer from "../page-frame/PageScrollContainer";

export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <main id="pageContainer" className="page-container">
      <PageScrollContainer>
        <PageHeader />
        {children}
        <PageFooter />
      </PageScrollContainer>
    </main>
  );
}
