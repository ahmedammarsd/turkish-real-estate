import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { linksNavbar } from "../Links-navbar/Links";
import Header from "../components/Header";
import CardLinks from "../components/CardLinks";
import ServicesSection from "../components/ServicesSection";
import RealEstatesTypes from "../components/RealEstatesTypes";
import RealEstates from "../components/RealEstates";
import NewsCom from "../components/NewsCom";

const Main = () => {
  const { t } = useTranslation();
  const langCode = useSelector((state) => state.selectLang.currentLanguageCode);
  useEffect(() => {
    document.title = t(linksNavbar[0].name);
  }, [langCode]);
  return (
    <div>
      <Header />
      <CardLinks />
      <ServicesSection inMain={true}/>
      <RealEstatesTypes />
      <RealEstates />
      <NewsCom inMain={true}/>
    </div>
  );
};

export default Main;
