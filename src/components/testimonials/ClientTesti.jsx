import MainHeading from "../MainHeading";
import Skills from "./Skills";
import SwiperTesti from "./SwiperTesti";

const ClientTesti = () => {
  return (
    <div className="client-testi section-padding">
      <div className="container text-center">
        <MainHeading
          sub="Clients Feedback"
          main="Happy Clients Say About Our Company"
        />
        <div className="row g-4 mt-5">
          <Skills />
          <SwiperTesti />
        </div>
      </div>
    </div>
  );
};

export default ClientTesti;
