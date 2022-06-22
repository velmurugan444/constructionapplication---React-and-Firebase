import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <footer>
      <div className="container footer_top">
        <div className="row">
          <div className="col-lg-4 col-sm-7">
            <div className="footer_item">
              <h4>
                {t(`home.ourcompany`)}
              </h4>

              <p>
                {t(`home.aboutcompany`)}
              </p>

              <ul className="list-inline footer_social_icon">
                <li>
                  <a href="https://www.facebook.com/people/Kyodai-Kyodai/100079036464086/">
                    <span className="fa fa-facebook" />
                  </a>
                </li>
                &nbsp;&nbsp;
                <li>
                  <a href="https://wa.me/+917904435022/?text=">
                    <span className="fa fa-whatsapp" />
                  </a>
                </li>
                &nbsp;
                <li>
                  <a href="">
                    <span>
                      <span>
                        <img src="icons/circleline.png" />
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-5">
            <div className="footer_item">
              <h4>
                {t(`home.companycontacttitle`)}
              </h4>
              <ul className="list-unstyled footer_contact">
                <li>
                  <a href="">
                    <span className="fa fa-map-marker" />
                    {t(`home.companyaddress`)}
                  </a>
                </li>
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@example.com"
                    target="_blank"
                  >
                    <span className="fa fa-envelope" /> saeidbabaalian@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+08032059543">
                    <span className="fa fa-mobile" />
                    <p>
                      <a href="tel:+08032059543">080-3205-9543</a> <br />
                      <a href="tel:+0482348264">048-234-8264</a>
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-5">
            <div className="footer_item">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d103513.59564204668!2d139.63529762522177!3d35.829385782599424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d35.829243999999996!2d139.70558699999998!5e0!3m2!1sen!2sin!4v1655875170652!5m2!1sen!2sin"
                width="600"
                height="320"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom text-center">
        <p className="wow fadeInRight">
          Made with
          <i className="fa fa-heart" />
          by
          <a target="_blank" href="http://bootstrapthemes.co">
            Bootstrap Themes
          </a>
          2016. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
