import MainHeading from "../MainHeading";

const WeAre = () => {
  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="we-are">
        <MainHeading sub="WHO WE ARE" main="Local, professional cleaners" />
        <p className="py-3">
          Let us take of your carpets, using organic products, steam cleaning
          machine and delivering 2 hour carpet dry. Don't let your furniture
          feel old and dirty. We are experts in cleaning chairs, couches,
          armchairs and rugs.
        </p>
        <a href="#about">
          <button type="button" className="main-btn">
            Read More
          </button>
        </a>
      </div>
    </div>
  );
};

export default WeAre;
