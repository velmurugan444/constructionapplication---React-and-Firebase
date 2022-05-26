import React from "react";

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
                  <h3>We are Certified Engineers</h3>
                  <h1>Construction Services</h1>
                  <h1 className="second_heading">Creative & Professional</h1>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit,
                  </p>
                  <a className="btn know_btn">know more</a>
                  <a className="btn know_btn">view project</a>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="images/slider_img2.jpg" alt="Construction" />
              <div className="overlay">
                <div className="carousel-caption">
                  <h3>We are Certified Engineers</h3>
                  <h1>Construction Services</h1>
                  <h1 className="second_heading">Creative & Professional</h1>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit,
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
                  <h3>We are Certified Engineers</h3>
                  <h1>Construction Services</h1>
                  <h1 className="second_heading">Creative & Professional</h1>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit,
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
