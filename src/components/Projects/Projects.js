import React from "react";
import "./Projects.css";
import projectOne from "../../assets/project-1.jpg";
import projectTwo from "../../assets/project-2.jpg";
import projectFive from "../../assets/project-5.jpg";

const Projects = () => {
  return (
    <section id="projects">
      <span className="projectTitle">Projects</span>
      <span className="projectDsec">Here are some of my projects:- </span>

      <div className="projectCards">
        <div className="projectCard">
          <img src={projectOne} alt="" className="projectImg" />
          <div className="projectText">
            <h2>NETFLIX CLONE-WITH THE HELP OF API: </h2>
            <p>
              This project is made with the help of Next JS. It updates about
              any new series/movie that is updated on Netflix. It is a full
              stack website that also saves users information and reviews if
              they give any with the help of MongoDB. Coding language used :
              Next-JS
            </p>
          </div>
        </div>
        <div className="projectCard">
          <img src={projectTwo} alt="" className="projectImg" />
          <div className="projectText">
            <h2>E-commerce website: </h2>
            <p>
              This is an E-commerce website that is made with the help of
              React-JS. The best feature of this website is that it can filter
              items according to the customers' needs. For example : If a user
              needs black shoes or only sneakers, this website is capable of
              filtering all kinds of shoes for the user.
            </p>
          </div>
        </div>
        <div className="projectCard">
          <img src={projectFive} alt="" className="projectImg" />
          <div className="projectText">
            <h2>Photo Editor: </h2>
            <p>
              So I have created this website with the help of JavaScript. This
              is a Photo editor website where you can add filters and can set
              the range for your filters as per your choice. Also, if you don't
              like the filter you had firstly selected , then you can also reset
              the edited image. You can save your edited images in your gallery
              as well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
