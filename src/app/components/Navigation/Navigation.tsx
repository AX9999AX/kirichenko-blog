export const Navigation = () => {
  return (
    <nav
      className={`w-full max-w-7xl mx-auto px-4 py-6 my-5 bg-white/85 shadow-lg rounded-lg lg:block hidden`}
    >
      <div className="w-full mx-auto flex justify-center items-center">
        <ul className="flex space-x-8 text-lg">
          <li>
            <a
              href="#my-services"
              className="text-white bg-[#481E00] border border-[#481E00] p-2 uppercase text-xl"
            >
              Мои услуги
            </a>
          </li>
          <li>
            <a
              href="#my-career"
              className="text-white bg-[#481E00] border border-[#481E00] p-2 uppercase text-xl"
            >
              Моя карьера
            </a>
          </li>
          <li>
            <a
              href="#my-offers"
              className="text-white bg-[#481E00] border border-[#481E00] p-2 uppercase text-xl"
            >
              Мои предложения
            </a>
          </li>
          <li>
            <a
              href="#my-books"
              className="text-white bg-[#481E00] border border-[#481E00] p-2 uppercase text-xl"
            >
              Мои книги
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
