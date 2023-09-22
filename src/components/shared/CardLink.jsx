import React from "react";
import { Link } from "react-router-dom";

const CardLink = ({ to, icon, title , value }) => {
  return (
    <Link
      to={to}
      state={{
        FromCardRealEstaeType: value
      }}
      className="tw-flex tw-flex-col tw-h-[190px] sm:tw-h-[150px] tw-justify-center tw-items-center tw-mt-2 tw-gap-8 sm:tw-gap-6 tw-border 
    tw-border-gray-50 hover:tw-border-main-blue tw-rounded-md tw-p-3 tw-shadow-sm hover:tw-shadow-lg 
    tw-cursor-pointer tw-transition-all tw-duration-500 tw-ease-in-out"
      data-aos="zoom-out"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <span className="tw-text-2xl tw-drop-shadow-md lg:tw-text-xl sm:tw-text-xl tw-p-4 lg:tw-p-3.5 sm:tw-p-2 tw-border tw-border-main-blue tw-shadow-md tw-rounded-full tw-text-main-blue">
        {icon}
      </span>
      <span className="tw-text-xl lg:tw-text-sm md:tw-text-lg sm:tw-text-sm xs:tw-text-xs tw-capitalize tw-p-2 tw-text-main-blue tw-whitespace-nowrap">
        {title}
      </span>
    </Link>
  );
};

export default CardLink;
