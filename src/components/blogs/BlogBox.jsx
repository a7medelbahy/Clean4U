import Morebtn from "../Morebtn";
import PlusBtn from "../PlusBtn";

const BlogBox = ({ img, title, categoary, date, comments, content }) => {
  return (
    <div className="blog-box">
      <div className="row g-5 align-items-center">
        <div className="col-lg-5">
          <div className="blog-img rounded-3 overflow-hidden">
            <img src={img} className="img-fluid w-100 d-block" alt="" />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="blog-box-content d-flex flex-column gap-3">
            <h2 className="fw-bolder">{title}</h2>
            <div className="blog-info">
              <i className="fa-solid fa-folder me-2"></i>
              <span>{categoary}</span>
              <i className="fa-solid fa-calendar-days mx-2"></i>
              <span>{date}</span>
              <i className="fa-solid fa-comment mx-2"></i>
              <span>{comments}</span>
            </div>
            <p className="content">{content}</p>
            <div className="blog-more d-flex align-items-center gap-2">
              <Morebtn content="Continue Reading" />
              <PlusBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
