import React from "react";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="container text-center testimonial_area">
        <h2>Customer Reviews</h2>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit,
        </p>

        <div className="row">
          <div className="col-md-4">
            <div className="testimonial_item">
              <div className="testimonial_content text-left">
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit,
                </p>
              </div>
              <img src="images/testimonial_img1.png" alt="Testimonial" />
              <p className="worker_name">john smith</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial_item">
              <div className="testimonial_content">
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit,
                </p>
              </div>
              <img src="images/testimonial_img2.png" alt="Testimonial" />
              <p className="worker_name">john smith</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial_item">
              <div className="testimonial_content">
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit,
                </p>
              </div>
              <img src="images/testimonial_img1.png" alt="Testimonial" />
              <p className="worker_name">john smith</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
