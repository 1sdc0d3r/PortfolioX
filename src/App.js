import React, { useState, useEffect, useRef } from "react";
import Typing from "react-typing-animation";
import "./style/App.css";
import Contact from "./components/Contact";
import sunset from "./assets/images/sunset_red.jpeg";
import tech from "./assets/images/aboutTech.svg";

function App() {
  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refWork = useRef(null);
  const refContact = useRef(null);

  useEffect(() => {
    refHome.current = document.querySelector(".home");
    refAbout.current = document.querySelector(".about");
    refWork.current = document.querySelector(".work");
    refContact.current = document.querySelector(".contact");

    document.addEventListener("scroll", () => {
      const home =
        window.scrollY >= refHome.current.offsetTop &&
        window.scrollY < refAbout.current.offsetTop;
      const about =
        window.scrollY >= refAbout.current.offsetTop &&
        window.scrollY < refWork.current.offsetTop;
      const work =
        window.scrollY >= refWork.current.offsetTop &&
        window.scrollY < refContact.current.offsetTop;
      const contact = window.scrollY >= refContact.current.offsetTop;
      const removeActive = () => {
        document.getElementById("home").classList.remove("active");
        document.getElementById("about").classList.remove("active");
        document.getElementById("work").classList.remove("active");
        document.getElementById("contact").classList.remove("active");
      };
      if (home) {
        removeActive();
        document.getElementById("home").classList.add("active");
      } else if (about) {
        removeActive();
        document.getElementById("about").classList.add("active");
      } else if (work) {
        removeActive();
        document.getElementById("work").classList.add("active");
      } else if (contact) {
        document.getElementById("contact").classList.add("active");
      }
    });
    return () => {
      document.removeEventListener("scroll");
    };
  }, []);

  const scrollToRef = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="App">
      <nav>
        <div>
          <p id="home" className="active" onClick={() => scrollToRef(refHome)}>
            Home
          </p>
          <p id="about" onClick={() => scrollToRef(refAbout)}>
            About
          </p>
          <p id="work" onClick={() => scrollToRef(refWork)}>
            Work
          </p>
          <p id="contact" onClick={() => scrollToRef(refContact)}>
            Contact
          </p>
        </div>
      </nav>
      <section className="home">
        <img src={sunset} alt="sunset w/ house" />
        <h1>Braden</h1>
        <Typing speed={65}>
          <h2 id="sub-header">Software Engineer</h2>
          {/* <Typing.Backspace delay={500} speed={8} /> */}
        </Typing>
        <div className="bobber" onClick={() => scrollToRef(refContact)}>
          <div className="bobber-top" />
          <p>
            Drop a <br />
            line
          </p>
        </div>
      </section>
      <section className="about">
        <h2>About</h2>
        <div>
          <img src="null" alt="null" />
          <div className="desc">
            <p>
              I am a avid fisherman with a passion to develop software. As
              technology evolves, we must learn to evolve with it. This is
              prominent for a successful future.
            </p>
            <p>
              Change is inevitable, there will always be something that is going
              to try to hold you back. When there is a new problem, I find a new
              solution. This is the only way to progress.
            </p>
            <p>
              Today is a new day.
              <br /> I love being a source of color in a binary world!
            </p>
          </div>
        </div>
      </section>
      <section className="work">
        <h2>Projects</h2>
        <div className="projects">
          {projects?.map((e) => {
            return (
              <div className="project" key={e.title}>
                <h3>{e.title}</h3>
                <img src={e.img.src} alt={e.img.alt} />
                <p>{e.desc}</p>
                <a href={e.link} target="_blank" rel="noopener noreferrer">
                  <button>Visit & Explore</button>
                </a>
              </div>
            );
          })}
        </div>
      </section>
      <Contact />
    </div>
  );
}

const projects = [
  {
    img: {
      src: tech,
    },
    alt: "Starting quiz img",
    title: "Tech Sorting Hat",
    link: "https://www.sortinghat.tech/",
    desc:
      "Sorting Hat is a quick quiz application that suggests students the top ranking tracks that they can further look into based on their interests and what they find most important in a job.",
  },
  {
    img: {
      src: null,
    },
    alt: "null",
    title: "Title",
    link: "https://www.bradenbell.tech",
    desc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore natus, nulla voluptatem ut, exercitationem officia itaque at obcaecati eligendi laudantium animi?",
  },
  {
    img: {
      src: "null",
    },
    alt: "null",
    title: "Title",
    link: "https://www.bradenbell.tech",
    desc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore natus, nulla voluptatem ut, exercitationem officia itaque at obcaecati eligendi laudantium animi?",
  },
];

export default App;
