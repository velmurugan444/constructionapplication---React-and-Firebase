import React, { useEffect, useState } from "react";
import $ from "jquery";

const Services = () => {
  const [saitama, setsaitama] = useState(false);
  const [tokyo, settokyo] = useState(false);
  const [chiba, setchiba] = useState(false);
  useEffect(() => {
    $(".saitama-content").hide();
    $(".tokyo").hide();
    $(".chiba").hide();
  }, []);

  return (
    <section id="services">
      <div className="container">
        <h2>OUR SERVICES</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="service_item">
              <img src="images/services/service-1.JPG" alt="Our Services" />
              <h3>Saitama Prefecture Dismantling</h3>
              <p>
                Saitama prefecture Dismantling Registration No. 2 No. 2484. we
                provide our services at any location of any ward of Saitama
                prefecture. we will complete our services at an affordable
                price. we will change both wooden and RC structure
                infrastructure into clean soil within your desired time and
                deadline. after we receive your call or email, we will schedule
                a meeting with you to visit the site. then will discuss the time
                and budget for the demolition.{" "}
                {saitama
                  ? <span className="saitama">
                      then after both parties agreed we will work on the
                      documentation process and then start the work immediately.
                      we are always focused to complete our duty without
                      disturbing the personal and environmental rights of
                      neighbours and society. we start our work from sharp 8:00
                      am in the morning and stop at sharp 17:00 in the evening.
                      we are waiting for your work. please feel free to contact
                      us. Thank you for your co-operation.
                    </span>
                  : ""}
              </p>
              <a className="btn know_btn" onClick={() => setsaitama(!saitama)}>
                {saitama ? "know less" : "know more"}
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service_item">
              <img src="images/services/service-3.JPG" alt="Our Services" />
              <h3>Tokyo Prefecture Dismantling</h3>
              <p>
                Tokyo prefecture Dismantling Registration No. 2 No. 4077. we
                provide our services at any location of any ward of Tokyo
                prefecture. we will complete our services at an affordable
                price. we will change both wooden and RC structure
                infrastructure into clean soil within your desired time and
                deadline. after we receive your call or email, we will schedule
                a meeting with you to visit the site. then will discuss the time
                and budget for the demolition.{tokyo
                  ? <span>
                      then after both parties agreed we will work on the
                      documentation process and then start the work immediately.
                      e are always focused to complete our duty without
                      disturbing the personal and environmental rights of
                      neighbours and society. we start our work from sharp 8:00
                      am in the morning and stop at sharp 17:00 in the evening.
                      we are waiting for your work. please feel free to contact
                      us. Thank you for your co-operation.
                    </span>
                  : ""}
              </p>
              <a className="btn know_btn" onClick={() => settokyo(!tokyo)}>
                {tokyo ? "know less" : "know more"}
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service_item">
              <img src="images/services/service-2.JPG" alt="Our Services" />
              <h3>Chiba Prefecture Dismantling</h3>
              <p>
                Chiba prefecture Dismantling Registration No. 2 No. 1872. we
                provide our services at any location of any ward of Chiba
                prefecture. we will complete our services at an affordable
                price. we will change both wooden and RC structure
                infrastructure into clean soil within your desired time and
                deadline. after we receive your call or email, we will schedule
                a meeting with you to visit the site. then will discuss the time
                and budget for the demolition.
                {chiba
                  ? <span className="chiba">
                      then after both parties agreed we will work on the
                      documentation process and then start the work immediately.
                      e are always focused to complete our duty without
                      disturbing the personal and environmental rights of
                      neighbours and society. we start our work from sharp 8:00
                      am in the morning and stop at sharp 17:00 in the evening.
                      we are waiting for your work. please feel free to contact
                      us. Thank you for your co-operation.
                    </span>
                  : ""}
              </p>

              <a className="btn know_btn" onClick={() => setchiba(!chiba)}>
                {chiba ? "know less" : "know more"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
