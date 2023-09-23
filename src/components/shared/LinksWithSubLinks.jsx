import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { useSelector } from "react-redux";
import ErrorMsg from "./ErrorMsg";
import Loading from "./Loading";
import { handleResize, handleScroll } from "../../utils/BaseUrl";
import { useTranslation } from "react-i18next";
import { linksNavbar } from "../../Links-navbar/Links";

const LinksWithSubLinks = ({
  to,
  name,
  customFunc,
  isLink1,
  hasSupLinks,
  supLinksData,
}) => {
  const { t } = useTranslation()
    const [ showSubLink , setShowSubLink] = useState(false);
    const navigate = useNavigate();
    const selectLang = useSelector( (state) => state.selectLang);

    // STOP WORKING THIS FROM REDUX
   // let screenSizes = useSelector( (state) => state.screenReducer);
    // const { screenWidth } = screenSizes;
    // const { screenY } = screenSizes;
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenY , setScreenY] = useState(window.scrollY)

  useEffect(() => {
    handleResize(setScreenWidth);
  }, [screenWidth]);
  useEffect(() => {
    handleScroll(setScreenY)
  },[screenY])
    
  
  return (
    <div className={`tw-relative lg:tw-w-full lg:tw-mb-1 tw-group  ${
      isLink1 ? "lg:tw-mt-10" : null
    }`}
    onMouseOver={() => {
        hasSupLinks && screenWidth > 1023 ? setShowSubLink(true) : null
    }}
    onMouseOut={() => {
        hasSupLinks && screenWidth > 1023 ? setShowSubLink(false) : null
    }}
    >
    <NavLink
      to={to}
      onClick={customFunc}
      className={`tw-flex tw-capitalize tw-backdrop-blur-[1px] 
       lg:tw-text-main-blue lg:hover:tw-text-white lg:group-hover:tw-text-white lg:hover:tw-bg-main-blue lg:group-hover:tw-bg-main-blue 
       tw-px-3 tw-p-2.5 tw-cursor-pointer tw-text-lg tw-font-semibold lg:tw-font-normal xs:tw-font-thin lg:tw-shadow lg:tw-my-[3px] tw-whitespace-nowrap
        tw-rounded-md lg:tw-w-full tw-duration-500 
       ${hasSupLinks ? "tw-justify-between tw-items-center" : null }
        ${screenY > 90 ? 
          "tw-text-main-blue hover:tw-bg-main-blue hover:tw-text-white" 
          : "tw-text-white hover:tw-bg-transparent-white4 group-hover:tw-bg-transparent-white4"}
       `}
    >
      <span>
      {name}
      </span>
      {
        hasSupLinks  ?
        <span className=" lg:tw-p-1 lg:tw-text-lg lg:tw-rounded-full lg:tw-bg-main-blue lg:hover:tw-bg-blue-700 lg:tw-text-white"
        onClick={() => {
          hasSupLinks && screenWidth < 1023 ? setShowSubLink(!showSubLink) : null
        }}
        >
            <BiChevronDown />
        </span>
        : null
      }
    </NavLink>
    { showSubLink  ? (
        <div
        className={`tw-absolute tw-z-5 tw-top-10 lg:tw-static tw-py-3 lg:tw-py-2
        ${selectLang.currentLanguageCode === "en" ? "tw-left-0" : "tw-right-0"}`}
        >
        <div className={`tw-flex tw-flex-col tw-overflow-hidden tw-w-[350px] tw-min-h-[50px] tw-max-h-[400px] tw-overflow-y-auto lg:tw-w-full tw-p-3
         tw-backdrop-blur-sm lg:tw-bg-white tw-rounded-sm lg:-tw-mt-1 lg:tw-border-t lg:tw-border-gray-300
         ${ screenY > 90 ?
          "tw-bg-transparent-white9 tw-border-t tw-border-gray-200"
        : "tw-bg-transparent-white2"
        }
         `}
        
        >
          {
            supLinksData == "loading" 
            ? <Loading />
            :
            supLinksData == "failed"
            ? <ErrorMsg msg={t("noServices")}/>
            :
          supLinksData == "noServices"
          ? <ErrorMsg msg={t("noServices")}/>
          :
          supLinksData?.map((services, index) => (
            <span
            key={index}
            onClick={() => navigate(linksNavbar[2].to + "/"+services.id + "/" + services.en_title)}
            className={`tw-capitalize hover:tw-bg-transparent-white4 lg:tw-text-main-blue lg:hover:tw-text-white
             lg:hover:tw-bg-main-blue tw-border-b tw-p-1.5 tw-py-2 tw-cursor-pointer tw-mt-2 tw-text-[16px] tw-font-semibold lg:tw-font-normal
              xs:tw-font-thin tw-shadow-sm hover:tw-shadow-md lg:tw-shadow tw-whitespace-nowrap tw-rounded-sm lg:tw-w-full
              lg:tw-border-b-2 lg:tw-border-gray-300 tw-duration-500
              ${ screenY > 90 ?
                " tw-text-main-blue tw-border-b-2 tw-border-gray-300"
                :" tw-text-white"
              }
              `}
            >
                {
                  selectLang.currentLanguageCode === "en"
                  ? services.en_title
                  : services.ar_title
                }
            </span>
          ))}
        </div>
        </div>
      ) : null}

    </div>
  );
};

export default LinksWithSubLinks;


