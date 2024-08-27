import { workData } from "../data/workData";
import "./workExperience.scss";

export default function WorkExperience() {
  return (
    <>
      {workData.map((work, index) => {
        return (
          <div key={index} className="work-experience">
            
          </div>
        );
      })}
    </>
  );
}
