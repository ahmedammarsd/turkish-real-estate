import React from "react";

const TitleHeader = ({ title, bgImageSrc }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImageSrc})`,
      }}
      className="tw-relative tw-py-7 tw-px-4 tw-w-full tw-h-[350px] tw-bg-cover tw-bg-center tw-flex tw-justify-center tw-items-center"
    >
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gradient-to-t tw-from-[rgba(0,0,0,.8)] tw-to-[rgba(0,0,0,0.4)] tw-to-60%" />
      <div className="tw-static tw-z-1 tw-p-2 tw-w-[85%] sm:tw-w-[95%] tw-h-full tw-border-b-2 sm:tw-border-b tw-border-white tw-flex tw-justify-start tw-items-end">
        <h1 className="tw-text-white tw-capitalize tw-text-5xl tw-cursor-none md:tw-text-4xl sm:tw-text-2xl xs:tw-text-xl tw-py-3 sm:tw-py-2 tw-whitespace-nowrap tw-font-semibold sm:tw-font-normal">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
