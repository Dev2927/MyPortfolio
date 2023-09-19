import React from "react";
import "./Skills.css";
import UI from "../../assets/ui-design.png";
import PS from "../../assets/website-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        I am a front-end developer and I have a pretty good experience with
        Front-end. I have made many cool projects with the help of JavaScript
        and React-JS. Also I have hands on skills over many different coding
        languages. I consistently practise what I've already learned, make
        different projects and try to gain knowledge about new skills.
      </span>

      <div className="skillBars">
        <div className="skillBar">
          <img src={UI} alt="UI design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Front end Development</h2>
            <p>
              I possess the quality of making good UI designs and have a good
              knowledge of front end development.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={PS} alt="Problem solving" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Problem and Bugs solving</h2>
            <p>
              I own the ability of effective problem and bug solving in many
              coding languages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
