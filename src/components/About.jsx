import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
  return (
    <div className="tw-py-4 tw-relative tw-flex tw-justify-center tw-items-center tw-h-[450 tw-w-full -tw-z-2 tw-bg-about tw-bg-cover tw-bg-bottom tw-bg-fixed tw-rounded-lg tw-shadow-md tw-overflow-hidden">
        <div className="tw-absolute tw-top-0 tw-left-0 tw-bg-transparent-black2 tw-w-full tw-h-full -tw-z-1 tw-backdrop-blur-[1px]" />
      
        <div className="tw-w-[85%] sm:tw-w-[95%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden tw-static tw-z-4">
            <div className=" tw-w-[70%] md:tw-w-full tw-p-3 tw-static tw-z-2 tw-h-full tw-flex tw-justify-center tw-bg-transparent-white2 tw-backdrop-blur-sm tw-items-start md:tw-items-center tw-shadow-md tw-rounded-md">
                <p className=" tw-text-white tw-p-7 tw-py-10 sm:tw-p-6 tw-tracking-wider tw-text-2xl md:tw-text-lg xs:tw-text-sm tw-w-full tw-h-full tw-font-semibold sm:tw-font-normal">
                    {t("bestSelectAbout")}
                </p>
            </div>
        </div>
      
    </div>
  );
};

export default About;
