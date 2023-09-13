import React from 'react';
import bgImage from "../images/imagecompressor/img1.jpg"
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
 
  return (
    <div 
    style={{
      backgroundImage: `url("${bgImage}")`
    }}
    className="tw-w-full tw-h-screen tw-relative tw-bg-cover tw-flex tw-justify-center tw-items-center"
    >
      <div className="tw-w-full tw-h-full tw-absolute tw-top-0 tw-left-0 tw-backdrop-blur-sm tw-bg-transparent-black6" />
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-8 tw-w-[70%] sm:tw-w-[90%] tw-static tw-z-1 tw-text-white tw-backdrop-blur-sm tw-p-8 tw-py-16 tw-bg-transparent-white1 tw-rounded-md">
            <h1 className="tw-text-8xl lg:tw-text-6xl md:tw-text-5xl xs:tw-text-3xl tw-font-bold">404</h1>
            <p className="tw-text-7xl lg:tw-text-5xl md:tw-text-4xl xs:tw-text-2xl tw-font-semibold tw-capitalize tw-whitespace-nowrap">
            {t("page404")}
            </p>
            <button 
            onClick={() => navigate("/")}
            className="tw-bg-main-blue tw-rounded-md tw-py-3 sm:tw-py-2 tw-px-6 sm:tw-px-4 tw-w-[300px] sm:tw-w-[150px] tw-mt-5">
              {t("main")}
            </button>
        </div>
    </div>
  )
}

export default Page404