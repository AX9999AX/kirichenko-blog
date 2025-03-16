import React from "react";
import { Footer } from "../components/Footer/Footer";
import { HeaderBook } from "../components/HeaderBook/HeaderBook";

const BookArmy = () => {
  const chapters = [
    { title: "Предисловие", link: "/lyad/intro" },
    { title: "Культ.Стёб.Пыль.", link: "#cult-stob-dust" },
    { title: "Мечты.Сэм.Гипотеза.", link: "#dreams-sam-hypothesis" },
    { title: "Гордыня.Босота.Матрица.", link: "#pride-bosota-matrix" },
    { title: "Инвалиды.Скользь.Бисер.", link: "#disabled-slippery-beads" },
    {
      title: "Предположения. Обстоятельства. Случайность.",
      link: "#assumptions-circumstances-chance",
    },
    { title: "Беглец.Рулетка.Хаос.", link: "#fugitive-roulette-chaos" },
    {
      title: "Комильфо.Микромир.Равновесие.",
      link: "#commeilfaut-microworld-balance",
    },
    {
      title: "Наследие.Николаевна.Разговоры.",
      link: "#heritage-nikolaevna-conversations",
    },
    {
      title: "Инь-Янь.Разочарованные.Бумеранг.",
      link: "#yinyang-disappointed-boomerang",
    },
    {
      title: "Вещий.Торатора.Геометрия.",
      link: "#prophetic-toratara-geometry",
    },
    {
      title: "Карьерист.Интеграция.Тутифрути.",
      link: "#careerist-integration-tuttifrutti",
    },
    { title: "Украинороссия.Пасквиль.", link: "#ukrainorussia-pasquinade" },
    {
      title: "Эпидермис.Дурятина.Рефлексы.",
      link: "#epidermis-nonsense-reflexes",
    },
    {
      title: "Порядок. Командир. Предусмотрительные.",
      link: "#order-commander-prudent",
    },
    {
      title: "Предсонные.Грёзы.Гулливера.",
      link: "#presleep-gullivers-dreams",
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
              <a
                href={chapter.link}
                className="my-5 text-xl text-blue-500 hover:underline"
              >
                {chapter.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default BookArmy;
