import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { linksNavbar } from "../Links-navbar/Links";
import Header from "../components/Header";
import CardLinks from "../components/CardLinks";
import ServicesSection from "../components/ServicesSection";
import RealEstatesTypes from "../components/RealEstatesTypes";
import RealEstates from "../components/RealEstates";
import NewsCom from "../components/NewsCom";
import newsImage from "../images/imagecompressor/header4.jpg"
import RealEstateDetail from "../components/RealEstateDetail/RealEstateDetail";
import About from "../components/About";
import Loading from "../components/shared/Loading";



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
      <RealEstates inMain={true}/>
      <NewsCom inMain={true}/>
      <About />
       
      
    </div>
  );
};

export default Main;
