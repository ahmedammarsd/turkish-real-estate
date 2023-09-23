import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiArea } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const InfoRealEstate = ({ type, icon, number }) => {
  // type 1 =  Sqft
  // type 2 = Rooms
  // type 3 = Bath
  const langCode = useSelector((state) => state.selectLang.currentLanguageCode);
  const { t } = useTranslation()
  return (
    <div
      className={`tw-py-3 tw-overflow-hidden tw-whitespace-nowrap tw-flex tw-items-center tw-justify-center tw-border-t tw-gap-2 sm:tw-gap-1 tw-text-sm xs:tw-text-xs tw-border-gray-100 ${
        langCode === "en" && type !== 3 ? "tw-border-r" : "tw-border-l"
      }`}
    >
      <span className="tw-text-main-blue">{icon}</span>
      <span className=" tw-text-gray-400">
        {number}
        {" "}
        {type === 1
          ? <>M<sup>2</sup></>
          : type === 2
          ? number > 1
            ? t("rooms")
            : t("room")
          : t("bath")}
      </span>
    </div>
  );
};

const CardRealEstate = ({
  imageReal,
  porpose,
  typeProperty,
  price,
  tilte,
  addressOne,
  addressTwo,
  numberAreaForInfoReal,
  numberRoomsForInfoReal,
  numberBathForInfoReal,
  customFunc
}) => {
    const langCode = useSelector((state) => state.selectLang.currentLanguageCode);
    const { t } = useTranslation();
  return (
    <div className="tw-overflow-hidden tw-rounded-sm tw-shadow-sm hover:tw-shadow-md tw-duration-500 tw-cursor-pointer"
    onClick={customFunc}
    >
      <div className="tw-w-full tw-h-[250px] tw-relative">
        <img
          src={imageReal}
          alt={tilte}
          className="tw-w-full tw-h-full tw-object-cover"
        />
        <span className={` tw-absolute tw-top-3 ${langCode === "en" ? "tw-left-3 sm:tw-left-2" : "tw-right-3 sm:tw-right-2"} tw-z-1 tw-capitalize tw-p-2 tw-px-3 tw-whitespace-nowrap tw-text-sm sm:tw-text-xs tw-bg-main-blue tw-text-white tw-rounded-sm`}>
            {porpose === "ايجار" ? t("rent") : t("buy")}
        </span>
        <span className={` tw-absolute tw-bottom-0 ${langCode === "en" ? "tw-left-3 sm:tw-left-2" : "tw-right-3 sm:tw-right-2"} tw-z-1 tw-capitalize tw-p-2 tw-px-3 tw-whitespace-nowrap tw-text-sm sm:tw-text-xs tw-bg-white tw-text-main-blue`}>
             {
                        typeProperty === "منزل" ? t("house")
                        : typeProperty === "شقة" ? t("apartment") 
                        : typeProperty === "فيلا" ? t("villa") 
                        : typeProperty === "مبنى" ? t("building")
                        : typeProperty === "ارض" ? t("land")
                        : typeProperty === "تجاري" ? t("commercial")
                        : t("residential")
                        }
        </span>
      </div>
      <div className="tw-p-3 sm:tw-p-1.5">
        {/* START PRICE */}
        <div className=" tw-flex tw-items-center tw-text-main-blue tw-py-2 tw-text-xl sm:tw-text-lg tw-font-bold">
          <span>
            <BsCurrencyDollar />
          </span>
          <span>{price}</span>
        </div>
        {/* END PRICE */}
        {/* START TITLE & LOCATION */}
        <div className="tw-mt-1 tw-flex tw-flex-col tw-justify-start tw-items-start tw-gap-1">
          <span className="tw-font-semibold tw-text-xl sm:tw-text-lg tw-capitalize tw-whitespace-nowrap tw-text-orange-600">
            {tilte.substring(0,30)}
            </span>
          <div className="tw-flex tw-items-center tw-gap-2">
            <span className="tw-text-main-blue tw-inline-block tw-text-sm">
              <ImLocation />
            </span>
            <p className=" tw-text-gray-500 tw-text-sm tw-capitalize">
              {addressOne} , {addressTwo}
            </p>
          </div>
        </div>
        {/* END TITLE & LOCATION */}
      </div>
      {/* START INFORMATION REAL ESTATE */}
      <div className="tw-grid tw-grid-cols-3 tw-p-3 tw-mt-2 tw-items-center tw-w-full">
        <InfoRealEstate
          type={1}
          icon={<BiArea />}
          number={numberAreaForInfoReal}
        />
        <InfoRealEstate
          type={2}
          icon={<FaBed />}
          number={numberRoomsForInfoReal}
        />
        <InfoRealEstate
          type={3}
          icon={<FaBath />}
          number={numberBathForInfoReal}
        />
      </div>
      {/* END INFORMATION REAL ESTATE */}
    </div>
  );
};

export default CardRealEstate;
