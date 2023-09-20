import React, { useEffect } from "react";
import ServiceSectionCard from "./shared/ServiceSectionCard";
import { useTranslation } from "react-i18next";
import imageTest from "../images/imagecompressor/img2.jpg";
import TitleAndDesc from "./shared/TitleAndDesc";
import { dummayDataServices , linksNavbar } from "../Links-navbar/Links";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../features/ServicesSlice";
import Loading from "./shared/Loading";
import ErrorMsg from "./shared/ErrorMsg";
import NoData from "./shared/NoData";
import { BaseUrl } from "../utils/BaseUrl";
import imageNotFound from "../images/imagecompressor/Image_not_available.png";

const ServicesSection = ({inMain}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);
  const selectLang = useSelector((state) => state.selectLang);

  useEffect(() => {
    if (services.services?.length === 0){
    dispatch(getServices()); 
    }
    //setTimeout(() => console.log(services.services), 5000)
  },[])

  //FILTER SERVICES - CHECK SERVICES IS AVAILABLE
  const servicesAvailable = services.services[0]?.filter( (service) => service.is_available === true)
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
         {/*=========================================== */}
         {/*======== START MAIN SERVICES ============== */}
         <div className="tw-w-full">
         {
          services.loading  //======= LOADING... =========
          ? <Loading />
          :
          services.status === "failed" // =========== CHECK RESPONSE IS FAILED =======
          ? <ErrorMsg msg={services.error || t("errorInGet") } />
          : servicesAvailable?.length === 0 ? // ======== CHECK SERVICES IS AVAILABLE AFTER FILTER IT =========
          <NoData />
          :
          // VIEW THE MAIN SERVICES AFTER ALL CONDTIONS
          <div className="tw-grid tw-grid-cols-3 md:tw-grid-cols-2 sm:tw-grid-cols-1 tw-items-center tw-gap-1 sm:tw-gap-3 tw-mt-3">
          {
           servicesAvailable?.map( ({id ,en_title , ar_title , en_description , ar_description , icon_url , services} , index) => (

             <ServiceSectionCard
               key={index}
               services={
                selectLang.currentLanguageCode === "en"
                          ? en_title || "No Title"
                          : ar_title || "لا يوجد عنوان"
               }
               disc={
                selectLang.currentLanguageCode === "en"
                ? en_description || "No Description"
                : ar_description || "لا يوجد وصف"
               }
               image={
                icon_url !== "" 
                ? BaseUrl+"file/"+icon_url
                : imageNotFound
               }
               lengthServices={services?.filter((serv) => serv.is_archive === false)?.length}
               isMainServ={true}
               customFunc={() => navigate(`${inMain ? linksNavbar[2].to + "/" + id + "/" +en_title : id + "/" + en_title }`) }
             />
             ))
            }
            </div>
         }
         </div>
         {/*======== END MAIN SERVICES ============== */}
         {/*=========================================== */}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
