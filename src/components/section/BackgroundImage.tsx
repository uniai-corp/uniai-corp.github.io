export default function SectionBackgroundImage({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <figure className={`bg ${className ? className : ""}`}>{children}</figure>;
}
