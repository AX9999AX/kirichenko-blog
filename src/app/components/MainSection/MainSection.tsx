export const MainSection = () => {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto mt-2 text-2xl flex justify-end text-white font-semibold">
        <div className="inline-block border-t-2 pt-2 border-white text-center lg:text-right">
          Aдвокатское бюро «Кириченко & Партнёры»
        </div>
      </div>
      <main className="w-full h-96 flex flex-col justify-center items-center text-center relative">
        <h1 className="text-5xl text-white font-bold">
          Кириченко Андрей Станиславович
        </h1>
        <button className="mt-6 text-3xl p-2 uppercase text-[#CFBC9E] border border-[#481E00] bg-[#481E00]">
          Заказать звонок
        </button>
      </main>
    </>
  );
};
