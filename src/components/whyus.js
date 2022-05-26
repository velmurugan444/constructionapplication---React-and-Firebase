import React from "react";

const Whyus = () => {
  return (
    <section id="why_us">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="head_title">
              <h2>WHY CHOOSE US?</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit,
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="why_us_item">
              <img src="images/Demolition/wooden-demolition.jpg" />
              <h4>Wooden Demolition Work</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni{" "}
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="why_us_item">
              <img src="images/Demolition/RC-demolition.jpg" />
              <h4>RC Structure Demolition Work</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
