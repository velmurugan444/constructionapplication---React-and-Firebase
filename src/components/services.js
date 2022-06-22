import React, { useEffect, useState } from "react";
import $ from "jquery";
import { useTranslation } from "react-i18next";

const Services = () => {
  const [saitama, setsaitama] = useState(false);
  const [tokyo, settokyo] = useState(false);
  const [chiba, setchiba] = useState(false);
  const { t, i18n } = useTranslation("common");
  useEffect(() => {
    $(".saitama-content").hide();
    $(".tokyo").hide();
    $(".chiba").hide();
  }, []);

  return (
    <section id="services">
      <div className="container">
        <h2>
          {t(`home.ourservices`)}
        </h2>
        <div className="row">
          <div className="col-md-4">
            <div className="service_item">
              <img src="images/services/service-1.JPG" alt="Our Services" />
              <h3>
                {t(`home.saitama`)}
              </h3>
              <p>
                {t(`home.saitamacontent`)}
                {saitama
                  ? <span className="saitama">
                      {t(`home.saitamaremainingcontent`)}
                    </span>
                  : ""}
              </p>
              <a className="btn know_btn" onClick={() => setsaitama(!saitama)}>
                {saitama ? t(`home.knowless`) : t(`home.knowmore`)}
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service_item">
              <img src="images/services/service-3.JPG" alt="Our Services" />
              <h3>
                {t(`home.tokyo`)}
              </h3>
              <p>
                {t(`home.tokyocontent`)}
                {tokyo
                  ? <span>
                      {t(`home.tokyoremainingcontent`)}
                    </span>
                  : ""}
              </p>
              <a className="btn know_btn" onClick={() => settokyo(!tokyo)}>
                {tokyo ? t(`home.knowless`) : t(`home.knowmore`)}
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service_item">
              <img src="images/services/service-2.JPG" alt="Our Services" />
              <h3>
                {t(`home.chiba`)}
              </h3>
              <p>
                {t(`home.chibacontent`)}
                {chiba
                  ? <span className="chiba">
                      {t(`home.chibaremainingcontent`)}
                    </span>
                  : ""}
              </p>

              <a className="btn know_btn" onClick={() => setchiba(!chiba)}>
                {chiba ? t(`home.knowless`) : t(`home.knowmore`)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
