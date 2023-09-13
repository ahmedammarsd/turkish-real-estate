import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { linksNavbar } from '../Links-navbar/Links';

const DetailArticle = () => {
  const { t } = useTranslation();
  const langCode = useSelector((state) => state.selectLang.currentLanguageCode)
  useEffect( () => {
    document.title = t(linksNavbar[4].name)
  },[langCode])
  return (
    <div>DetailArticle</div>
  )
}

export default DetailArticle