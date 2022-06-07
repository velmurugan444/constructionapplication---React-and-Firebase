import React from "react";
import { Link } from "react-router-dom";

const Homesection = () => {
  return (
    <div>
      <section id="home" className="home">
        <div id="carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="images/slider_img.jpg" alt="Construction" />
              <div className="overlay">
                <div className="carousel-caption">
                  <h3>We are Certified, Demolition Engineers</h3>
                  <h1>Sakura Kogyo Co., Ltd.</h1>
                  <h1 className="second_heading">
                    Wooden & RC Structure Demolition
                  </h1>
                  <p>
                    sakura Kogyo Co., Ltd provides professional demolition
                    services in the main three prefectures of Japan. our company
                    is located in Kawaguchi city of Saitama prefecture. so we
                    provide our services in Tokyo prefecture, Chiba prefecture
                    and Saitama prefecture.
                  </p>
                  <Link to="/about" className="btn know_btn">
                    About us
                  </Link>
                  <Link to="/contact" className="btn know_btn">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="images/slider_img2.jpg" alt="Construction" />
              <div className="overlay">
                <div className="carousel-caption">
                  <h3>We are Certified, Demolition Engineers</h3>
                  <h1>Sakura Kogyo Co., Ltd.</h1>
                  <h1 className="second_heading">
                    Wooden & RC Structure Demolition
                  </h1>
                  <p>
                    sakura Kogyo Co., Ltd provides professional demolition
                    services in the main three prefectures of Japan. our company
                    is located in Kawaguchi city of Saitama prefecture. so we
                    provide our services in Tokyo prefecture, Chiba prefecture
                    and Saitama prefecture.
                  </p>
                  <a className="btn know_btn">know more</a>
                  <a className="btn know_btn">view project</a>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="images/slider_img3.jpg" alt="Construction" />
              <div className="overlay">
                <div className="carousel-caption">
                  <h3>We are Certified, Demolition Engineers</h3>
                  <h1>Sakura Kogyo Co., Ltd.</h1>
                  <h1 className="second_heading">
                    {" "}Wooden & RC Structure Demolition
                  </h1>
                  <p>
                    sakura Kogyo Co., Ltd provides professional demolition
                    services in the main three prefectures of Japan. our company
                    is located in Kawaguchi city of Saitama prefecture. so we
                    provide our services in Tokyo prefecture, Chiba prefecture
                    and Saitama prefecture.
                  </p>
                  <a className="btn know_btn">know more</a>
                  <a className="btn know_btn">view project</a>
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
    </div>
  );
};

export default Homesection;
