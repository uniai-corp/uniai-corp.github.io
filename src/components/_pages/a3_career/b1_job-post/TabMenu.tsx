import PageSectionWrapper from "@/components/section/Wrapper";
import { clsx } from "clsx";
import Link from "next/link";

export default function PageCareerTabMenu({ list }: { list: CareerTabMenuList[] }) {
  return (
    <div className="page-career-tab-menu-container">
      <PageSectionWrapper>
        <ul>
          {list.map(d => (
            <li
              key={d.routeKey}
              className={clsx("page-career-tab-menu-item", { selected: d.selected })}
            >
              <Link href={d.path}>
                <span>{d.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </PageSectionWrapper>
    </div>
  );
}
