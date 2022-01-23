import React from "react";
import Swiper from "swiper";

class Grid extends React.Component {
  componentDidMount() {
    this.swiper = new Swiper(".payment-options", {
      draggable: true,
      slidesPerView: "auto",
      loop: !0,
      loopedSlides: 30,
      preventClicks: !1,
      nested: !0,
      lazy: {
        loadOnTransitionStart: !0,
      },
    });
  }

  render() {
    return (
      <div className="banners-grid">
        <div className="banners-grid__item">
          <div className="item-info">
            <h2 className="item-title">Мой Банк</h2>
            <p className="subtitle">Всё о ваших картах, депозитах и кредитах</p>
            <a href="/" className="item-button">
              Войти / Зарегистрироваться
            </a>
          </div>
          <div className="item-bg"></div>
        </div>
        <div className="banners-grid__item">
          <div className="item-info"></div>
          <div className="item-bg"></div>
        </div>
        <div className="banners-grid__item">
          <div className="item-info">
            <p className="subtitle">
              Платите удобно за 1 минуту!
              <br />
              Комиссия – 0&nbsp;₸!
            </p>
            <div className="swiper-container payment-options">
              <div className="swiper-wrapper">
                <a
                  href="/"
                  className="swiper-slide payment-options__item slide-1"
                ></a>
                <a
                  href="/"
                  className="swiper-slide payment-options__item slide-2"
                ></a>
                <a
                  href="/"
                  className="swiper-slide payment-options__item slide-3"
                ></a>
                <a
                  href="/"
                  className="swiper-slide payment-options__item slide-4"
                ></a>
                <a
                  href="/"
                  className="swiper-slide payment-options__item slide-5"
                ></a>
                <a
                  href="/"
                  className="swiper-slide payment-options__item slide-6"
                ></a>
                <a
                  href="/"
                  className="swiper-slide payment-options__item slide-7"
                ></a>
                <a
                  href="/"
                  className="swiper-slide payment-options__item slide-8"
                ></a>
                <a
                  href="/"
                  className="swiper-slide payment-options__item slide-9"
                ></a>
                <a
                  href="/"
                  className="swiper-slide payment-options__item slide-10"
                ></a>
                <a
                  href="/"
                  className="swiper-slide payment-options__item slide-11"
                ></a>
                <a
                  href="/"
                  className="swiper-slide payment-options__item slide-12"
                ></a>
                <a
                  href="/"
                  className="swiper-slide payment-options__item slide-13"
                ></a>
                <a
                  href="/"
                  className="swiper-slide payment-options__item slide-14"
                ></a>
                <a
                  href="/"
                  className="swiper-slide payment-options__item slide-15"
                ></a>
              </div>
            </div>
            <a href="/" className="item-button">
              Все платежи
            </a>
          </div>
          <div className="item-bg"></div>
        </div>
      </div>
    );
  }
}

export default Grid;
