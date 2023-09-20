import React from 'react'
import { IoMdOpen } from "react-icons/io"
import { useTranslation } from 'react-i18next';

const ServiceSectionCard = ({id ,services , disc , image , lengthServices, customFunc , isMainServ}) => {
  const { t } = useTranslation();
  return (
    <div className="tw-flex tw-flex-col tw-justify-end tw-items-start tw-gap-3 tw-relative
     tw-rounded-md tw-cursor-pointer tw-h-[250px] sm:tw-h-[210px] tw-overflow-hidden tw-p-4 tw-py-5 tw-group tw-shadow-sm hover:tw-shadow-lg tw-transition-all tw-duration-500"
     onClick={customFunc}
     >
       <div className="tw-absolute tw-top-0 tw-right-0 -tw-z-2 tw-w-full tw-h-full group-hover:-tw-rotate-1 group-hover:tw-scale-105 tw-duration-500">
        <img src={image} alt="image" className="tw-w-full tw-h-full tw-object-cover" />
       </div>
       <div className="tw-absolute tw-top-0 tw-right-0 tw-bg-gradient-to-t tw-from-[rgba(0,0,0,.9)] tw-to-[rgba(0,0,0,.1)] tw-to-70% sm:tw-to-90% tw-backdrop-blur-[1.5px] group-hover:tw-backdrop-blur-0 -tw-z-1 tw-w-full tw-h-full tw-duration-500" />
        <button className="tw-bg-main-blue tw-py-3 sm:tw-py-2 tw-px-5 sm:tw-px-3  tw-text-xl sm:tw-text-sm tw-text-white tw-rounded-md tw-shadow-md"
        //  onClick={customFunc}
        >
          <IoMdOpen />
        </button>
        <h1 className="tw-text-white tw-whitespace-nowrap tw-font-extrabold md:tw-font-semibold tw-text-2xl sm:tw-text-lg">
            {services}
        </h1>
        <p className="tw-text-sm xs:tw-text-xs tw-capitalize tw-text-gray-300 p-2">
            {disc.slice(0,30)}
        </p>
        {
          isMainServ ?
          <>
        <div className="tw-w-full tw-h-[.1px] tw-mt-2 tw-bg-white"></div>
        <p className="tw-capitalize tw-p-2 sm:tw-p-1 tw-px-4 sm:tw-px-2 sm:tw-text-sm tw-bg-transparent-white9 tw-rounded-md tw-flex tw-gap-2 tw-items-center tw-text-main-blue">
         <span> {t("availableServices")} </span>
         <span>{lengthServices}</span>
        </p>
        </>
        : null
}
    </div>
  )
}

export default ServiceSectionCard