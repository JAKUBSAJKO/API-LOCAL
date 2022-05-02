import React from "react";
import "./Skills.css";

import BLENDER from "../../assets/skills-blender.png";
import CSS from "../../assets/skills-css.png";
import FIGMA from "../../assets/skills-figma.png";
import GIT from "../../assets/skills-git.png";
import HTML from "../../assets/skills-html.png";
import JS from "../../assets/skills-js.png";
import ME from "../../assets/skills-me.png";
import PY from "../../assets/skills-py.png";
import REACT from "../../assets/skills-react.png";

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h1>Skills</h1>
      <hr className="title-line" />
      <div className="skills-content">
        <div className="skills-row-1">
          <img src={HTML} alt="" />
          <img src={CSS} alt="" />
          <img src={JS} alt="" />
        </div>
        <div className="skills-row-2">
          <img src={FIGMA} alt="" />
          <img src={ME} alt="" />
          <img src={REACT} alt="" />
        </div>
        <div className="skills-row-3">
          <img src={BLENDER} alt="" />
          <img src={GIT} alt="" />
          <img src={PY} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
