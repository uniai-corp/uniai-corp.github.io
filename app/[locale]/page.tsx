import PageMainContainer from "@/components/_pages/a0_main/Container";
import { localeSegment } from "@/data/locale";

export async function generateStaticParams() {
  return localeSegment;
}
export default function PageMain() {
  return <PageMainContainer />;
}
