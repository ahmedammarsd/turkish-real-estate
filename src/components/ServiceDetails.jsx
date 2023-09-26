import React from 'react'
import { useSelector } from 'react-redux';
import { AiOutlineEye } from "react-icons/ai"

const ServiceDetails = ({mainService, image , views  , titleSub ,  descMain , desc , body }) => {
    const langCode = useSelector((state) => state.selectLang.currentLanguageCode)
  return (
    <div className="tw-relative">
    <div className="tw-w-full tw-h-[500px]">
        <img src={image} className="tw-w-full tw-h-full tw-object-cover" />
    </div>
    <div className={`tw-absolute tw-top-4 ${langCode === "en" ? "tw-left-4" : "tw-right-4"} tw-p-2 tw-px-2.5 tw-bg-main-blue tw-text-white tw-whitespace-nowrap tw-text-sm xs:tw-text-xs xs:tw-p-1.5 tw-rounded-sm tw-capitalize`}>
    <span className="tw-p-2 tw-px-2.5 tw-bg-main-blue tw-text-white tw-text-sm xs:tw-text-xs xs:tw-p-1.5 tw-rounded-sm tw-capitalize">
          {mainService}
        </span>
    </div>
    <div className="tw-flex tw-items-start tw-flex-col tw-gap-5 sm:tw-gap-3 tw-p-4 tw-py-5">
    <div className=" tw-flex tw-justify-between tw-w-full tw-items-center">
        <span className="tw-p-2 tw-px-2.5 tw-bg-main-blue tw-text-white tw-text-sm xs:tw-text-xs xs:tw-p-1.5 tw-rounded-sm tw-capitalize">
          {titleSub}
        </span>
        <div className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-gray-400 xs:tw-text-xs">
        <span><AiOutlineEye /></span>
        <span>{views}</span>
      </div>
      </div>
      <div>
        <span className="tw-font-bold tw-text-lg sm:tw-text-lg tw-capitalize tw-whitespace-nowrap tw-text-main-blue">
        {
            descMain.split("\n")
            .map( (item , index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))
           }
        </span>
      </div>
      <div>
        <span className="tw-font-bold tw-text-lg sm:tw-text-lg tw-capitalize tw-whitespace-nowrap tw-text-main-blue">
        {
            desc.split("\n")
            .map( (item , index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))
           }
        </span>
      </div>
      <div>
        <p className="tw-text-sm tw-text-gray-500 xs:tw-text-xs">
           {/* {desc.replace(/\n/g , "<br />" )} */}
           {
            body.split("\n")
            .map( (item , index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))
           }
        </p>
      </div>
      
    </div>
</div>
  )
}

export default ServiceDetails