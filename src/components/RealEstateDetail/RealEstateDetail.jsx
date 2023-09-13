import React, { useEffect, useState } from "react";
import About from "./About";
import Nearby from "./Nearby";
import Virtual from "./Virtual";
import Project from "./Project";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdOutlineVilla } from "react-icons/md";
import { CiMoneyBill } from "react-icons/ci";
import { LiaFileContractSolid } from "react-icons/lia";

import { AiFillCheckCircle } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { Tb360View, TbBuildingSkyscraper } from "react-icons/tb";

import { FaBath, FaBed } from "react-icons/fa";
import { PiArmchairThin } from "react-icons/pi";
import { BiArea } from "react-icons/bi";
import { GrSteps } from "react-icons/gr";
import { MdOutlinePriceChange, MdOutlineHomeWork } from "react-icons/md";

import { CgUnavailable } from "react-icons/cg";
import { useTranslation } from "react-i18next";

const InfoRealEstate = ({ icon, title }) => {
  return (
    <div
      className="tw-flex tw-items-center tw-justify-center tw-justify-cente tw-capitalize tw-gap-1 tw-text-gray-400 xs:tw-font-thin
   tw-cursor-pointer"
    >
      <span className="tw-text-2xl sm:tw-text-lg xs:tw-text-sm">{icon}</span>
      <span className=" tw-text-lg sm:tw-text-xs tw-whitespace-nowrap">{title}</span>
    </div>
  );
};
const MainInfoRealEstate = ({ icon, title, customFunc, active }) => {
  return (
    <div onClick={customFunc}>
      <div
        className={`tw-flex tw-items-center tw-justify-center tw-justify-cente tw-capitalize tw-gap-1 xs:tw-gap-0 tw-text-main-blue tw-font-semibold sm:tw-font-normal xs:tw-font-thin tw-overflow-hidden
   tw-cursor-pointer tw-text-xl lg:tw-text-lg sm:tw-text-sm xs:tw-text-xs tw-py-3 sm:tw-py-2 hover:tw-bg-gray-50 ${
     active ? "tw-bg-gray-100" : null
   } tw-duration-500`}
      >
        <span>{icon}</span>
        <span className=" tw-whitespace-nowrap">{title}</span>
      </div>
    </div>
  );
};
const RealEstateDetail = ({
  image,
  title,
  town,
  townDirection,
  address,
  stars,
  typeReal,
  offerType,
  typePayment,
  desc
}) => {
  const initialState = {
    about: false,
    nearby: false,
    virtual: false,
    project: false,
  };
  const [isClicked, setIsClicked] = useState(initialState);
  const handleClicked = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  const { t } = useTranslation();
  let starss = Number(stars);
  let starsEmpty = 5 - starss;
  //  let fillStars = [], i = 0, len = starss;
  //  let emptyStars = [] , i2 = 0, len2 = starsEmpty;
  //  console.log(fillStars)
  useEffect(() => {
    setIsClicked({ ...initialState, ["about"]: true });
  }, []);
  return (
    <div>
      <div className="tw-w-full tw-h-[500px]">
        <img src={image} className="tw-w-full tw-h-full tw-object-cover" />
      </div>
      <div className="tw-flex tw-items-start tw-flex-col tw-gap-5 sm:tw-gap-3 tw-p-4 tw-py-5">
        {/*address and stars */}
        <div className="tw-flex tw-flex-col tw-items-start tw-gap-2">
          <span className="tw-font-bold tw-text-xl sm:tw-text-lg tw-capitalize tw-whitespace-nowrap tw-text-main-blue">
            {title}
          </span>
          <span className="tw-font-semibold tw-text-lg sm:tw-text-sm tw-capitalize tw-whitespace-nowrap tw-text-gray-400">
            {town}, {townDirection} / {address}
          </span>
          <div className=" tw-flex tw-items-center tw-gap-1">
            {
              // FILL STARS

              //fillStars
              [...Array(starss)].map((stars, index) => (
                <span key={index} className="tw-text-sm tw-text-main-blue">
                  <AiFillStar />
                </span>
              ))
            }
            {
              // EMPTY STARS

              //emptyStars
              [...Array(starsEmpty)].map((stars, index) => (
                <span key={index} className="tw-text-sm tw-text-main-blue">
                  <AiOutlineStar />
                </span>
              ))
            }
          </div>
        </div>
        {/*end address and stars */}

        {/*Info Real Estate */}
        <div className="tw-grid tw-grid-cols-3 tw-items-center tw-w-full">
          <InfoRealEstate icon={<MdOutlineVilla />} title={typeReal} />
          <InfoRealEstate icon={<LiaFileContractSolid />} title={offerType} />
          <InfoRealEstate icon={<CiMoneyBill />} title={typePayment} />
        </div>
        {/*End Info Real Estate */}

        {/*Main Control Info Real Estate */}
        <div className="tw-w-full">
          <div className="tw-grid tw-grid-cols-4 tw-items-center tw-w-full">
            <MainInfoRealEstate
              icon={<AiFillCheckCircle />}
              title={t("about")}
              customFunc={() => handleClicked("about")}
              active={isClicked.about}
            />
            <MainInfoRealEstate
              icon={<ImLocation2 />}
              title={t("nearby")}
              customFunc={() => handleClicked("nearby")}
              active={isClicked.nearby}
            />
            <MainInfoRealEstate
              icon={<Tb360View />}
              title={t("virtual")}
              customFunc={() => handleClicked("virtual")}
              active={isClicked.virtual}
            />
            <MainInfoRealEstate
              icon={<TbBuildingSkyscraper />}
              title={t("project")}
              customFunc={() => handleClicked("project")}
              active={isClicked.project}
            />
          </div>
          <div className="tw-w-full tw-relative tw-overflow-hidden tw-min-h-[500px] tw-mt-3">
            {isClicked.about && <About 
            desc={desc}
            />}
            {isClicked.nearby && <Nearby />}
            {isClicked.virtual && <Virtual />}
            {isClicked.project && <Project />}
          </div>
        </div>
        {/*End Main Control Info Real Estate */}
      </div>
    </div>
  );
};

export default RealEstateDetail;

//https://www.linkedin.com/in/ahmed-ammar-0b4b95178/