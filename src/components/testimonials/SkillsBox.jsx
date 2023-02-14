const SkillsBox = (props) => {
  return (
    <div className="skills-box">
      <h6>{props.skillsItem.title}</h6>
      <div className="progress" style={{ height: "22px" }}>
        <div
          className="progress-bar pe-3 progress-bar-striped progress-bar-animated bg-warning"
          role="progressbar"
          aria-label="Animated striped example"
          aria-valuenow={props.skillsItem.skill}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${props.skillsItem.skill}%` }}
        >
          {props.skillsItem.skill}%
        </div>
      </div>
    </div>
  );
};

export default SkillsBox;
