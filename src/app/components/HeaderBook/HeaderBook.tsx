import Link from "next/link";
import Image from "next/image";

export const HeaderBook = () => {
  return (
    <header className="w-full max-w-7xl mx-auto flex justify-center items-center pt-4 bg-transparent shadow-md">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Логотип" width={220} height={70} />
        </Link>
      </div>
    </header>
  );
};
