import { useState } from "react";
import { projectData } from "../data/projectData";
import "./projectSection.scss";
import ProjectSectionModal from "./ProjectSectionModal";

export default function ProjectSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      {projectData.map((project, index) => (
        <div
          key={project.title}
          className="project"
          data-type={index % 2 === 0 ? 1 : 2}
        >
          <h2>{project.title}</h2>
          <p>{project.techStack.join(" / ")}</p>
          <div className="button-wrapper">
            <a className="primary-button" href={project.path}>
              Learn More
            </a>

            {project.demo ? (
              <div className="secondary-button">
                <a href={project.demo}>{project.demoText ?? "Demo"}</a>
              </div>
            ) : null}
          </div>

          <img src={project.thumbnail} alt={project.title} />

          {project.github ? (
            <div className="secondary-button">
              <a href={project.github} target="_blank">
                Source Code
              </a>
            </div>
          ) : null}
        </div>
      ))}

      <button onClick={openModal}>View More Projects!</button>
      <ProjectSectionModal open={modalOpen} onClose={closeModal} />
    </>
  );
}
