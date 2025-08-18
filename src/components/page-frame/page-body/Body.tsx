export default function PageBody({ children }: { children: React.ReactNode }) {
  return (
    <div id="pageBody" className="page-body">
      {children}
    </div>
  );
}
