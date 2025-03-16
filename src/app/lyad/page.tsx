import React from "react";
import { Footer } from "../components/Footer/Footer";
import { HeaderBook } from "../components/HeaderBook/HeaderBook";
import Link from "next/link";

const BookLyad = () => {
  const chapters = [
    { title: "Предисловие", link: "/lyad/intro" },
    { title: "Культ.Стёб.Пыль.", link: "/lyad/cult-stob-dust" },
    { title: "Мечты.Сэм.Гипотеза.", link: "/lyad/dreams-sam-hypothesis" },
    { title: "Гордыня.Босота.Матрица.", link: "/lyad/pride-bosota-matrix" },
    { title: "Инвалиды.Скользь.Бисер.", link: "/lyad/disabled-slippery-beads" },
    {
      title: "Предположения. Обстоятельства. Случайность.",
      link: "/lyad/assumptions-circumstances-chance",
    },
    { title: "Беглец.Рулетка.Хаос.", link: "/lyad/fugitive-roulette-chaos" },
    {
      title: "Комильфо.Микромир.Равновесие.",
      link: "/lyad/commeilfaut-microworld-balance",
    },
    {
      title: "Наследие.Николаевна.Разговоры.",
      link: "/lyad/heritage-nikolaevna-conversations",
    },
    {
      title: "Инь-Янь.Разочарованные.Бумеранг.",
      link: "/lyad/yinyang-disappointed-boomerang",
    },
    {
      title: "Вещий.Торатора.Геометрия.",
      link: "/lyad/prophetic-toratara-geometry",
    },
    {
      title: "Карьерист.Интеграция.Тутифрути.",
      link: "/lyad/careerist-integration-tuttifrutti",
    },
    {
      title: "Украинороссия.Пасквиль.",
      link: "/lyad/ukrainorussia-pasquinade",
    },
    {
      title: "Эпидермис.Дурятина.Рефлексы.",
      link: "/lyad/epidermis-nonsense-reflexes",
    },
    {
      title: "Порядок. Командир. Предусмотрительные.",
      link: "/lyad/order-commander-prudent",
    },
    {
      title: "Предсонные.Грёзы.Гулливера.",
      link: "/lyad/presleep-gullivers-dreams",
    },
  ];

  return (
    <>
      <HeaderBook />
      <div className="max-w-4xl mx-auto p-6 my-5 bg-white text-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">Все главы</h1>
        <ul className="list-disc pl-5 my-5">
          {chapters.map((chapter, index) => (
            <li className="my-2" key={index}>
              <Link
                href={chapter.link}
                className="my-5 text-xl text-blue-500 hover:underline"
              >
                {chapter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default BookLyad;
