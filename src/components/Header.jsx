import React from 'react'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation();
  return (
    <div 
     className=" tw-relative tw-w-full tw-h-[90vh] clipPath"
    >
        <div className="tw-bg-header tw-w-full tw-h-full tw-bg-cover md:tw-bg-center">
        
        </div>
        <div className="tw-absolute tw-top-0 tw-left-0 tw-z-1 tw-bg-transparent-black5 tw-w-full tw-h-full">
        <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-static tw-z-30">
          <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-6 tw-p-10 tw-mt-20">
            <h2 className="tw-text-white tw-text-5xl lg:tw-text-4xl md:tw-text-3xl sm:tw-text-2xl tw-w-[60%] md:tw-w-[70%] sm:tw-w-[85%] tw-tracking-wider tw-text-center tw-font-bold tw-capitalize">
              {t("headerOne")}
            </h2>
            <p className="tw-text-lg sm:tw-text-xs tw-text-gray-300 tw-w-[70%] md:tw-w-[80%] sm:tw-w-[95%] tw-text-center">
              {t("descHeader")}
            </p>

          </div>
        </div>
        </div>
        
    </div>
  )
}

//  find your dream house with best select
//  and achive your services with us and more...
//  all that avalibale in turkey
export default Header