import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TitleHeader from '../components/shared/TitleHeader'
import imageRealEstate from "../images/imagecompressor/header1.jpg"
import { linksNavbar } from '../Links-navbar/Links';
import { useSelector } from 'react-redux';

const RealEstates = () => {
  const { t } = useTranslation();
  const langCode = useSelector((state) => state.selectLang.currentLanguageCode)
  useEffect( () => {
    document.title = t(linksNavbar[1].name)
  },[langCode])
  return (
    <div>
      <TitleHeader title={t(linksNavbar[1].name)} bgImageSrc={imageRealEstate} />
    </div>
  )
}

export default RealEstates