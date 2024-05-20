export default function PageAboutLocationItem({
  title,
  address,
  src,
}: {
  title: string;
  address: string;
  src: string;
}) {
  return (
    <div className="location-item">
      <header className="location-header">
        <dl>
          <dt>{title}</dt>
          <dd>{address}</dd>
        </dl>
      </header>
      <div className="location-contents">
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`유니아이 ${title} 위치`}
        ></iframe>
      </div>
    </div>
  );
}
