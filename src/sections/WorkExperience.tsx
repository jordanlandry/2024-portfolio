import Link from "../components/Link";
import { workData } from "../data/workData";
import { getReadableTime } from "../util/getReadableTime";
import "./workExperience.scss";

export default function WorkExperience() {
  return (
    <>
      <h2 className="work-experience-title">Work Experience</h2>
      {workData.map((work, _index) => {
        return (
          <div key={work.companyName} className="work-experience">
            <div className="work-title">
              <h3>{work.companyName}</h3>
              <img src={work.logo} />
            </div>

            <div className="work-position">{work.position}</div>
            <div className="work-date-wrapper">
              {getReadableTime(work.startDate)} -{" "}
              {getReadableTime(work.endDate)}
            </div>

            <div className="work-tech-stack-wrapper">
              {work.techStack.map((tech) => {
                return (
                  <div key={tech} className="work-tech-item">
                    {tech}
                  </div>
                );
              })}
            </div>
            <div className="work-description">
              <p>{work.description}</p>
            </div>

            {work.linkedin ? (
              <Link
                className="work-linkedin"
                href={work.linkedin}
                target="_blank"
              >
                <img src="/images/icons/linkedin.svg" />
                LinkedIn
              </Link>
            ) : null}
          </div>
        );
      })}
    </>
  );
}
