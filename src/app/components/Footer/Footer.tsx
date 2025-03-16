import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 py-4 my-5 bg-white/85 shadow-lg rounded-lg">
      <div className="w-full flex justify-between items-center px-4">
        <div className="flex items-center">
          <Image
            src="/logo-footer.png"
            alt="Логотип"
            width={220}
            height={170}
          />
        </div>
        <div className="text-center text-sm">
          <p>© 2015 Адвокат Кириченко & Партнёры</p>
          <p className="mt-2">
            Использование материалов в коммерческих целях допускается только с
            письменного разрешения автора материалов.
          </p>
        </div>
        <div className="text-right text-sm">
          <p>+38 (050) 011 45 58</p>
          <p>г. Киев, Печерский район</p>
        </div>
      </div>
    </footer>
  );
};
