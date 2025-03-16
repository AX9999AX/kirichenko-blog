import { BooksPreview } from "./components/BooksPreview/BooksPreview";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainSection } from "./components/MainSection/MainSection";
import { MyCareerSection } from "./components/MyCareerSection/MyCareerSection";
import { MyServicesSection } from "./components/MyServicesSection/MyServicesSection";
import { MySuggestionsSection } from "./components/MySuggestionsSection/MySuggestionsSection";
import { Navigation } from "./components/Navigation/Navigation";

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <Navigation />
      <MyServicesSection />
      <MyCareerSection />
      <MySuggestionsSection />
      <BooksPreview />
      <Footer />
    </>
  );
}
