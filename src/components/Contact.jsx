import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import * as emailjs from "emailjs-com";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChangeHandler = (evt) => {
    setData({
      ...data,
      [evt.target.name]: evt.target.value,
    });
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();

    const templateParams = {
      reply_to: data.email,
      subject: "Portfolio Contact",
      to_name: "Braden",
      from_name: data.name,
      message_subject: data.subject,
      message_html: data.message,
    };

    emailjs.send(
      "gmail",
      "template_SswCjIcl1",
      templateParams,
      "user_vhx6Zrv5irvL2nLhnctr51"
    );

    setData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact clicker">
      <h2>Contact</h2>
      {/* //todo FORM ACTION */}
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          id="name"
          value={data.name}
          onChange={onChangeHandler}
          className="field"
        />

        <input
          type="text"
          name="email"
          placeholder="Email Address"
          id="email"
          value={data.email}
          onChange={onChangeHandler}
          className="field"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          id="subject"
          value={data.subject}
          onChange={onChangeHandler}
          className="field"
        />

        <textarea
          name="message"
          placeholder="Message"
          id="message"
          rows="6"
          value={data.message}
          onChange={onChangeHandler}
          className="field"
        />
        <div className="actions">
          <input type="submit" value="Send Message" />
        </div>
      </form>

      {/* <h2>Find Me On</h2> */}
      <div className="icons">
        <SocialIcon
          target="_blank"
          url="https://github.com/1sdc0d3r"
          id="github"
        />
        <SocialIcon
          target="_blank"
          url="https://twitter.com/BradenBell19"
          id="twitter"
        />
        <SocialIcon
          target="_blank"
          url="https://www.linkedin.com/in/braden-bell-73b168165/"
          id="linkedin"
        />
      </div>
    </section>
  );
}
