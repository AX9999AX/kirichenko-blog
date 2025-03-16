import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "./MobileNav";

export const Header = () => {
  return (
    <header className="w-full max-w-7xl mx-auto flex justify-between items-center pt-4 bg-transparent shadow-md">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Логотип" width={220} height={70} />
        </Link>
      </div>
      <a
        href="tel:+380500114558"
        className="hidden lg:block text-2xl font-semibold text-white"
      >
        +38 (050) 011 45 58
      </a>
      <MobileNav />
    </header>
  );
};
