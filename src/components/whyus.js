import React from "react";
import { useTranslation } from "react-i18next";

const Whyus = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <section id="why_us">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="head_title">
              <h2>
                {t(`home.whychooseus`)}
              </h2>
              <p>
                {t(`home.whychooseuscontent`)}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="why_us_item">
              <img
                src="images/Demolition/wooden-demolition.JPG"
                style={{ height: "356px" }}
              />
              <h4>
                {t(`home.woodendemolition`)}
              </h4>
              <p>
                {t(`home.woodendemolitioncontent`)}
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="why_us_item">
              <img
                src="images/Demolition/RC-demolition.JPG"
                style={{ height: "356px" }}
              />
              <h4>
                {t(`home.rcdemolition`)}
              </h4>
              <p>
                {t(`home.rcdemolitioncontent`)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
