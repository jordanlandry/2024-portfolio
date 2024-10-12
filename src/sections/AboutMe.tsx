import { createRef, useState } from "react";
import FadeInOnScroll from "../components/FadeInOnScroll";
import "./aboutMe.scss";

export default function AboutMe() {
  const codingStartYear = 2016;
  const codingSince = new Date().getFullYear() - codingStartYear;

  const path = "images/icons/";

  const skillColumnsData = [
    [
      { name: "React", icon: "react.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "Angular", icon: "angular.svg" },
    ],
    [
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "HTML", icon: "html.svg" },
      { name: "CSS", icon: "css.svg" },
      { name: "Sass", icon: "sass.svg" },
    ],
    [
      { name: "Expo", icon: "expo.svg" },
      { name: "Python", icon: "python.svg" },
      { name: "AWS", icon: "aws.svg" },
    ],
  ];

  const allSkills = skillColumnsData.flat();
  const skillCount = allSkills.length;

  // Interval between the fade-in animations
  const delayIntervalMs = 125;
  const delayTimes = Array.from(
    { length: skillCount },
    (_, index) => index * delayIntervalMs
  );

  // Randomize the delay times for each skill
  const skillColumns = skillColumnsData.map((column) => {
    const columnsWithDelays = column.map((skill) => {
      const randomIndex = Math.floor(Math.random() * delayTimes.length);
      const randomDelay = delayTimes[randomIndex];

      // Remove the delay time from the array so it doesn't get used again
      delayTimes.splice(delayTimes.indexOf(randomDelay), 1);
      return { ...skill, delayMs: randomDelay };
    });

    return columnsWithDelays;
  });

  return (
    <>
      <div className="about-me-section" id="about">
        <h1>About Me</h1>
        <div>
          I am a self-taught software developer with {codingSince}+ years of
          experience.
        </div>

        <h2>Skills</h2>
        <div className="about-me-skill-wrapper">
          {skillColumns.map((column) => (
            <div key={JSON.stringify(column)} className="skill-wrapper-column">
              {column.map((skill) => (
                <FadeInOnScroll key={skill.name} delayMs={skill.delayMs}>
                  <div key={skill.name} className="skill-item">
                    <img src={path + skill.icon} alt={skill.name} />
                    <div>{skill.name}</div>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
