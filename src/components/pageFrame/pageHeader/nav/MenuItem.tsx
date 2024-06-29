export default function PageHeaderNavItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a className="nav-button" href={href}>
      {children}
    </a>
  );
}
