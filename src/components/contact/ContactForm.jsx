import MainHeading from "../MainHeading";

const ContactForm = () => {
  return (
    <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1000">
      <div className="contact-form">
        <MainHeading main="Get In Touch" />
        <div className="row g-3 mt-2">
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
          <div className="col-sm-6">
            <input
              type="email"
              className="form-control"
              placeholder="E-Mail"
              aria-label="E-Mail"
            />
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Your Subject"
              aria-label="Your Subject"
            />
          </div>
          <div className="col-12">
            <textarea
              name="Your Message"
              placeholder="Your Messgae"
              className="w-100 border rounded-3 p-3"
            ></textarea>
          </div>
        </div>
      </div>
      <button className="mt-2 main-btn">Send Message</button>
    </div>
  );
};

export default ContactForm;
