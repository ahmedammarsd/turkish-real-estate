import React , {useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { linksNavbar } from '../Links-navbar/Links';
import TitleHeader from '../components/shared/TitleHeader';
import servicesImage from "../images/imagecompressor/header3.jpg";
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
  const [servDetail , setServDetail] = useState(null) 
  const [subServDetail , setSubServDetail] = useState(null)
  const dispatch = useDispatch();
  const langCode = useSelector((state) => state.selectLang.currentLanguageCode);
  const servicesSlice = useSelector((state) => state.services);
  useEffect( () => {
    window.scrollTo({top: 100, behavior: "smooth"})
    document.title = t(linksNavbar[2].name)
  },[langCode]);
  useEffect( ()=> {
    const initData = async () => {
    if (servicesSlice.services?.length === 0){
    await dispatch(getServices());
    // GIT SERVICE BY FILTER ID
  }
  const mainService =  servicesSlice.services[0]?.find( (mainServ) => mainServ?.id == id && mainServ?.is_available === true ) // FILTER MAIN SERVECES
  //if (mainService) {
  const subService2 =  mainService?.services?.find( (subServ) => subServ?.id == idService && subServ?.is_archive === false) // FILTER SUB SERVECES TO GET DETAIL
  
    setServDetail(mainService)
    setSubServDetail(subService2)
  //}
}
initData()
  },[]);

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
            servicesSlice.status == "failed" ?
            <ErrorMsg msg={servicesSlice.error || t("errorInGet")} />
            : subServDetail !== null && servDetail !== null ?
              <ServiceDetails
              mainService={langCode === "en" ? servDetail?.en_title || "No Title" : servDetail?.ar_title || "لا يوجد عنوان"}
              titleSub={langCode === "en" ? subServDetail?.en_title || "No Title" : subServDetail?.ar_title || "لا يوجد عنوان"}
              descMain={langCode === "en" ? servDetail?.en_description || "Not add description" : servDetail?.ar_description || "لم يتم إضافة وصف"}
              desc={langCode === "en" ? subServDetail?.en_description || "Not add description" : subServDetail?.ar_description || "لم يتم إضافة وصف"}
              views={subServDetail?.view_count || 1300}
              image={subServDetail?.image_url !== "" ? BaseUrl+"file/"+subServDetail?.image_url : imageNotFound}
              body={langCode === "en" ? subServDetail?.en_body || "Not add description" : subServDetail?.ar_body || "لم يتم إضافة وصف"}
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