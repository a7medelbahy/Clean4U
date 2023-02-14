import { IntroData } from "../../data";

const Tips = () => {
  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="intro-tips d-flex flex-column gap-3">
        {IntroData.map((tipItem) => {
          return (
            <div key={tipItem.id} className="tip-box">
              <h5 className="display-6">{tipItem.icon}</h5>
              <h4 className="fw-bold">{tipItem.title}</h4>
              <p>{tipItem.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tips;
