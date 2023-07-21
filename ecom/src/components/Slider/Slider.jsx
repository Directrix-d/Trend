import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

import "./Slider.scss";
 
 function Slider(){

  const data = [
    "https://images.pexels.com/photos/6461325/pexels-photo-6461325.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1600",
   
  ];

  return (
    <>
    <div className="random">

   <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        >
      <SwiperSlide><img src={data [0]}/></SwiperSlide>
      <SwiperSlide><img src ={data[1]}/></SwiperSlide>
    </Swiper>
        </div>
  </>
   
  );
};

export default Slider;
