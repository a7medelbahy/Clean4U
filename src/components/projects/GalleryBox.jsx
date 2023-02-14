import React, { useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";

const GalleryBox = (props) => {
  return (
    <div
      className="col-6 col-md-4 col-lg-3"
      data-aos="zoom-out"
      data-aos-duration="1000"
    >
      <div className="gallery-box position-relative rounded-2 overflow-hidden">
        <img
          data-fancybox="gallery"
          src={props.galleryItem.img}
          className="img-fluid w-100 d-block"
          alt="gallery"
        />
      </div>
    </div>
  );
};

export default GalleryBox;
