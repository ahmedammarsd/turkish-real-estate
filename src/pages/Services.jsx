import React , { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import TitleHeader from '../components/shared/TitleHeader';
import { useSelector } from 'react-redux';
import { linksNavbar } from '../Links-navbar/Links';
import servicesImage from "../images/imagecompressor/header3.jpg"
import ServicesSection from '../components/ServicesSection';

const Services = () => {
  const { t } = useTranslation();
  const langCode = useSelector((state) => state.selectLang.currentLanguageCode)
  useEffect( () => {
    document.title = t(linksNavbar[2].name)
  },[langCode])
  return (
    <div>
         <TitleHeader title={t(linksNavbar[2].name)} bgImageSrc={servicesImage} />
         <ServicesSection inMain={false} />
    </div>
  )
}

export default Services