import React from "react";
import { Link } from "react-router-dom";
import About from "./about";
import Contactform from "./contactform";
import Portfolio from "./portfolio";
import Services from "./services";
import { useTranslation } from "react-i18next";

const Homesection = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <div>
      <section id="home" className="home">
        <div id="carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="images/slider_img.jpg" alt="Construction" />
              <div className="overlay">
                <div className="carousel-caption">
                  <h3>
                    {t(`home.engineers`)}
                  </h3>
                  <h1>
                    {t(`home.companyname`)}
                  </h1>
                  <h1 className="second_heading">
                    {t(`home.subheading`)}
                  </h1>
                  <p>
                    {t(`home.content`)}
                  </p>
                  <Link to="/about" className="btn know_btn">
                    {t(`home.knowmore`)}
                  </Link>
                  <Link to="/contact" className="btn know_btn">
                    {t(`home.contactus`)}
                  </Link>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="images/slider_img2.jpg" alt="Construction" />
              <div className="overlay">
                <div className="carousel-caption">
                  <h3>
                    {t(`home.engineers`)}
                  </h3>
                  <h1>
                    {t(`home.companyname`)}
                  </h1>
                  <h1 className="second_heading">
                    {t(`home.subheading`)}
                  </h1>
                  <p>
                    {t(`home.content`)}
                  </p>
                  <a className="btn know_btn">
                    {" "}{t(`home.knowmore`)}
                  </a>
                  <a className="btn know_btn">
                    {" "}{t(`home.contactus`)}
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="images/slider_img3.jpg" alt="Construction" />
              <div className="overlay">
                <div className="carousel-caption">
                  <h3>
                    {t(`home.engineers`)}
                  </h3>
                  <h1>
                    {t(`home.companyname`)}
                  </h1>
                  <h1 className="second_heading">
                    {t(`home.subheading`)}
                  </h1>
                  <p>
                    {t(`home.content`)}
                  </p>
                  <a className="btn know_btn">
                    {t(`home.knowmore`)}
                  </a>
                  <a className="btn know_btn">
                    {t(`home.contactus`)}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a
            className="left carousel-control"
            href="#carousel"
            role="button"
            data-slide="prev"
          >
            <span className="fa fa-angle-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#carousel"
            role="button"
            data-slide="next"
          >
            <span className="fa fa-angle-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
      <Services />
      <Portfolio />
      <About />
      <Contactform />
    </div>
  );
};

export default Homesection;
