import React from "react";
import Bults from "./Bults";

const TitleAndDesc = ({ title, desc , isTransparentForTitle , isTransparentForDesc }) => {
  return (
    <>
      <div className="tw-flex tw-items-center">
        <Bults isTransparent={isTransparentForTitle} />
        <span className="tw-text-3xl lg:tw-text-2xl tw-capitalize tw-font-bold tw-text-main-blue tw-p-5 sm:tw-p-3 tw-whitespace-nowrap sm:tw-text-lg">
          {title}
        </span>
      </div>
      <div className=" tw-flex tw-items-center">
        <Bults isTransparent={isTransparentForDesc} />
        <p className="tw-text-lg sm:tw-text-xs tw-p-4 sm:tw-p-3 tw-text-gray-500">
         {desc}
        </p>
      </div>
    </>
  );
};

export default TitleAndDesc;
