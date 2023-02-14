import AboutImg from "../../images/about.jpg";
import AboutCompany from "./AboutCompany";
import AboutYears from "./AboutYears";

const MainAbout = () => {
  return (
    <div className="main-about section-padding">
      <div className="container">
        <div className="row g-5 justify-content-center align-items-center">
          <div
            className="col-lg-6"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <img
              src={AboutImg}
              className="img-fluid w-100 d-none d-lg-block rounded-3"
              alt="About"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1000">
            <div className="main-content d-flex flex-column gap-3">
              <AboutCompany />
              <AboutYears />
              <button className="main-btn mt-4">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
