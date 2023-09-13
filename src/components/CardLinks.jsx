import React, { useEffect, useState } from "react";
import { linksNavbar } from "../Links-navbar/Links";
import CardLink from "./shared/CardLink";
import { useTranslation } from "react-i18next";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useSelector } from "react-redux";

const CardLinks = () => {
  const { t } = useTranslation();
  const screenWidth = useSelector( (state) => state.screenReducer.screenWidth)
  // const [screenSize, setSecreenSize] = useState(window.innerWidth);
  // const handleResize = addEventListener("resize", () => {
  //   setSecreenSize(window.innerWidth);
  // });
  // useEffect(() => {
  //   handleResize;
  // }, []);
  return (
    <div className="tw-py-2 tw-relative tw-flex tw-justify-center tw-items-center">
      <div className="tw-w-full">
        <div className="tw-w-[85%] sm:tw-w-[95%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
          <div
            //   className="tw-grid tw-grid-cols-3 md:tw-grid-cols-2 tw-items-center tw-gap-1 tw-mt-3"
            className="tw-p-10"
          >
            <Swiper
              autoplay={{
                delay: 1000,
              }}
              loop={true}
              speed={1600}
              slidesPerView={screenWidth > 767 ? 3 : screenWidth < 450 ? 1 : 2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="tw-w-full tw-h-full"
              dir="ltr"
            >
              {linksNavbar.map((link, index) => (
                <SwiperSlide key={index}>
                  <CardLink
                    to={link.to}
                    icon={link.icon}
                    title={t(link.name)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLinks;
