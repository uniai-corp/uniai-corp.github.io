import PageScrollContainer from "../page-frame/PageScrollContainer";
import PageHeader from "./page-header/Container";
import PageFooter from "../page-frame/page-footer/Container";

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
