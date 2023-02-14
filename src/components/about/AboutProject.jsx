import MainHeading from "../MainHeading";
import { AboutProjectData } from "../../data";
import ProjectFeature from "./ProjectFature";

const AboutProject = () => {
  return (
    <div className="about-project section-padding">
      <div className="container text-center">
        <MainHeading sub="More" main="About Project" />
        <p className="text-center text-md-start my-5">
          Whenever you need office cleaning, our professional cleaners can offer
          a helping hand to you. Whether you need a thorough spring clean or
          regular service, our specialists are happy to help. Eget arcu dictum
          varius duis at consectetur lorem. Porttitor massa id neque aliquam
          vestibulum morbi blandit cursus. Nisi vitae suscipit tellus mauris a
          diam maecenas sed enim. Ipsum nunc aliquet bibendum enim. Aliquet nibh
          praesent tristique magna sit amet purus gravida. Diam maecenas sed
          enim ut sem viverra aliquet. Platea dictumst vestibulum rhoncus est
          pellentesque. Libero enim sed faucibus turpis in eu mi bibendum neque.
          Velit dignissim sodales ut eu sem integer vitae. In tellus integer
          feugiat scelerisque varius morbi enim nunc. Risus viverra adipiscing
          at in tellus. Nulla at volutpat diam ut venenatis tellus in metus
          vulputate.
        </p>
        {AboutProjectData.map((projectFeature) => {
          return (
            <ProjectFeature
              key={projectFeature.id}
              projectFeature={projectFeature}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutProject;
