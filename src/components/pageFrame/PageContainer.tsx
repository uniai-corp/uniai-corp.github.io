export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <main id="pageContainer" className="page-container">
      {children}
    </main>
  );
}
