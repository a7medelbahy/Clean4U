import "./contact.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";

const Contact = () => {
  return (
    <div className="contact pt-5" id="contact">
      <div className="container">
        <div className="row g-5">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <ContactMap />
    </div>
  );
};

export default Contact;
