import MainHeading from "../MainHeading";
import { GalleryData } from "../../data";
import GalleryBox from "./GalleryBox";

const Gallery = () => {
  return (
    <div className="gallery section-padding text-center">
      <div className="container">
        <MainHeading sub="Take a look at" main="Our Latest Works Gallery" />
        <div className="row mt-5 justify-content-center align-items-center g-4">
          {GalleryData.map((galleryItem) => {
            return (
              <GalleryBox key={galleryItem.id} galleryItem={galleryItem} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
