import { TestimonialsData } from "../../data";
import TestiBox from "./TestiBox";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperTesti = () => {
  return (
    <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1000">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {TestimonialsData.map((clientItem) => {
          return (
            <SwiperSlide key={clientItem.id}>
              <TestiBox clientItem={clientItem} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperTesti;
