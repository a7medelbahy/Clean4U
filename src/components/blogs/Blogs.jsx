import "./blogs.css";
import MainHeading from "../MainHeading";
import BlogCat from "./BlogCat";
import BlogContent from "./BlogContent";

const Blogs = () => {
  return (
    <div className="blogs section-padding">
      <div className="container text-center">
        <MainHeading sub="Our Latest" main="Blogs And Articles" />
        <div
          className="blogs-content mt-5 rounded-4 p-2"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <BlogCat />
          <BlogContent />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
