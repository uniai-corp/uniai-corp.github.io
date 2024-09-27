import PageFooter from "./pageFooter/Container";
import PageHeader from "./pageHeader/Container";
import PageScrollContainer from "./PageScrollContainer";

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
