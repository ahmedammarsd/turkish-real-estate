import { useState , useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import Main from './pages/Main';
import RealEstates from './pages/RealEstates';
import Services from "./pages/Services"
import SubServices from "./pages/SubServices"
import DetailService from './pages/DetailService'
import News from "./pages/News"
import DetailNews from "./pages/DetailNews";
import Articles from "./pages/Articles";
import DetailArticle from "./pages/DetailArticle";
import { linksNavbar } from './Links-navbar/Links';
import Footer from './components/Footer';
import Page404 from './pages/Page404';
import DetailRealEstate from './pages/DetailRealEstate';

function App() {
  const { t } = useTranslation()
  const selectLang = useSelector((state) => state.selectLang)
  useEffect( () => {
    // addEventListener("online" , () => console.log("online"))
    // addEventListener("offline" , () => console.log("offline"))
    document.body.dir = selectLang.currentLanguage.dir;
   // document.title = t("web_title");
  },[selectLang.currentLanguageCode]);
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={linksNavbar[0].to} element={<Main />} />
        <Route path={linksNavbar[1].to} element={<RealEstates />} /> 
        <Route path={`${linksNavbar[1].to}/:idReal`} element={<DetailRealEstate />} />

        <Route path={linksNavbar[2].to} element={<Services />} />
        <Route path={`${linksNavbar[2].to}/:id/:nameServices`} element={<SubServices />} />
        <Route path={`${linksNavbar[2].to}/:id/:nameServices/:idService`} element={<DetailService />} />
          
        <Route path={linksNavbar[3].to} element={<News />} />
        <Route path={`${linksNavbar[3].to}/:id`} element={<DetailNews />} />
        
        <Route path={linksNavbar[4].to} element={<Articles />} />
        <Route exact path={`${linksNavbar[4].to}/:id`} element={<DetailArticle />} />
        
        <Route path='*' element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
