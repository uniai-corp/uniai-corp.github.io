import Link from "next/link";

export default function PageCareerTabMenu({ list }: { list: CareerTabMenuList[] }) {
  return (
    <div>
      <ul>
        {list.map(d => (
          <li key={d.routeKey}>
            <Link href={d.path}>
              <span>{d.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
