import React , { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { linksNavbar } from '../Links-navbar/Links';
import servicesImage from "../images/imagecompressor/header3.jpg";
import TitleHeader from '../components/shared/TitleHeader';
import { useParams } from 'react-router-dom';
import SubServicesSection from '../components/SubServicesSection';
const SubServices = () => {
  const { t } = useTranslation();
  const { nameServices } = useParams();
  const langCode = useSelector((state) => state.selectLang.currentLanguageCode)
  useEffect( () => {
    document.title = t(linksNavbar[2].name)
  },[langCode])
  return (
    <div>
       <TitleHeader title={nameServices} bgImageSrc={servicesImage} />
       <SubServicesSection />
    </div>
  )
}

export default SubServices