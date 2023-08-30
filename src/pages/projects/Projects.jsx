import React from "react";
import "../projects/projects.css";
import Comeback from "../../components/comeback/Comeback";
import { elements } from "../../components/myProjects/MyProjects";

function Projects() {
  return (
    <section className="projects__section">
      <Comeback />
      <h1 className="project__title">Projects</h1>
      <div className="poject__section__container">{elements}</div>
    </section>
  );
}

export default Projects;
