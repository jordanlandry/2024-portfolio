import "./aboutMe.scss";

export default function AboutMe() {
  const codingStartYear = 2016;
  const codingSince = new Date().getFullYear() - codingStartYear;

  return (
    <>
      <div className="about-me-section" id="about">
        <h1>About Me</h1>
        <div>
          I am a self-taught software developer with {codingSince}+ years of
          experience. 
        </div>
      </div>
    </>
  );
}
