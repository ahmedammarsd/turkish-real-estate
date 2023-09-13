import React from "react";
import ServiceSectionCard from "./shared/ServiceSectionCard";
import { useTranslation } from "react-i18next";
import imageTest from "../images/img2.jpg";
import TitleAndDesc from "./shared/TitleAndDesc";
import { dummayDataServices , linksNavbar } from "../Links-navbar/Links";
import { useNavigate } from "react-router-dom";

const ServicesSection = ({inMain}) => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  return (
    <div className="tw-py-16 tw-relative tw-flex tw-justify-center tw-items-center">
      <div className="tw-w-full">
        <div className=" tw-w-[85%] sm:tw-w-[95%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
         {
          inMain 
          ?
          <div>
            <TitleAndDesc title={t("ourServices")} desc={t("descServices")} isTransparentForTitle={false} isTransparentForDesc={true} />
          </div>
          :null
         }
          <div className="tw-grid tw-grid-cols-3 md:tw-grid-cols-2 sm:tw-grid-cols-1 tw-items-center tw-gap-1 tw-mt-3">
           {
            dummayDataServices?.map( (service , index) => (

              <ServiceSectionCard
                key={index}
                services={service.service}
                disc={service.desc}
                image={service.image}
                lengthServices={service.sub_services.length}
                isMainServ={true}
                customFunc={() => navigate(`${inMain ? linksNavbar[2].to + "/" + service.id + "/" +service.service : service.id + "/" + service.service }`) }
              />
            ))
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
