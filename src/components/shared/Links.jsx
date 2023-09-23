import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { useSelector } from "react-redux";
import ErrorMsg from "./ErrorMsg";
import Loading from "./Loading";
import { handleResize, handleScroll } from "../../utils/BaseUrl";
import { useTranslation } from "react-i18next";

const Links = ({
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
    >
    <NavLink
      to={to}
      onClick={customFunc}
      className={`tw-flex tw-capitalize tw-backdrop-blur-[1px] 
       lg:tw-text-main-blue lg:hover:tw-text-white lg:group-hover:tw-text-white lg:hover:tw-bg-main-blue lg:group-hover:tw-bg-main-blue 
       tw-px-3 tw-p-2.5 tw-cursor-pointer tw-text-lg tw-font-semibold lg:tw-font-normal xs:tw-font-thin lg:tw-shadow lg:tw-my-[3px] tw-whitespace-nowrap
        tw-rounded-md lg:tw-w-full tw-duration-500 
        ${screenY > 90 ? 
          "tw-text-main-blue hover:tw-bg-main-blue hover:tw-text-white" 
          : "tw-text-white hover:tw-bg-transparent-white4 group-hover:tw-bg-transparent-white4"}
       `}
    >
      <span>
      {name}
      </span>
      
    </NavLink>
    

    </div>
  );
};

export default Links;
