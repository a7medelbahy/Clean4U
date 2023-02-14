import Intro from "./components/introduction/Intro";
import Landing from "./components/landing/Landing";
import MoreInfo from "./components/moreInfo/MoreInfo";
import Navbar from "./components/navbar/Navbar";
import News from "./components/News/News";
import Services from "./components/services/Services";
import Works from "./components/projects/Works";
import About from "./components/about/About";
import Stats from "./components/stats/Stats";
import Testimonials from "./components/testimonials/Testimonials";
import Blogs from "./components/blogs/Blogs";
import Plans from "./components/plans/Plans";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import UpBtn from "./components/UpBtn";
import { CirclesWithBar } from "react-loader-spinner";
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  const styling = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    margin: "0px 0px",
  };

  return (
    <>
      {loading ? (
        <CirclesWithBar
          height="120"
          width="120"
          color="#13287d"
          wrapperStyle={styling}
          wrapperClass=""
          visible={loading}
          outerCircleColor=""
          innerCircleColor="#ffc600"
          barColor="#279e64"
          ariaLabel="circles-with-bar-loading"
        />
      ) : (
        <div>
          <Navbar />
          <Landing />
          <Intro />
          <News />
          <Services />
          <MoreInfo />
          <Works />
          <About />
          <Stats />
          <Testimonials />
          <Blogs />
          <Plans />
          <Contact />
          <Footer />
          <UpBtn />
        </div>
      )}
    </>
  );
};

export default App;
