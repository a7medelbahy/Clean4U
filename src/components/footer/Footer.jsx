import "./footer.css";
import FooterLogo from "../../images/logo.png";
import SocialIcons from "../SocialIcons";

const Footer = () => {
  return (
    <div className="footer py-5">
      <div className="container">
        <div className="footer-content d-flex flex-wrap align-items-center justify-content-center gap-3 justify-content-lg-between">
          <div className="footer-logo d-flex align-items-center gap-3">
            <img src={FooterLogo} className="img-fluid" alt="logo" />
            <h3 className="d-inline-block m-0 fw-bolder">Clean4U</h3>
          </div>
          <div className="footer-desc text-center">
            <p className="m-0">
              &copy; All Rights Reserved. Coded by <span>Ahmed Elbahy</span>
            </p>
          </div>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Footer;
