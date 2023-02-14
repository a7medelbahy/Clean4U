const MainHeading = ({ sub, main }) => {
  return (
    <div className="main-heading">
      <h6 className="fw-bold m-0">{sub}</h6>
      <h2 className="fw-bolder m-0 display-5">{main}</h2>
    </div>
  );
};

export default MainHeading;
