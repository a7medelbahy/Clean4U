import BlogImg from "../../images/blogs1.jpg";
import BlogBox from "./BlogBox";
import { BlogBoxData } from "../../data";

const BlogContent = () => {
  return (
    <div className="blog-content text-start p-5">
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-carpet"
          role="tabpanel"
          aria-labelledby="nav-carpet-tab"
          tabIndex="0"
        >
          <BlogBox
            img={BlogImg}
            title="Tips for cleaning child care facilities the safe & healthy way"
            categoary="Carpet Cleaning"
            date="July 22, 2020"
            comments="3"
            content="We offer competitive rates to several services with direction comprised. Our site managers guarantee the task is done to the maximum standard.We provide fair, cost-effective and superior support. It’s possible to get a free quote over the telephone."
          />
        </div>
        {BlogBoxData.map((blogItem) => {
          return (
            <div
              key={blogItem.id}
              className="tab-pane fade"
              id={`nav-${blogItem.classN}`}
              role="tabpanel"
              aria-labelledby={`nav-${blogItem.classN}-tab`}
              tabIndex="0"
            >
              <BlogBox
                img={blogItem.img}
                title={blogItem.title}
                date={blogItem.date}
                categoary={blogItem.categoary}
                comments={blogItem.comments}
                content={blogItem.content}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogContent;
