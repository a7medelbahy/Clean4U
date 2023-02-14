import CeoImg from "../../images/ceo.jpg";
import SocialIcons from "./../SocialIcons";

const CeoTesti = () => {
  return (
    <div className="ceo-testi py-5">
      <div className="container">
        <div className="row g-5 text-center text-md-start align-items-center justify-content-center justify-contet-md-start">
          <div className="col-md-3 col-lg-2">
            <div className="ceo-img overflow-hidden">
              <img src={CeoImg} className="img-fluid w-100 d-block" alt="ceo" />
            </div>
          </div>
          <div className="col-md-9 col-lg-10">
            <div className="ceo-content">
              <h4 className="m-0">Brent Cameron</h4>
              <small className="fw-bold">CEO & CO-Founder</small>
              <p className="my-4">
                We are a friendly and hard working team, so feel free to contact
                us if you have any questions about our services. Our team uses
                plant-derived Method Products and Miele vacuum cleaners with
                HEPA filters geared to address dust and allergens.Here at
                CleanM4 Cleaning Service, our team prides itself on their
                attention to detail, using the highest quality tools and
                materials to care for your home or office.
              </p>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoTesti;
