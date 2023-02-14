import "./intro.css";
import WeAre from "./WeAre";
import InroImg from "../../images/who-we-are.png";
import Tips from "./Tips";

const Intro = () => {
  return (
    <div className="intro section-padding">
      <div className="container text-center text-md-start">
        <div className="row gy-4 justify-content-center align-items-center">
          <WeAre />
          <div className="col-lg-4 d-none d-lg-block">
            <img
              src={InroImg}
              className="img-fluid w-100 d-block"
              alt="intro"
            />
          </div>
          <Tips />
        </div>
      </div>
    </div>
  );
};

export default Intro;
