import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./imageslider.css";
// import required modules
import { Grid, Navigation } from "swiper/modules";

export default function ImageSlider() {
  return (
    <>
      <div className="app">
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2
          }}
          navigation={true}
          spaceBetween={30}
          // pagination={{

          //   clickable: true,

          // }}

          modules={[Grid, Navigation]}
          // loop={true}

          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>

          <SwiperSlide>Slide 2</SwiperSlide>

          <SwiperSlide>Slide 3</SwiperSlide>

          <SwiperSlide>Slide 4</SwiperSlide>

          <SwiperSlide>Slide 5</SwiperSlide>

          <SwiperSlide>Slide 6</SwiperSlide>

          <SwiperSlide>Slide 7</SwiperSlide>

          <SwiperSlide>Slide 8</SwiperSlide>

          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
