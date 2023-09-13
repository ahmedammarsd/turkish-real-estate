import React , { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import NewsCom from '../components/NewsCom';
import TitleHeader from '../components/shared/TitleHeader';
import { useSelector } from 'react-redux';
import { linksNavbar } from '../Links-navbar/Links';
import newsImage from "../images/imagecompressor/header4.jpg"


const News = () => {
    const { t } = useTranslation();
    const langCode = useSelector((state) => state.selectLang.currentLanguageCode)
    useEffect( () => {
      document.title = t(linksNavbar[3].name)
    },[langCode])
  return (
    <div>
         <TitleHeader title={t(linksNavbar[3].name)} bgImageSrc={newsImage} />
         <NewsCom inMain={false}/>
    </div>
  )
}

export default News