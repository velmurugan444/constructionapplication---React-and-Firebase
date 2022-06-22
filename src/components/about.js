import React from "react";
import Whyus from "./whyus";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <div>
      <section id="about">
        <div className="container about_bg">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="about_content">
                <h2>
                  {t(`home.welcome`)}
                </h2>
                <h3>
                  {t(`home.representative`)}
                </h3>
                <p>
                  {t(`home.about1`)}
                </p>
                <p>
                  {t(`home.about2`)}
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-lg-offset-1">
              <div className="about_banner">
                <img src="images/About/about-1.png" alt="" className="logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Whyus />
    </div>
  );
};

export default About;
