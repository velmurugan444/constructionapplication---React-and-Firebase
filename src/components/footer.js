import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container footer_top">
        <div className="row">
          <div className="col-lg-4 col-sm-7">
            <div className="footer_item">
              <h4>About Company</h4>
              <img className="logo" src="images/logo.png" alt="Construction" />
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
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
                    Kawaguchi City, Saitama Prefecture 333-0847
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
                      048 (234) 8264 <br />080 (3205) 9543
                    </p>
                  </a>
                </li>
              </ul>
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
