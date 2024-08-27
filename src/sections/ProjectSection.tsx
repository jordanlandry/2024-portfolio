import { projectData } from "../data/projectData";
import "./projectSection.scss";

export default function ProjectSection() {
  return (
    <>
      {projectData.map((project, index) => (
        <div className="project" data-type={index % 2 === 0 ? 1 : 2}>
          <h2>{project.title}</h2>
          <p>{project.techStack.join(" / ")}</p>
          <div className="button-wrapper">
            <div className="primary-button">
              <a href="/">Learn More</a>
            </div>

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
    </>
  );
}
