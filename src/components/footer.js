import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container footer_top">
        <div className="row">
          <div className="col-lg-4 col-sm-7">
            <div className="footer_item">
              <h4>Our Company</h4>

              <p>
                sakura Kogyo Co., Ltd provides professional demolition services
                in the main three prefectures of Japan. our company is located
                in Kawaguchi city of Saitama prefecture. so we provide our
                services in Tokyo prefecture, Chiba prefecture and Saitama
                prefecture.
              </p>

              <ul className="list-inline footer_social_icon">
                <li>
                  <a href="">
                    <span className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="fa fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-5">
            <div className="footer_item">
              <h4>Contact us</h4>
              <ul className="list-unstyled footer_contact">
                <li>
                  <a href="">
                    <span className="fa fa-map-marker" /> 2-35-20 Shibanakada,
                    Kawaguchi City, Saitama Prefecture Parkside Shiba 103
                    333-0847
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="fa fa-envelope" /> saeidbabaalian@gmail.com
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="fa fa-mobile" />
                    <p>
                      080-3205-9543 <br />048-234-8264
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
