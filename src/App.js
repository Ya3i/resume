import React, { Component } from "react";

import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import { Link, Element } from "react-scroll";


import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation">
          <div className="Right">
          </div>
            <div className="Left">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                delay={0}
              >
              <h4>About</h4>
              </Link>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                delay={0}
              >
                <h4>Skills</h4>
              </Link>
            </div>
        </div>
        <TitlesSection />
        <Element name="about" className="element" />
        <AboutSection />
        <Element name="skills" className="element" />
        <SkillSection />
      </div>
    );
  }
}

export default App;
