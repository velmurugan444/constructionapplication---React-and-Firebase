import React from "react";
import Whyus from "./whyus";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container about_bg">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="about_content">
                <h2>Welcome to Our Company</h2>
                <h3>Representative Baba Arian</h3>
                <p>
                  Our company was established in 2016, we provide demolition
                  services of old houses, schools, offices, hospitals,
                  restaurants or any physical infrastructure in Tokyo, Saitama
                  and Chiba prefecture of Japan. we have certified engineers and
                  trained field workers to complete any demolition work within
                  the desired time.
                </p>
                <p>
                  our happy customer satisfaction is our primary goal. please
                  feel free to contact us. you can contact us by phone, email,
                  line or WhatsApp. please contact us by phone for a quick
                  response. Email and other SNS messages will be responsible
                  within 24 hours. Thank you for your co-operations.
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
