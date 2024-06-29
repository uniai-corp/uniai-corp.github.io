export default function PageSectionWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`page-section-wrapper ${className ? className : ""}`}>{children}</div>;
}
