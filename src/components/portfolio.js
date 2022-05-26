import React, { useEffect } from "react";
import $ from "jquery";

const Portfolio = () => {
  useEffect(() => {
    $(".videos").hide();
    $("#photo-filter").addClass("is-checked");
  }, []);

  return (
    <section id="portfolio">
      <div className="container portfolio_area text-center">
        <h2>Made with love</h2>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit,
        </p>

        <div id="filters">
          <button
            className="button"
            id="photo-filter"
            data-filter="*"
            onClick={() => {
              $("#photo-filter").addClass("is-checked");
              $("#video-filter").removeClass("is-checked");
              $(".photos").show();
              $(".videos").hide();
            }}
          >
            Photos
          </button>
          <button
            className="button"
            id="video-filter"
            data-filter=".buildings"
            onClick={() => {
              $("#photo-filter").removeClass("is-checked");
              $("#video-filter").addClass("is-checked");
              $(".photos").hide();
              $(".videos").show();
            }}
          >
            Videos
          </button>
        </div>

        <div className="grid">
          <div className="grid-sizer" />
          <div className="grid-item grid-item--width2 grid-item--height2 buildings photos interior">
            <img alt="" src="images/portfolio/portfolio-1.jpg" />
          </div>

          <div className="grid-item buildings interior photos isolation">
            <img alt="" src="images/portfolio/portfolio-2.jpg" />
          </div>

          <div className="grid-item interior photos isolation">
            <img alt="" src="images/portfolio/portfolio-3.jpg" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/portfolio/portfolio-4.jpg" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/portfolio/portfolio-5.jpg" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/portfolio/portfolio-6.jpg" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/portfolio/portfolio-7.jpg" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/portfolio/portfolio-8.jpg" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/services/service-1.jpg" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/services/service-2.jpg" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/services/service-3.jpg" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/Demolition/RC-demolition.jpg" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/Demolition/wooden-demolition.jpg" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/Home/home-1.jpg" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/Home/home-2.jpg" />
          </div>
          <div className="grid-item interior photos isolation">
            <img alt="" src="images/Home/home-3.jpg" />
          </div>

          <div className="grid-item videos isolation" style={{ width: "auto" }}>
            <iframe
              width="400"
              height="240"
              src="https://www.youtube.com/embed/EFmg2NV1XMA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
