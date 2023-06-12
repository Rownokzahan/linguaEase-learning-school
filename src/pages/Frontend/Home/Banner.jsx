import React, { useRef, useEffect } from "react";
import SwiperCore, { Pagination, Navigation, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "tailwindcss/tailwind.css";

import banner1 from "../../../assets/images/Banner/banner.avif";
import banner2 from "../../../assets/images/Banner/banner2.avif";
import banner3 from "../../../assets/images/Banner/banner3.avif";

SwiperCore.use([Pagination, Navigation, Lazy]);

const Banner = () => {
  const banners = [
    {
      imageUrl: banner1,
      text: "Banner 1 Text",
    },
    {
      imageUrl: banner2,
      text: "Banner 2 Text",
    },
    {
      imageUrl: banner3,
      text: "Banner 3 Text",
    },
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new SwiperCore(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="swiper-container h-64 md:h-80 lg:h-96">
      <div className="swiper-wrapper">
        {banners.map((banner, index) => (
          <div className="swiper-slide" key={index}>
            <img
              data-src={banner.imageUrl}
              alt={`Banner ${index}`}
              className="swiper-lazy object-cover w-full h-full"
            />
            <div className="banner-text bg-black bg-opacity-50 text-white absolute bottom-4 left-4 text-xl px-4 py-2">
              {banner.text}
            </div>
            <div className="swiper-lazy-preloader"></div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next bg-black bg-opacity-50 text-white w-10 h-10 flex items-center justify-center absolute top-1/2 right-4 transform -translate-y-1/2 rounded-full">
        <span className="sr-only">Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <div className="swiper-button-prev bg-black bg-opacity-50 text-white w-10 h-10 flex items-center justify-center absolute top-1/2 left-4 transform -translate-y-1/2 rounded-full">
        <span className="sr-only">Previous</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Banner;
