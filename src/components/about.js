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
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit,
                </p>
                <p>
                  sed quia non numquam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                  veniam, quis nostrum exercitationem ullam corporis suscipit
                  laboriosam, nisi ut aliquid ex ea commodi consequatur?{" "}
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
