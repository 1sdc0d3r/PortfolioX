import React, { useEffect, useRef } from "react";
import Typing from "react-typing-animation";
import "./style/App.css";
import tech from "./assets/images/aboutTech.svg";
import fish from "./assets/images/fish.png";
import BsmFlame from "./assets/images/flame.png";
import Contact from "./components/Contact";

// todo add resume?

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
      // const activeNav = [
      //   window.scrollY >= refHome.current.offsetTop &&
      //     window.scrollY < refAbout.current.offsetTop,
      //   window.scrollY >= refAbout.current.offsetTop &&
      //     window.scrollY < refWork.current.offsetTop,
      //   window.scrollY >= refWork.current.offsetTop &&
      //     window.scrollY < refContact.current.offsetTop,
      //   window.scrollY >= refContact.current.offsetTop,
      // ];
      const home = window.scrollY < refAbout.current.offsetTop;
      const about =
        window.scrollY >= refAbout.current.offsetTop &&
        window.scrollY + 10 < refWork.current.offsetTop;
      const work =
        window.scrollY >= refWork.current.offsetTop - 10 &&
        window.scrollY + 20 < refContact.current.offsetTop;
      const contact = window.scrollY >= refContact.current.offsetTop - 20;

      const removeActive = () => {
        document.getElementById("home").classList.remove("active");
        document.getElementById("about").classList.remove("active");
        document.getElementById("work").classList.remove("active");
        document.getElementById("contact").classList.remove("active");
      };

      if (home || about || work || contact) {
        removeActive();
        if (home) document.getElementById("home").classList.add("active");
        else if (about) {
          document.getElementById("about").classList.add("active");
        } else if (work) {
          document.getElementById("work").classList.add("active");
        } else if (contact) {
          document.getElementById("contact").classList.add("active");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll");
    };
  }, []);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

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
        <h1>Braden Bell</h1>
        <Typing
          speed={55}
          startDelay={700}
          hideCursor
          className="typing-animation"
        >
          <p className="typing-script">
            Software
            <br />
            Engineer
          </p>
          {/* <Typing.Backspace delay={500} speed={50} count={9} />
          {/* <Typing.Speed ms={200} /> */}
          {/* developer, engineer (loop?) */}
        </Typing>
        {/* //todo fix bobber here
        //? put nav like water to fill up w/ bobber floating in it?*/}
        {/* <div className="bobber" onClick={() => scrollToRef(refContact)}>
          <p className="bobber-top" />
          <p>
            Drop a
            <br />
            Line
          </p>
        </div> */}
      </section>
      <section className="about">
        <h2>About</h2>
        <div className="description">
          <p className="desc-left">
            I am an avid outdoorsman with a passion to develop software.
          </p>
          <p className="desc-right">
            Languages: HTML, CSS, SASS, Tailwind.css, JavaScript, React, Redux,
            Python, NodeJS, Express, Knex, SQL, Postgres, Git control, and
            testing (Jest and Cypress).
          </p>
        </div>
      </section>
      <section className="work">
        <h2>Projects</h2>
        <div className="projects">
          {projects?.map((e) => {
            return (
              <div className="project" key={e.title}>
                <h3>{e.title}</h3>
                <img
                  src={e.img.src}
                  alt={e.img.alt}
                  className={`project${e.id}`}
                />
                <p>{e.desc}</p>
                <div className="btns">
                  <a href={e.website} target="_blank" rel="noopener noreferrer">
                    <button>Visit Website</button>
                  </a>
                  <a href={e.code} target="_blank" rel="noopener noreferrer">
                    <button>View Code</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Contact />
      <span id="copy">©2022 1sdc0d3r</span>
    </div>
  );
}

const projects = [
  {
    id: 1,
    img: {
      src: tech,
    },
    alt: "Starting quiz img",
    title: "Tech Sorting Hat",
    website: "https://www.sortinghat.tech/",
    code: "https://github.com/Lambda-School-Labs/sorting-hat-fe",
    desc: "Sorting Hat is a quick quiz that suggests the top ranking tracks in software development. As a result this allows them to research more into that specific careers based on their interests. Languages: React, TailwindCSS, Cypress, and Jest.",
  },
  {
    id: 2,
    img: {
      src: BsmFlame,
    },
    alt: "Blue Smoke Digital and Printed Media Flame",
    title: "Blue Smoke Digital and Printed Media",
    website: "https://bluesmokedigitalandprintedmedia.com",
    code: "https://github.com/blue-smoke-media",
    desc: "Blue Smoke Media is a startup company that focuses on custom website designs and search engine optimization. I worked closely with a graphic designer to build out a fully responsive website with React, Node, and MySQL.",
  },
  {
    id: 3,
    img: {
      src: fish,
    },
    alt: "Conway's Game of Life",
    title: "Conway's Game",
    website: "https://conways-game-of-life.bradenbell.vercel.app",
    code: "https://github.com/1sdc0d3r/Conways-Game-Of-Life",
    desc: "The Game of Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. I wrote this with pure JavaScript and CSS",
  },
];

export default App;
