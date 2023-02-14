import MainHeading from "../MainHeading";
import "./works.css";
import { ProjectsData } from "../../data";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  return (
    <div className="projects section-padding">
      <div className="container text-center">
        <MainHeading sub="Finished Project" main="Recent Completed Project" />
        <div className="row g-5 text-start justify-content-center align-items-center mt-5">
          {ProjectsData.map((projectItem) => {
            return (
              <ProjectBox key={projectItem.id} projectItem={projectItem} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
