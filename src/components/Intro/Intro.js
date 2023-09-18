import React from "react";
import "./Intro.css";
import bg from "../../assets/image2.png";
import Linkedin from "../../assets/linkdin.png";
import Github from "../../assets/Github.png";

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm<span className="introName"> Dev Anand</span> <br />
          Front-end Developer
        </span>
        <p className="introPara">
          I am a front-end developer and I have a pretty good experience with
          Front-end.
          <br />I have made many cool projects with the help of JavaScript &
          React-JS. <br />
          Also have many more skills.
        </p>
        <div className="btn">
          <button className="btns">
            <a href="https://www.linkedin.com/in/dev-anand-98939b259/" target="_blank"><img src={Linkedin} alt="LinkedIn" className="btnImg" /></a>
          </button>
          <button className="btns">
            <a href="https://github.com/Dev2927" target="_blank"><img src={Github} alt="Github" className="btnImg" /></a>
          </button>
        </div>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;
