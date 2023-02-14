import MainHeading from "../MainHeading";
import "./news.css";
import { NewsData } from "../../data";
import NewsBox from "./NewsBox";

const News = () => {
  return (
    <div className="news section-padding">
      <div className="container text-center">
        <MainHeading
          sub="Recent News"
          main="We Will Make Absolutely Any Place Clean, Neat & Tidy."
        />
        <div className="row mt-5 g-5 justify-content-center align-items-center">
          {NewsData.map((newsItem) => {
            return <NewsBox key={newsItem.id} newsItem={newsItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
