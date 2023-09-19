import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_60y25pv",
        "template_8v10td6",
        form.current,
        "pO_yHYUPBk6IrCNQd"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset()
          alert("Email sent!")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDsec">
        Please fill out the form below to discuss any work opportunites.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name="your_name"/>
        <input type="email" className="email" placeholder="Your Email" name="your_email"/>
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="msg"
        ></textarea>
        <button className="submit" type="submit" value="Send" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
