import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./banner.css"
import { Navigation, Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";

import banner1 from "../../../../assets/images/Banner/banner1.avif";
import banner2 from "../../../../assets/images/Banner/banner2.avif";
import banner3 from "../../../../assets/images/Banner/banner3.avif";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      className="mySwiper"
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="w-full h-[90vh] bg-gradient-to-r from-black bg-opacity-10 to-transparent relative">
          <img
            src={banner1}
            className="w-full h-full object-cover mix-blend-overlay"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Welcome to Our Language Learning Camp
            </h1>
            <p className="text-lg mb-8">
              Discover the joy of learning a new language!
            </p>
            <Link
              to="/programs"
              className="bg-accent_2 text-white font-semibold py-3 px-6 rounded whitespace-nowrap"
            >
              View Our Programs
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[90vh] bg-gradient-to-r from-black bg-opacity-10 to-transparent relative">
          <img
            src={banner2}
            className="w-full h-full object-cover mix-blend-overlay"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Experience the Beauty of Japanese Language
            </h1>
            <p className="text-lg mb-8">
              Immerse yourself in the rich culture of Japan!
            </p>
            <Link
              to="/programs"
              className="bg-accent_2 text-white font-semibold py-3 px-6 rounded whitespace-nowrap"
            >
              View Our Programs
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[90vh] bg-gradient-to-r from-black bg-opacity-10 to-transparent relative">
          <img
            src={banner3}
            className="w-full h-full object-cover mix-blend-overlay"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Unleash Your Fluency By Mastering Spanish
            </h1>
            <p className="text-lg mb-8">
              Take your Spanish skills to the next level!
            </p>
            <Link
              to="/programs"
              className="bg-accent_2 text-white font-semibold py-3 px-6 rounded whitespace-nowrap"
            >
              View Our Programs
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
