import React, { useState, useEffect } from "react";
import Typing from "react-typing-animation";
import "./style/App.css";
import Contact from "./components/Contact";
import sunset from "./assets/images/sunset_red.jpeg";
import tech from "./assets/images/aboutTech.svg";

function App() {
  return (
    <div className="App">
      <nav>
        <div>
          <p>Home</p>
          <p>About</p>
          <p>Work</p>
          <p>Contact</p>
        </div>
      </nav>
      <section className="home">
        <img src={sunset} alt="sunset w/ house" />
        <h1>Braden</h1>
        <Typing speed={65}>
          <h2 id="sub-header">Software Engineer</h2>
          {/* <Typing.Backspace delay={500} speed={8} /> */}
        </Typing>
        <div className="bobber">
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
        {/* <p className="next">
          Contact <br />v
        </p> */}
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
