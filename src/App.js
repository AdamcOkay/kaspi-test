import "swiper/css";
import "./scss/App.scss";

import Header from "./components/Header";
import Grid from "./components/Grid";
import Tiles from "./components/Tiles";

function App() {
  const menuItems = [
    { text: "Магазин", link: "/" },
    { text: "Платежи", link: "/" },
    { text: "Мой Банк", link: "/" },
    { text: "Red", link: "/" },
    { text: "Бонус", link: "/" },
    { text: "Гид", link: "/" },
    { text: "Maps", link: "/" },
    { text: "Переводы", link: "/" },
  ];

  const productsItems = [
    {
      title: "Магазин",
      text: "Покупки в кредит не выходя из дома",
      link: "/",
      class: "shop",
    },
    {
      title: "Платежи",
      text: "Без комиссий, более 5000 услуг",
      link: "/",
      class: "payments",
    },
    {
      title: "Мой Банк",
      text: "Информация о картах, кредитах и депозитах",
      link: "/",
      class: "bank",
    },
    {
      title: "Переводы",
      text: "Между счетами и с карты на карту",
      link: "/",
      class: "transfers",
    },
    {
      title: "Kaspi Red",
      text: "Покупки в рассрочку",
      link: "/",
      class: "red",
    },
    {
      title: "Kaspi Maps",
      text: "Ближайшие банкомат, отделение, терминал и магазин",
      link: "/",
      class: "maps",
    },
  ];

  return (
    <div className="App">
      <Header menuItems={menuItems} />
      <div className="container">
        <main>
          <section className="banners">
            <Grid />
          </section>
          <section className="products">
            <Tiles productsItems={productsItems} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
