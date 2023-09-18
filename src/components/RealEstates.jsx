import React, { useState } from "react";
import TitleAndDesc from "./shared/TitleAndDesc";
import { useTranslation } from "react-i18next";
import CardRealEstate from "./shared/CardRealEstate";
import testImage from "../images/imagecompressor/img5.jpg"
import { useNavigate } from "react-router-dom";
import { linksNavbar } from "../Links-navbar/Links";
import FormFilterRealEstate from "./FormFilterRealEstate";
import { BsFilter } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { VscSettings } from "react-icons/vsc"

const RealEstates = ({inMain}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const selectLang = useSelector( (state) => state.selectLang);

    const [controlFormFilter , setControlFormFilter] = useState(false);

    let customId = 1
  return (
    <div className="tw-py-2 tw-relative tw-flex tw-justify-center tw-items-center">
      <div className="tw-w-full">
        <div className="tw-w-[85%] sm:tw-w-[95%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">

          {
            inMain ? 
            <div>
                <TitleAndDesc title={t("realEstate")} desc={t("")} isTransparentForTitle={false} isTransparentForDesc={true} />
            </div>
            
            : null
          }

          {
            !inMain 
            ?
            <div className=" tw-hidden lg:tw-flex tw-w-full tw-py-3 tw-bg-gray-5 tw-items-center tw-justify-center">
            <span className="tw-text-3xl md:tw-text-2xl sm:tw-text-xl tw-text-main-blue tw-p-2 tw-rounded-md tw-shadow-md hover:tw-bg-main-blue hover:tw-text-white tw-cursor-pointer tw-duration-500"
            onClick={() => setControlFormFilter(!controlFormFilter)}
            >
              <VscSettings />
            </span>
            </div>
            : null
          }
          <div className="tw-w-full tw-flex tw-flex-row lg:tw-flex-col tw-items-start tw-gap-4">
            {
              !inMain 
              ?
              <>
            
            <div className={`tw-w-[40%] lg:tw-w-full md:tw-fixed md:tw-h-screen md:tw-bg-transparent-black4 tw-backdrop-blur-[4px] md:tw-left-0 tw-z-10 ${controlFormFilter ? "lg:tw-block md:tw-scale-100 md:tw-top-0" : "lg:tw-hidden md:tw-scale-0 md:tw-top-[-1000px]"} tw-transition-all tw-duration-1000`}>
              <span className={`tw-hidden md:tw-block md:tw-absolute tw-top-1 ${selectLang.currentLanguageCode === "en" ? "tw-right-4" : "tw-left-4"} tw-text-red-600 tw-z-10 tw-p-3 tw-shadow-sm hover:tw-text-red-600 tw-cursor-pointer hover:tw-bg-gray-50 tw-rounded-md tw-text-xl tw-transition-all tw-duration-200 tw-ease-in-out`}
               onClick={() => setControlFormFilter(false)}>
                <RxCross2 />
              </span>
              <FormFilterRealEstate />
            </div>
            </>
            : null
            }
            <div className="tw-grid tw-w-full tw-grid-cols-2 lg:tw-grid-cols-2 sm:tw-grid-cols-1 tw-items-center tw-gap-1">
                <CardRealEstate 
                imageReal={testImage} 
                porpose={"for rent"}
                typeProperty={"apartment"}
                price={"100,000"}
                tilte={"golden urban house"}
                addressOne={"60 street"}
                addressTwo={"al-manshia"}
                numberAreaForInfoReal={"250"}
                numberRoomsForInfoReal={"3"}
                numberBathForInfoReal={"2"}
                customFunc={() => navigate(`${inMain ? linksNavbar[1].to+"/"+customId : customId}`) }
                />
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RealEstates;
