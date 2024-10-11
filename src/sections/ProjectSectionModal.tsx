import { useEffect, useRef, useState } from "react";
import Modal from "../components/Modal";
import { SetState } from "../types";
import { allProjects } from "../data/allProjects";

type Props = {
  open: boolean;
  onClose: SetState<boolean>;
};
export default function ProjectSectionModal({ open, onClose }: Props) {
  const [activeTechnologies, setActiveTechnologies] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  // Select or deselect a technology
  const toggleTechnology = (technology: string) => {
    if (activeTechnologies.includes(technology)) {
      setActiveTechnologies(activeTechnologies.filter((t) => t !== technology));
    } else {
      setActiveTechnologies([...activeTechnologies, technology]);
    }
  };

  // Get all technologies from all projects
  const getAllTechnologies = () => {
    const allTechnologies = allProjects.reduce<string[]>((acc, project) => {
      const technologies = project.techStack;
      return [...acc, ...technologies];
    }, []);

    const uniqueTechnologies = Array.from(new Set(allTechnologies));
    return uniqueTechnologies;
  };

  const technologyDataRef = useRef(getAllTechnologies());

  useEffect(() => {
    if (activeTechnologies.length === 0) {
      setFilteredProjects(allProjects);
      return;
    }

    const filteredProjects = allProjects.filter((project) => {
      return project.techStack.some((tech) =>
        activeTechnologies.includes(tech)
      );
    });

    setFilteredProjects(filteredProjects);
  }, [activeTechnologies]);

  return (
    <Modal open={open} onClose={() => onClose(false)}>
      <div className="project-section-modal">
        <h2 className="project-section-modal__title">More Projects</h2>

        <div className="project-section-modal__projects">
          Filter: 
          {technologyDataRef.current.map((technology) => {
            return (
              <div
                key={technology}
                className="project-section-modal__technology"
                data-active={activeTechnologies.includes(technology)}
                onClick={() => toggleTechnology(technology)}
              >
                {technology}
              </div>
            );
          })}
        </div>
        {filteredProjects.map((project) => (
          <div key={project.title} className="project-section-modal__project">
            <h3>{project.title}</h3>
            <p>{project.techStack.join(" / ")}</p>
            <p>{project.description}</p>
            <a href={project.demo} target="_blank">
              Demo
            </a>
            <a href={project.github} target="_blank">
              Source Code
            </a>
          </div>
        ))}
      </div>
    </Modal>
  );
}
