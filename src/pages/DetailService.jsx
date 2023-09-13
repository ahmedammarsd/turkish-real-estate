import React , {useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { linksNavbar } from '../Links-navbar/Links';
import TitleHeader from '../components/shared/TitleHeader';
import servicesImage from "../images/imagecompressor/header3.jpg";
import { dummayDataServices } from '../Links-navbar/Links';
import { useParams } from 'react-router-dom';
import ServiceDetails from '../components/ServiceDetails';

const DetailService = () => {
  const { t } = useTranslation();
  const { id, nameServices, idService} = useParams(); 
  const {service , desc , image} = dummayDataServices[id].sub_services[idService]
  const langCode = useSelector((state) => state.selectLang.currentLanguageCode)
  useEffect( () => {
    window.scrollTo({top: 100, behavior: "smooth"})
    document.title = t(linksNavbar[2].name)
  },[langCode])
  return (
    <div>
      <TitleHeader title={dummayDataServices[2].sub_services[idService].service} bgImageSrc={servicesImage} />
      <div className="tw-py-2 tw-relative tw-flex tw-justify-center tw-items-center">
      <div className="tw-w-full">
        <div className="tw-w-[85%] sm:tw-w-[95%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
         <ServiceDetails
          title={service}
          category={"Test Servicesss"}
          views={1000}
          image={image}
          desc={desc}
          mainService={nameServices}
         />
        </div>
      </div>
    </div>
    </div>
  )
}

export default DetailService