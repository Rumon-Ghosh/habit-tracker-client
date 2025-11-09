import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MySlider = () => {
  return (
    <Swiper
      className="mb-15"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="card bg-base-100 image-full mx-auto w-11/12 h-[300px] shadow-sm">
          <figure>
            <img
              className="w-full object-cover"
              src="https://i.ibb.co/PsqVSzS2/istockphoto-1528036967-612x612.jpg"
              alt="Build Better Habits"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Build Habits That Last</h2>
            <p className="text-white">
              Track your daily progress and stay consistent with powerful habit-building tools designed for success.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="card bg-base-100 image-full px-2 md:px-10 w-full h-[300px] shadow-sm">
          <figure>
            <img
              className="w-full object-cover"
              src="https://i.ibb.co/YGjPGDn/istockphoto-1125859091-612x612.jpg"
              alt="Stay Motivated"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Stay Motivated Every Day</h2>
            <p className="text-white">
              Watch your streaks grow and get motivated to complete your daily goals with reminders and progress tracking.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="card bg-base-100 image-full px-2 md:px-10 w-full h-[300px] shadow-sm">
          <figure>
            <img
              className="w-full object-cover"
              src="https://i.ibb.co/BVc52TT1/self-care-personal-health-habits-260nw-2053800446.webp"
              alt="Organize Your Goals"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Organize Your Life</h2>
            <p className="text-white">
              Set clear goals, break them into daily habits, and track your growth with beautiful analytics.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 4 */}
      <SwiperSlide>
        <div className="card bg-base-100 image-full px-2 md:px-10 w-full h-[300px] shadow-sm">
          <figure>
            <img
              className="w-full object-cover"
              src="https://i.ibb.co/rGSDpN4p/istockphoto-687810810-612x612.jpg"
              alt="Achieve Your Best Self"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Achieve Your Best Self</h2>
            <p className="text-white">
              Small actions every day create big results. Start your journey toward a disciplined and productive lifestyle.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySlider;
