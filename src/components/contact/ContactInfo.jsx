import { ContactInfoData } from "../../data";
import MainHeading from "./../MainHeading";
const ContactInfo = () => {
  return (
    <div className="col-lg-6" data-aos="fade-down" data-aos-duration="1000">
      <div className="contact-info">
        <MainHeading
          sub="Contact Information"
          main="Have Any Question? Contact With Us"
        />
        <ul className="d-flex flex-column gap-3 p-0 mt-5">
          {ContactInfoData.map((contactItem) => {
            return (
              <li key={contactItem.id}>
                {contactItem.icon} {contactItem.info}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
