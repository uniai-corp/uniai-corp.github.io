import clsx from "clsx";

export default function PreOrderFormClickableLabel({
  className,
  title,
  selectorId,
  children,
}: {
  selectorId: string;
  title: string;
  children: React.ReactNode;
} & Partial<{
  className: string;
}>) {
  return (
    <label
      htmlFor={selectorId}
      className={clsx("pre-order-inquiry-clickable-label", className)}
      title={title}
      aria-label={title}
    >
      <div className="pre-order-inquiry-clickable">{children}</div>
      <span>{title}</span>
    </label>
  );
}
