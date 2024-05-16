import Image from "next/image";

export default function PageSolutionSystemItem({
  index,
  title,
  desc,
}: {
  index: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="page-solution-system-item-wrapper">
      <div className="info-container">
        <header className="info-header">
          <figure className="numbering">
            <span>0{index}</span>
          </figure>
          <h3>{title}</h3>
        </header>
        <p>{desc}</p>
      </div>
      <div className="img-container">
        <figure>
          <Image
            src={`/img/solution/system/0${index}.png`}
            alt={title}
            fill={true}
          />
        </figure>
      </div>
    </div>
  );
}
