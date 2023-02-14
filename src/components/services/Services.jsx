import MainHeading from "../MainHeading";
import "./services.css";
import { ServicesData } from "../../data";
import ServiceBox from "./ServiceBox";

const Services = () => {
  return (
    <div className="services section-padding text-center" id="services">
      <div className="container">
        <MainHeading
          sub="Trained employees"
          main="Cleaning Options To Fit Your Needs"
        />
        <div className="row g-5 mt-5 justify-content-center align-items-center">
          {ServicesData.map((serviceItem) => {
            return (
              <ServiceBox key={serviceItem.id} serviceItem={serviceItem} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
