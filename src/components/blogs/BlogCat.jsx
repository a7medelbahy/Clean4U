import { BlogsCategoaryData } from "../../data";

const BlogCat = () => {
  return (
    <nav>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          className="nav-link active"
          id="nav-carpet-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-carpet"
          type="button"
          role="tab"
          aria-controls="nav-carpet"
          aria-selected="true"
        >
          Carpet Cleaning (3)
        </button>
        {BlogsCategoaryData.map((catBtn) => {
          return (
            <button
              key={catBtn.id}
              className="nav-link"
              id={`nav-${catBtn.classN}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#nav-${catBtn.classN}`}
              type="button"
              role="tab"
              aria-controls={`nav-${catBtn.classN} `}
              aria-selected="false"
            >
              {catBtn.title} {catBtn.num}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BlogCat;
