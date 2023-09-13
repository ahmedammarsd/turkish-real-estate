import React, { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { useSelector } from "react-redux";

const Links = ({
  to,
  name,
  customFunc,
  isLink1,
  hasSupLinks,
  supLinksData,
}) => {
    const [ showSubLink , setShowSubLink] = useState(false);

    const selectLang = useSelector( (state) => state.selectLang);

    let screenSizes = useSelector( (state) => state.screenReducer);

    const { screenWidth } = screenSizes;
    const { screenY } = screenSizes;
    
  
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
    {hasSupLinks && showSubLink  ? (
        <div
        className={`tw-absolute tw-z-5 tw-top-10 lg:tw-static tw-py-3 lg:tw-py-2
        ${selectLang.currentLanguageCode === "en" ? "tw-left-0" : "tw-right-0"}`}
        >
        <div className={`tw-flex tw-flex-col tw-overflow-hidden tw-w-[350px] lg:tw-w-full tw-p-3
         tw-backdrop-blur-sm lg:tw-bg-white tw-rounded-sm lg:-tw-mt-1 lg:tw-border-t lg:tw-border-gray-300
         ${ screenY > 90 ?
        "tw-bg-transparent-white9 tw-border-t tw-border-gray-300"
        : "tw-bg-transparent-white2"
        }
         `}
        
        >
          {supLinksData?.map(({ nameSub, toSub }, index) => (
            <Link
            key={index}
            to={toSub}
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
                {nameSub}
            </Link>
          ))}
        </div>
        </div>
      ) : null}

    </div>
  );
};

export default Links;
