import React from "react";
import { ImLocation2 } from "react-icons/im";

const NearestTourist = ({ image, title, distance }) => {
  return (
    <div
      className="tw-flex tw-flex-col tw-justify-end tw-items-start tw-gap-3 tw-relative
    tw-rounded-md tw-cursor-pointer tw-h-[250px] sm:tw-h-[160px] tw-overflow-hidden tw-p-4 tw-py-5 tw-group tw-shadow-sm tw-transition-all tw-duration-500"
    >
      <div className="tw-absolute tw-top-0 tw-right-0 -tw-z-2 tw-w-full tw-h-full group-hover:-tw-rotate-1 group-hover:tw-scale-105 tw-duration-500">
        <img
          src={image}
          alt="image"
          className="tw-w-full tw-h-full tw-object-cover"
        />
      </div>
      <div className="tw-absolute tw-top-0 tw-right-0 tw-bg-transparent-black4 -tw-z-1 tw-w-full tw-h-full tw-duration-500" />
      <div className="tw-flex tw-justify-between tw-items-center tw-text-white tw-w-full">
        <span className="tw-capitalize tw-text-lg sm:tw-text-sm">{title}</span>
        <span className="tw-flex tw-items-center tw-gap-2 tw-text-sm xs:tw-text-xs">
          <span><ImLocation2 /></span>
          <span>{distance} KM</span>
        </span>
      </div>
    </div>
  );
};

export default NearestTourist;
