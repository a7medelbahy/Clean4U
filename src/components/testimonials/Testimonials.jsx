import CeoTesti from "./CeoTesti";
import ClientTesti from "./ClientTesti";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials mt-5" id="testimonials">
      <CeoTesti />
      <ClientTesti />
    </div>
  );
};

export default Testimonials;
