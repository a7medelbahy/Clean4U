import "./moreInfo.css";

const MoreInfo = () => {
  return (
    <div className="more-info section-padding">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center text-center justify-content-md-between text-md-start align-items-center">
          <div className="more-info-main">
            <h2 className="text-white display-4 fw-bold">
              FREE SANITIZATION SERVICES
            </h2>
            <h5 className="text-white-50">
              To All New Customers With Recurrent Services. No Contracts!
            </h5>
          </div>
          <div className="more-info-btn text-center">
            <h5 className="text-white m-0">More Information</h5>
            <button className="main-btn py-3 px-4 mt-4">
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
