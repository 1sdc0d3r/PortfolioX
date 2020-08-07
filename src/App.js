import React from "react";
import "./style/App.css";
import projects from "./data/projects";
import Contact from "./components/Contact";
import sunset from "./images/sunset_red.jpeg";

function App() {
  return (
    <div className="App">
      <section className="home">
        <img src={sunset} alt="sunset w/ house" />
        <h1>Braden</h1>
        <h2>Software Engineer</h2>
        <p className="next">
          About <br />^
        </p>
      </section>
      <section className="about">
        <h2>About</h2>
        <div>
          <img src="null" alt="null" />
          <div className="desc">
            <p>I am a fisherman with a passion to develop software.</p>
            <p>
              I evolve to find new solutions to new problems that are presented
            </p>
            <p>I love being a source of color in a binary world </p>
          </div>
        </div>
        <p className="next">
          My Work <br />^
        </p>
      </section>
      <section className="work">
        <h2>Projects</h2>
        <div className="projects">
          {projects?.map((e) => (
            <div className="project" key={e.title}>
              <img src={e.img.src} alt={e.img.alt} />
              <h3>{e.title}</h3>
              <p>{e.desc}</p>
            </div>
          ))}
        </div>
        <p className="next">
          Contact <br />^
        </p>
      </section>
      <Contact />
    </div>
  );
}

export default App;
