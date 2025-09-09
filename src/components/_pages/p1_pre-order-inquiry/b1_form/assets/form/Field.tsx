import clsx from "clsx";

export default function PreOrderFormField({
  title,
  required,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
} & Partial<{
  required: boolean;
}>) {
  return (
    <div className={clsx("pre-order-inquiry-field-container")}>
      <h4 className={clsx("pre-order-inquiry-field-title", { required })}>
        {typeof title === "string" ? <span>{title || "-"}</span> : title}
      </h4>
      <div className="pre-order-inquiry-field-body">{children}</div>
    </div>
  );
}
