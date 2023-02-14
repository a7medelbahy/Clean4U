const ProjectFeature = (props) => {
  return (
    <div
      className="text-center text-md-start project-feature d-flex flex-wrap justify-content-center justify-content-md-start align-items-center gap-3"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h3 className="p-2 rounded">{props.projectFeature.icon}</h3>
      <div>
        <h4>{props.projectFeature.title}</h4>
        <p>{props.projectFeature.desc}</p>
      </div>
    </div>
  );
};

export default ProjectFeature;
