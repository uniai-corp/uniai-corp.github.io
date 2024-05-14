import Image from "next/image";
import Link from "next/link";

export default function PageHeaderLogo() {
  return (
    <h1 className="page-header-logo">
      <Link href="/">
        <figure>
          <Image src="/img/logo.svg" alt="UNIAi" width={144} height={40} />
        </figure>
      </Link>
    </h1>
  );
}
