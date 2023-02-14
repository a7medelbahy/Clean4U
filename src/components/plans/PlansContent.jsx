import MainHeading from "../MainHeading";

const PlansContent = () => {
  return (
    <div className="col-lg-4">
      <div className="plans-content text-center text-lg-start">
        <MainHeading sub="Best Package" main="No Extra Cost, Choose Plan" />
        <p className="my-4 text-black-50">
          If you’re stressed out because it feels like there are never enough
          hours in the day, here’s a solution: Hire a housecleaning service. Our
          Office Cleaning Services is here for you, we would love to make you
          happier! Diam maecenas sed enim ut sem viverra aliquet. Platea
          dictumst vestibulum rhoncus est pellentesque. Libero enim sed faucibus
          turpis in eu mi bibendum neque.
        </p>
        <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
          <button className="main-btn monthly">Monthly</button>
          <button className="main-btn yealry">Yearly</button>
        </div>
      </div>
    </div>
  );
};

export default PlansContent;
