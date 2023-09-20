import React , {useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { linksNavbar } from '../Links-navbar/Links';
import TitleHeader from '../components/shared/TitleHeader';
import servicesImage from "../images/imagecompressor/header3.jpg";
import { dummayDataServices } from '../Links-navbar/Links';
import { useParams } from 'react-router-dom';
import ServiceDetails from '../components/ServiceDetails';
import { getServices } from '../features/ServicesSlice';
import Loading from '../components/shared/Loading';
import ErrorMsg from '../components/shared/ErrorMsg';
import NoData from '../components/shared/NoData';
import { BaseUrl } from '../utils/BaseUrl';
import imageNotFound from "../images/imagecompressor/Image_not_available.png";

const DetailService = () => {
  const { t } = useTranslation();
  const { id, nameServices, idService} = useParams(); 
  const dispatch = useDispatch();
  const {service , desc , image} = dummayDataServices[id].sub_services[idService]
  const langCode = useSelector((state) => state.selectLang.currentLanguageCode);
  const servicesSlice = useSelector((state) => state.services);
  useEffect( () => {
    window.scrollTo({top: 100, behavior: "smooth"})
    document.title = t(linksNavbar[2].name)
  },[langCode]);
  useEffect(()=> {
    if (servicesSlice.services?.length === 0){
    dispatch(getServices())
    }
  },[]);

  // GIT SERVICE BY FILTER ID
  const mainService = servicesSlice.services[0]?.filter( (mainServ) => mainServ?.id == id && mainServ?.is_available === true) // FILTER MAIN SERVECES
  const subService = mainService?.services?.filter( (subServ) => subServ?.id == idService && subServ?.is_archive === false) // FILTER SUB SERVECES TO GET DETAIL
  console.log(mainService)
  return (
    <div>
      <TitleHeader title={nameServices} bgImageSrc={servicesImage} />
      <div className="tw-py-2 tw-relative tw-flex tw-justify-center tw-items-center">
      <div className="tw-w-full">
        <div className="tw-w-[85%] sm:tw-w-[95%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
          {
            servicesSlice.loading ?
            <Loading />
            :
            servicesSlice.status == "Fialed" ?
            <ErrorMsg msg={servicesSlice.error || t("errorInGet")} />
            : subService?.length === 1 ?
              <ServiceDetails
              mainService={langCode === "en" ? mainService[0]?.en_title || "No Title" : mainService[0]?.ar_title || "لا يوجد عنوان"}
              titleSub={langCode === "en" ? subService[0]?.en_title || "No Title" : subService[0]?.ar_title || "لا يوجد عنوان"}
              descMain={langCode === "en" ? mainService[0]?.en_description || "Not add description" : mainService[0]?.ar_description || "لم يتم إضافة وصف"}
              desc={langCode === "en" ? subService[0]?.en_description || "Not add description" : subService[0]?.ar_description || "لم يتم إضافة وصف"}
              views={subService[0]?.view_count || 1300}
              image={image !== "" ? BaseUrl+"file/"+image : imageNotFound}
              body={langCode === "en" ? subService[0]?.en_body || "Not add description" : subService[0]?.ar_body || "لم يتم إضافة وصف"}
             />
            :
            <NoData />
          }
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default DetailService