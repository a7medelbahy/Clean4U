import MainHeading from "../MainHeading";
import { SkillsData } from "../../data";
import SkillsBox from "./SkillsBox";

const Skills = () => {
  return (
    <div className="col-lg-6" data-aos="fade-down" data-aos-duration="1000">
      <div className="skills text-start p-5 rounded-4 bg-white">
        <MainHeading
          sub="Best Expertise"
          main="Our Skills Rating Due To Reviews"
        />
        <div className="skill-content d-flex flex-column gap-5 mt-5">
          {SkillsData.map((skillsItem) => {
            return <SkillsBox key={skillsItem.id} skillsItem={skillsItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
