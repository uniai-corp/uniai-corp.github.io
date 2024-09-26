import PageAboutLocationAddress from "./Address";

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
    <div className="page-about-location-item">
      <header className="page-about-location-item-header">
        <PageAboutLocationAddress title={title} address={address} />
      </header>
      <div className="page-about-location-item-contents">
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
