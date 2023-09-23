import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../images/logoBestSelect.png";
import SelectLang from "./SelectLang";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Links from "./shared/Links";
import { linksNavbar  } from "../Links-navbar/Links";
import { useDispatch, useSelector } from "react-redux";
import { handleResize, handleScroll } from "../utils/BaseUrl";
import { useNavigate } from "react-router-dom";
import LinksWithSubLinks from "./shared/LinksWithSubLinks";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const selectLang = useSelector( (state) => state.selectLang);
  //const screenSizes = useSelector( (state) => state.screenReducer);  // STOP
  const servicesSlice = useSelector((state) => state.services);
  const dispatch = useDispatch()

  //const { screenY } = screenSizes; // STOP

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenY , setScreenY] = useState(window.scrollY)

  useEffect(() => {
    handleResize(setScreenWidth);
  }, [screenWidth]);
  useEffect(() => {
    handleScroll(setScreenY)
  },[screenY])

  // STOP THIS FUNCTIONS FOR ITS ACTIONS IN REDUX ITS VERY BIG AND MORE
  // const handleResize = () => addEventListener("resize" , () => dispatch(getScreenWidth()))
  // const handleScroll = () => addEventListener("scroll" , () => dispatch(getScrollY()));
  // handleResize();
  // handleScroll();

  return (
    <div className="tw-relative">
    <div className={`tw-fixed tw-top-0 tw-left-0 tw-z-10 tw-w-full tw-flex tw-justify-center tw-items-center tw-flex-col tw-duration-500
     ${screenY > 90 ? " tw-bg-white tw-shadow-lg" : null}
    `}>
      {/* START NAV */}
      <div className={`tw-p-4 tw-w-full tw-flex tw-justify-center tw-duration-500
      ${screenY > 90 ? "tw-py-5 lg:tw-py-3" : null}
      `}>
        <div className="tw-flex tw-justify-between tw-items-center tw-w-[85%] lg:tw-w-[90%]">
          {/* logo */}
          <div className="tw-w-[80px] tw-h-[80px] tw-p-2 tw-cursor-pointer tw-rounded-md lg:tw-w-[60px] lg:tw-h-[60px] sm:tw-w-[50px] sm:tw-h-[50px] tw-duration-300"
          onClick={() => navigate("/")}
          >
            <img src={Logo} alt="logo" className="tw-w-full tw-h-full tw-object-cover tw-drop-shadow-lg" />
          </div>
          {/* logo */}

          {/* icon menu */}
          <div
            className="tw-hidden lg:tw-block tw-p-3 sm:tw-p-2 tw-text-2xl sm:tw-text-xl tw-text-main-blue hover:tw-text-white tw-shadow-md tw-rounded-md tw-bg-white hover:tw-bg-main-blue  tw-cursor-pointer tw-duration-500"
            onClick={() => setShowNav(true)}
          >
            <AiOutlineMenu />
          </div>
          {/* icon menu */}

          {/* Links */}
          <div
            className={`lg:tw-absolute tw-right-0
                ${showNav ? "tw-top-0" : "tw-top-[-1000px]"}
                lg:tw-w-full lg:tw-h-screen lg:tw-z-4 lg:tw-bg-transparent-black4 tw-transition-all tw-duration-500 tw-ease-in-out`}
          >
            <div className=" tw-flex tw-items-center lg:tw-flex-col lg:tw-items-start tw-gap-2 lg:tw-w-[80%] lg:tw-p-3 lg:tw-pt-9 lg:tw-h-screen lg:tw-bg-white lg:tw-relative">
              <span
                onClick={() => setShowNav(false)}
                className={`tw-hidden lg:tw-block lg:tw-absolute tw-top-3 ${
                  selectLang.currenLanguageCode === "en" ? "tw-left-3" : "tw-right-3"
                } tw-text-red-400 tw-p-3 tw-shadow-sm hover:tw-text-red-600 tw-cursor-pointer hover:tw-bg-gray-50 tw-rounded-md tw-text-xl tw-transition-all tw-duration-200 tw-ease-in-out`}
              >
                <RxCross2 />
              </span>

              <Links to={"/"} name={t(linksNavbar[0].name)} isLink1={true} customFunc={() => setShowNav(false)}/>
              <Links to={linksNavbar[1].to} name={t(linksNavbar[1].name)} customFunc={() => setShowNav(false)}/>
              <LinksWithSubLinks to={linksNavbar[2].to} name={t(linksNavbar[2].name)} customFunc={() => setShowNav(false)} 
               hasSupLinks={true} supLinksData={
                servicesSlice.loading ? 
                 "loading"
                 :
                 servicesSlice.status === "failed" ?
                 "failed"
                 :
                 servicesSlice.services?.length != 0 ?
                servicesSlice.services[0]?.length === 0 
                ? "noServices"
                : servicesSlice.services[0].filter((serv) => serv.is_available === true)
                : "noServices"
               }
              />
              <Links to={linksNavbar[3].to} name={t(linksNavbar[3].name)} customFunc={() => setShowNav(false)}/>
              {/* <Links to={linksNavbar[4].to} name={t(linksNavbar[4].name)} customFunc={() => setShowNav(false)}/> */}
              {/* <Links to={linksNavbar[5].to} name={t(linksNavbar[5].name)} customFunc={() => setShowNav(false)}/> */}
            <div className=" tw-w-full tw-hidden lg:tw-inline-block tw-h-28">
              <div className="tw-flex tw-justify-center tw-items-center tw-w-full tw-h-full">
               <SelectLang />
              </div>
            </div>
            </div>
          </div>
          {/* Links */}

          {/* Change Lang */}
          <div className=" lg:tw-hidden">
          <SelectLang />
          </div>
          {/* Change Lang */}
        </div>
      </div>
      {/* END NAV */}
    </div>
    </div>
  );
};

export default Navbar;
