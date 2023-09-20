import React from 'react';
import { FaBath, FaBed } from "react-icons/fa";
import { PiArmchairFill } from "react-icons/pi";
import { BiArea } from "react-icons/bi";
import { PiStepsFill } from "react-icons/pi";
import { MdOutlinePriceChange, MdOutlineHomeWork } from "react-icons/md";
import { useTranslation } from 'react-i18next';

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
const RealEstateContent = ({content}) => {
    const { t } = useTranslation();
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
         {
            content?.length === 0 || content === "" ?
            <div className="tw-grid tw-justify-center tw-items-center tw-grid-cols-1 tw-w-full md:tw-w-[740px] xs:tw-w-[490px] tw-border-b tw-border-main-blue">
                {t("notSpecify")}
            </div>    
            :
            <div className="tw-w-full">
           {
             content?.filter((con) => con.is_available === true)?.map((contentO , index) => (
                <div key={index} className="tw-grid tw-items-center tw-grid-cols-7 tw-w-full md:tw-w-[740px] xs:tw-w-[490px] tw-border-b tw-border-main-blue">
                 <Detail  detail={contentO?.rooms_count}/>
                 <Detail  detail={contentO?.halls_count}/>
                 <Detail  detail={contentO?.bathrooms_count}/>
                 <Detail  detail={contentO?.space}/>
                 <Detail  detail={contentO?.type}/>
                 <Detail  detail={contentO?.floor_no}/>
                 <Detail  detail={contentO?.price}/>
                </div>
             ))
           }
            </div>
         }
           {/*Real Content */}       
        </div>
    
  )
}

export default RealEstateContent