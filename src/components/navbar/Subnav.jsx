import SocialIcons from "../SocialIcons";

const SubNav = () => {
  return (
    <div className="sub-nav py-2" id="top">
      <div className="container text-center">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-3">
            <SocialIcons />
          </div>
          <div className="col-md-4">
            <p className="open-time m-0 fs-5 fw-bold">
              Opening Hours: <span>9:30AM - 5:30PM</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
