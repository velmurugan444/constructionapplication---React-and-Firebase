import React, { useRef, useState } from "react";
import Footer from "./footer";
import fire from "../files/firebase";
import emailjs from "emailjs-com";

const Contactform = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [message, setmessage] = useState("");
  const form = useRef();
  const handleSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || mobile === "" || message === "") {
      alert("please fill all fields");
    } else {
      emailjs
        .sendForm(
          "service_usqitd9",
          "template_khaizyr",
          form.current,
          "qlu-p36y5hdBefF1N"
        )
        .then(
          result => {
            console.log(result.text);
          },
          error => {
            console.log(error.text);
          }
        );
      fire
        .firestore()
        .collection("contacts")
        .add({
          name: name,
          email: email,
          mobile: mobile,
          message: message
        })
        .then(() => {
          alert("Message sent successfully");
        });
      setname("");
      setemail("");
      setmobile("");
      setmessage("");
    }
  };

  return (
    <div>
      <section id="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Do you have any questions?</h2>
              <h2 className="second_heading">Feel free to contact us!</h2>
            </div>
            <form
              role="form"
              className="form-inline text-left col-md-6"
              ref={form}
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={e => setname(e.target.value)}
                  id="from_name"
                  name="from_name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="hidden"
                  defaultValue="Rabin"
                  className="form-control"
                  id="to_name"
                  name="to_name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={e => setemail(e.target.value)}
                  className="form-control"
                  id="from_email"
                  name="from_email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={mobile}
                  onChange={e => setmobile(e.target.value)}
                  className="form-control"
                  id="from_mobile"
                  name="from_mobile"
                  placeholder="Mobile"
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="5"
                  value={message}
                  onChange={e => setmessage(e.target.value)}
                  id="message"
                  name="message"
                  placeholder="Message"
                />
              </div>
              <button type="submit" className="btn submit_btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contactform;
