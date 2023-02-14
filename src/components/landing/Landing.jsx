import "./landing.css";
import LandingImg from "../../images/landing.png";
import LandingVid from "./LandingVid";

const Landing = () => {
  return (
    <div className="landing section-padding">
      <div className="container">
        <div className="row gy-4 justify-content-center align-items-center">
          <div className="col-lg-6">
            <img
              src={LandingImg}
              className="img-fluid w-100 d-block"
              alt="landing"
            />
          </div>
          <div className="col-lg-6">
            <div className="landing-content text-center text-md-start">
              <h5 className="m-0 fw-bold">We are here to help you make Your</h5>
              <h1 className="display-4 text-white fw-bolder">
                Envrionment CLaen
              </h1>
              <p className="my-4 text-white-50 fw-bold">
                Your health and safety is our utmost priority. We accommodate to
                our clients so if there is a certain way you would like to
                approach future cleanings please inform us.
              </p>
              <LandingVid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
