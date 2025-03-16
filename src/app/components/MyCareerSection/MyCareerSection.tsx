export const MyCareerSection = () => {
  return (
    <section
      id="my-career"
      className="w-full max-w-7xl mx-auto px-4 py-4 my-5 bg-white/85 shadow-lg rounded-lg"
    >
      <h2 className="text-4xl font-bold text-left text-gray-900">
        Моя Карьера
      </h2>
      <hr className="border-t border-gray-700 my-4" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-lg text-gray-900 leading-[1.4]">
        <div className="sm:col-span-2">
          <h3 className="text-2xl text-center font-bold text-gray-900 mb-4">
            Кириченко Андрей Станиславович
          </h3>
          <p className="mb-3">
            Родился я в 1965 году. После окончания восьмого класса школы,
            поступил учиться в техникум. Воинскую службу проходил в
            спец.подразделениях ВВ МВД. Несколько лет работал в государственном
            секторе экономики, а затем в частном. Закончил два университета.
            Первый – технический. Второй – юридический..
          </p>
          <p className="mb-3">
            Юридическую практику осуществляю с 1994 года. Адвокатскую
            деятельность с осени 2001 года. С того времени и по настоящий
            момент, я занимаюсь гражданскими, уголовными, брачно-семейными,
            хозяйственными и административными делами.
          </p>
          <p className="mb-3">
            Среди моих клиентов были бизнесмены различного уровня, врачи,
            депутаты ВР и местных советов, журналист, учителя, государственные
            служащие, IT - шники, рестораторы, шахтёры, заместитель министра,
            сотрудники милиции и прокуратуры, профессора, таксисты, фотомодель,
            друзья и родственники.
          </p>
        </div>
        <div className="sm:col-span-1">
          <h3 className="text-2xl text-center font-bold text-gray-900 mb-4">
            СМИ обо мне
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-lg">
            <li>
              <a
                href="https://novosti.dn.ua/ru/news/161179-advokat-chynovnyka-doneckogo-gorsoveta-obvynyl-sbu-vpravovom-bespredele"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Адвокат чиновника Донецкого горсовета обвинил СБУ в «правовом
                беспределе»
              </a>
            </li>
            <li>
              <a
                href="https://www.62.ua/news/262010/nardep-bobkov-hocet-nakazat-dopas-na-million-griven-ctoby-postroit-pobolse-detskih-plosadok-v-donecke"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Нардеп Бобков хочет «наказать» ДОПАС на миллион гривен.
              </a>
            </li>
            <li>
              <a
                href="https://www.ostro.org/ru/news/v-donetske-mozhet-poyavytsya-dvyzhenye-donetsk-bez-lukyanchenko-i17307"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                В Донецке может появиться движение «Донецк без Лукьянченко!»
              </a>
            </li>
            <li>
              <a
                href="https://www.kramatorsk.info/view/9483"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Дело длиною в вечность. Дончане против Донецкого горсовета
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
