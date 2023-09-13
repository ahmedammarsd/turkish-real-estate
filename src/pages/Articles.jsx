import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TitleHeader from '../components/shared/TitleHeader';
import { linksNavbar } from '../Links-navbar/Links';
import { useSelector } from 'react-redux';
import articleImage from "../images/imagecompressor/header5.png"

const Articles = () => {
  const { t } = useTranslation();
  const langCode = useSelector((state) => state.selectLang.currentLanguageCode)
  useEffect( () => {
    document.title = t(linksNavbar[4].name)
  },[langCode])
  return (
    <div>
      <TitleHeader title={t(linksNavbar[4].name)} bgImageSrc={articleImage} />
    </div>
  )
}

export default Articles