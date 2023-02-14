import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const StatBox = (props) => {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="stat-box text-center text-white d-flex flex-column gap-4 align-items-center">
        <div className="stat-icon d-flex justify-content-center align-items-center">
          <h4 className="display-6">{props.statItem.icon}</h4>
        </div>
        <div className="stat-info">
          <h4 className="display-5 fw-bold">
            <CountUp end={props.statItem.num} duration={3} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h4>
          <p className="text-white-50 m-0">{props.statItem.title}</p>
        </div>
      </div>
    </div>
  );
};

export default StatBox;
