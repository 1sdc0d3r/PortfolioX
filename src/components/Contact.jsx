import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import * as emailjs from "emailjs-com";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    antiSpam: null,
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
      subject: data.subject,
      from_name: data.name,
      message_subject: data.subject,
      message_html: data.message,
    };

    if (!data.antiSpam) {
      emailjs.send(
        "gmail",
        "template_SswCjIcl",
        templateParams,
        "user_vhx6Zrv5irvL2nLhnctr5"
      );
    }

    document.querySelector(".contact span").classList.add("message-sent");
    setTimeout(() => {
      document.querySelector(".contact span").classList.remove("message-sent");
    }, 5000);

    setData({
      name: "",
      email: "",
      subject: "",
      message: "",
      antiSpam: null,
    });
  };

  return (
    <section className="contact clicker">
      <h2>Contact</h2>
      {/* //todo FORM ACTION */}
      {/* //todo email response on contact form sent
       */}
      <span>Message sent successfully</span>
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
          name="anti-spam"
          id="anti-spam"
          value={data.antiSpam}
          onChange={onChangeHandler}
          style={{ display: "None", position: "absolute" }}
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
          rows="5"
          value={data.message}
          onChange={onChangeHandler}
          className="field text"
        />
        <div className="actions">
          <input type="submit" value="Send Message" id="submit-btn" />
        </div>
      </form>

      <div className="icons">
        {/* //todo these are inactive accounts... */}
        <SocialIcon
          target="_blank"
          url="https://github.com/1sdc0d3r"
          id="github"
          bgColor="#312a26"
        />
        <SocialIcon
          target="_blank"
          url="https://twitter.com/BradenBell19"
          id="twitter"
          bgColor="#312a26"
        />
        <SocialIcon
          target="_blank"
          url="https://www.linkedin.com/in/braden-bell"
          id="linkedin"
          bgColor="#312a26"
        />
      </div>
    </section>
  );
}
