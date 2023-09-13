import React from "react";
import { BsClockHistory } from "react-icons/bs";

const CardNews = ({ type, image, category, title, date , customNav }) => {
  return (
    <div
    onClick={customNav}
    >
      <div className="tw-overflow-hidden tw-rounded-sm tw-shadow-sm hover:tw-shadow-md tw-duration-500 tw-cursor-pointer">
        <div className="tw-w-full tw-h-[140px]">
          <img src={image} className=" tw-w-full tw-h-full tw-object-cover" />
        </div>
        <div className="tw-flex tw-items-start tw-flex-col tw-gap-5 sm:tw-gap-3 tw-p-2 tw-py-4">
          <div>
            <span className="tw-p-2 tw-px-2.5 tw-bg-main-blue tw-text-white tw-whitespace-nowrap tw-text-sm xs:tw-text-xs xs:tw-p-1.5 tw-rounded-sm tw-capitalize">
              {category}
            </span>
          </div>
          <div>
            <span className="tw-font-bold tw-text-xl sm:tw-text-lg tw-capitalize tw-whitespace-nowrap tw-text-main-blue">
              {title.slice(0,40)}
            </span>
          </div>
          <div className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-gray-400 xs:tw-text-xs">
            <span><BsClockHistory /></span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
