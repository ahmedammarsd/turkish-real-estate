import React from 'react';
import { FaBath, FaBed } from "react-icons/fa";
import { PiArmchairFill } from "react-icons/pi";
import { BiArea } from "react-icons/bi";
import { PiStepsFill } from "react-icons/pi";
import { MdOutlinePriceChange, MdOutlineHomeWork } from "react-icons/md";

const Heading = ({icon , head}) => {
    return (
        <div className="tw-flex tw-items-center tw-justify-center tw-gap-1 tw-p-4 xs:tw-p-3 tw-text-lg xs:tw-text-sm tw-overflow-hidden">
        <span className="tw-text-main-blue">
            {icon}
        </span>
        <span className="tw-capitalize tw-text-gray-500 tw-whitespace-nowrap">
            {head}
        </span>
    </div>
    )
}

const Detail = ({detail}) => {
    return (
        <div className="tw-flex tw-items-center tw-justify-center tw-gap-1 tw-p-4 xs:tw-p-3 tw-text-lg sm:tw-text-sm xs:tw-text-xs tw-overflow-hidden">
      
        <span className="tw-capitalize tw-text-gray-500 tw-whitespace-nowrap ">
            {detail}
        </span>
    </div>
    )
}
const RealEstateContent = () => {
  return (
    <div className="tw-w-full tw-mt-5 tw-p-1 tw-overflow-y-auto realContent">
        {/* HEADING */}
        <div className="tw-grid tw-items-center tw-grid-cols-7 tw-w-full md:tw-w-[740px] xs:tw-w-[490px] tw-border-b tw-border-main-blue">
            <Heading icon={<FaBed />} head={"rooms"} />
            <Heading icon={<PiArmchairFill />} head={"Halls"} />
            <Heading icon={<FaBath />} head={"Bath"} />
            <Heading icon={<BiArea />} head={"Space"} />
            <Heading icon={<MdOutlineHomeWork />} head={"type"} />
            <Heading icon={<PiStepsFill />} head={"floor"} />
            <Heading icon={<MdOutlinePriceChange />} head={"pirce"} />
        </div>
        {/* HEADING */}
         {/*Real Content */}
         <div className="tw-grid tw-items-center tw-grid-cols-7 tw-w-full md:tw-w-[740px] xs:tw-w-[490px] tw-border-b tw-border-main-blue">
            <Detail  detail={"3"}/>
            <Detail  detail={"2"}/>
            <Detail  detail={"2"}/>
            <Detail  detail={"200"}/>
            <Detail  detail={"Delax"}/>
            <Detail  detail={"3"}/>
            <Detail  detail={"400"}/>
        </div>
            {/*Real Content */}
    </div>
  )
}

export default RealEstateContent