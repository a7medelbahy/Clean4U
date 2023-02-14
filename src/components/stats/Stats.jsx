import "./stats.css";
import { StatsData } from "../../data";
import StatBox from "./StatBox";

const Stats = () => {
  return (
    <div className="stats section-padding">
      <div className="container">
        <div className="row g-5 justify-content-center align-items-center">
          {StatsData.map((statItem) => {
            return <StatBox key={statItem.id} statItem={statItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
