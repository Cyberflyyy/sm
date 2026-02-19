import Czym_sie from "./components/czym_sie";
import Footer from "./components/footer";
import Identyfikacja_wizualna from "./components/identyfikacja_wizualna";
import Nasze_prace from "./components/nasze_prace";
import Pokaz_sie from "./components/pokaz_sie";
import Poznajmy_sie from "./components/poznajmy_sie";
import Projekty_kreatywne from "./components/projekty_kreatywne";
import Prowadzenie_social from "./components/prowadzenie_social";
import Strategia_dzialania from "./components/strategia_dzialania";
import Tworzenie_rolek from "./components/tworzenie_rolek";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center  font-raleway ">
      <Pokaz_sie />
      <Czym_sie />
      <Prowadzenie_social />
      <Identyfikacja_wizualna />
      <Strategia_dzialania />
      <Tworzenie_rolek />
      <Projekty_kreatywne />
      <Poznajmy_sie />
      <Nasze_prace />
      <Footer />
    </div>
  );
}
