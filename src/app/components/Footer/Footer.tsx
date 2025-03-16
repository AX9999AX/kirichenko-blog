import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 py-6 my-6 bg-white/90 shadow-xl rounded-lg border-t-2 border-gray-200">
      <div className="flex flex-col lg:flex-row justify-between items-center px-4">
        <div className="hidden lg:flex items-center mb-4 lg:mb-0">
          <Image
            src="/logo-footer.png"
            alt="Логотип"
            width={220}
            height={170}
          />
        </div>
        <div className="text-center text-sm text-gray-700">
          <p className="font-semibold text-lg text-gray-800">
            © 2025 Адвокат Кириченко & Партнёры
          </p>
          <p className="mt-2 text-gray-600">
            Использование материалов в коммерческих целях допускается только с
            письменного разрешения автора материалов.
          </p>
          <p className="block lg:hidden mt-2 text-gray-600">
            +38 (050) 011 45 58
          </p>
          <p className="block lg:hidden mt-2 text-gray-600">
            г. Киев, Печерский район
          </p>
        </div>
        <div className="hidden lg:block text-right text-sm font-semibold text-gray-800">
          <p>+38 (050) 011 45 58</p>
          <p>г. Киев, Печерский район</p>
        </div>
      </div>
    </footer>
  );
};
