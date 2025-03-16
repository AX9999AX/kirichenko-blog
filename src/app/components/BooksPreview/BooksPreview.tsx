"use client";

import Image from "next/image";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BooksPreview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      id="my-books"
      className="w-full max-w-7xl mx-auto px-10 py-10 my-5 bg-white/85 shadow-lg rounded-lg"
    >
      <Slider {...settings}>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="sm:col-span-2">
              <h3 className="text-2xl font-bold text-center text-red-600 mb-4">
                &quot;...ЛЯДЬ!!!&quot;
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Это - первая моя книга, и она написана случайно. Она про
                непрочто. В ней изложена правда. В ней есть вымысел и ложь,
                клевета и брань, гадость и смех, горе, возможно философия. Она
                должна быть воспринята Вами – мои умные современники, именно
                такой, какая она есть. С орфографическими и синтаксическими
                ошибками. Её не рекомендуется читать людям глупым,
                необразованным, и ещё того хуже – людям дурным от природы, людям
                не имеющим чувства юмора. У таких людей она может вызвать
                раздражение, расстройство и без того слабой психики.
              </p>
              <div className="text-center md:text-left">
                <a
                  className="text-xl font-semibold p-3 text-white border border-[#481E00] bg-[#481E00]"
                  href="/lyad.pdf"
                >
                  Cкачать PDF
                </a>
              </div>
            </div>
            <div className="flex justify-center sm:col-span-1">
              <Image
                src="/book-lyad.png"
                alt="Обложка книги ...ЛЯДЬ"
                width={300}
                height={400}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="sm:col-span-2">
              <h3 className="text-2xl font-bold text-center text-red-600 mb-4">
                &quot;АРМИЯ.org.su&quot;
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Это вторая моя книга. Эта книга, уже, написана умышленно,
                вдогонку первой. Тема этого повествования, постоянно
                сопровождает мои воспоминания о прошлой жизни, и не отпускает,
                ни своей приятностью, ни своей гадостностью. Армия – это не
                просто значимый период в моей жизни, это – часть меня и моего
                общества, в котором я пребывал и пребываю.
              </p>
              <div className="text-center md:text-left">
                <a
                  className="text-xl font-semibold p-3 text-white border border-[#481E00] bg-[#481E00]"
                  href="/army.pdf"
                >
                  Cкачать PDF
                </a>
              </div>
            </div>
            <div className="flex justify-center sm:col-span-1">
              <Image
                src="/book-army.jpg"
                alt="Обложка книги АРМИЯ.org.su"
                width={300}
                height={400}
              />
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};
