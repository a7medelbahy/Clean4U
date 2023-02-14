import { PlansData } from "../../data";
import "./plans.css";
import PlansBox from "./PlansBox";
import PlansContent from "./PlansContent";

const Plans = () => {
  return (
    <div className="plans section-padding">
      <div className="container">
        <div className="row g-4 align-items-center justify-content-center">
          <PlansContent />
          <div className="col-lg-8">
            <div className="row g-4">
              {PlansData.map((plansItem) => {
                return <PlansBox key={plansItem.id} plansItem={plansItem} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
