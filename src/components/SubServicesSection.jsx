import React , { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import testImage from "../images/imagecompressor/img13.jpg";
import ServiceSectionCard from './shared/ServiceSectionCard';
import { dummayDataServices } from '../Links-navbar/Links';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../features/ServicesSlice';
import Loading from "./shared/Loading";
import ErrorMsg from "./shared/ErrorMsg";
import NoData from "./shared/NoData";
import { BaseUrl } from "../utils/BaseUrl";
import imageNotFound from "../images/imagecompressor/Image_not_available.png";
import { useTranslation } from 'react-i18next';

const SubServicesSection = () => {
    const { id } = useParams();
    const { t } = useTranslation()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const services = useSelector((state) => state.services);
    const selectLang = useSelector((state) => state.selectLang);

    useEffect(() => {
      if (services.services?.length === 0){
      dispatch(getServices()); 
      }
    },[])
  
    // FILTER MAIN SERVICES TO SHOW SUB SERVICES
    const mainService = services?.services[0]?.filter( (service) => service.id == id )
   // console.log(mainService[0].id)
    // FILTER SUB SERVICES IS NOT ARCHIVE
    const subServices = mainService?.services?.filter( (serv) => serv.is_archive === false) //=========================================================== remove [0] from mainService
    // console.log( "sub", subServices)  /// UNDIFINED SO I WILL USE THE FILTER BOTTOM BEFOR MAAP < ITS WORK AFTER ADD INDEX 0 : mainService[0]
  return (
    <div className="tw-py-16 tw-relative tw-flex tw-justify-center tw-items-center">
    <div className="tw-w-full">
      <div className=" tw-w-[85%] sm:tw-w-[95%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
      {/*=========================================== */}
      {/*============= START SUB SERVICES ========== */}
      <div className="tw-w-full">
        {
           services.loading  //======= LOADING... =========
           ? <Loading />
           :
           services.status === "failed" // =========== CHECK RESPONSE IS FAILED =======
           ? <ErrorMsg msg={services.error || t("errorInGet") } />
           : 
           mainService?.length != 1 //========== CHECK MAIN SERVICE IS FOUND ==========
           ? <NoData />
           :
            subServices?.length == 0 ? // ========= CHECK MAIN SERVICE IS HAS SUB SERVICES ==========
           <NoData />
           :
           // ============ AFTER ALL CONDTIONS NOW VIEW THE SUB SERVICES ===========
           <div className="tw-grid tw-grid-cols-3 md:tw-grid-cols-2 sm:tw-grid-cols-1 tw-items-center tw-gap-4 tw-mt-3">
         {
              subServices?.map( ({id , en_title ,ar_title , en_description ,ar_description , image_url} , index) => (

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
                image_url !== "" 
                ? BaseUrl+"file/"+image_url
                : imageNotFound
               }
              isMainServ={false}
              customFunc={() => navigate(`${id}`) }
            />
          ))
         }
        </div>
        }
        
        </div>
        {/*============= END SUB SERVICES ========== */}
       {/*=========================================== */}
      </div>
    </div>
  </div>
  )
}

export default SubServicesSection