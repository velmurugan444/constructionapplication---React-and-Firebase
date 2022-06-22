import React, { useEffect } from "react";
import $ from "jquery";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t, i18n } = useTranslation("common");
  useEffect(() => {
    $("#photo-filter").addClass("is-checked");
  }, []);

  return (
    <section id="portfolio">
      <div className="container portfolio_area text-center">
        <h2>
          {t(`home.madewithlove`)}
        </h2>
        <p>
          {t(`home.portfoliocontent`)}
        </p>

        <div id="filters">
          <button
            className="button"
            id="photo-filter"
            data-filter="*"
            onClick={() => {
              $("#photo-filter").addClass("is-checked");
              $(".photos").show();
            }}
          >
            {t(`home.photos`)}
          </button>
        </div>

        <div className="grid">
          <div className="grid-sizer" />
          <div className="grid-item grid-item--width2 grid-item--height2 buildings photos interior">
            <img alt="" src="images/Portfolio/portfolio-1.JPG" />
          </div>

          <div className="grid-item buildings interior photos isolation">
            <img alt="" src="images/Portfolio/portfolio-2.JPG" />
          </div>

          <div className="grid-item interior photos isolation">
            <img alt="" src="images/Portfolio/portfolio-3.JPG" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/Portfolio/portfolio-4.JPG" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/Portfolio/portfolio-5.JPG" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/Portfolio/portfolio-6.JPG" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/Portfolio/portfolio-7.JPG" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/Portfolio/portfolio-8.JPG" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/services/service-1.JPG" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/services/service-2.JPG" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/services/service-3.JPG" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/Demolition/RC-demolition.JPG" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/Demolition/wooden-demolition.JPG" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/Home/home-1.JPG" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/Home/home-2.JPG" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/Home/home-3.JPG" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
