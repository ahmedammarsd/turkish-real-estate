import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { dummayDataNews, linksNavbar } from "../Links-navbar/Links";
import NewsDetails from "../components/NewsDetails";
import TitleHeader from "../components/shared/TitleHeader";
import newsImage from "../images/imagecompressor/header4.jpg";
import imageNotFound from "../images/imagecompressor/Image_not_available.png";
import { BaseUrl } from "../utils/BaseUrl";
import ErrorMsg from "../components/shared/ErrorMsg";
import { getNewsAndArticles } from "../features/NewsAndArticlesSlice";
import { calcDays } from "../utils/BaseUrl";
import NoData from "../components/shared/NoData";
import Loading from "../components/shared/Loading";


const DetailNews = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  // const {image ,category , title ,desc, date ,youtubeLink} = dummayDataNews[id];
  const langCode = useSelector((state) => state.selectLang.currentLanguageCode);
  const dataNews = useSelector((state) => state.newsAndArticles);

 
  useEffect(() => {
    window.scrollTo({top: 100, behavior: "smooth"})
    document.title = t(linksNavbar[3].name);
   //console.log(newsOrArticle , dataNews)
  }, [langCode]);

  useEffect(() => {
    if (dataNews.dataNewsAndArticles?.length === 0){
      dispatch(getNewsAndArticles());
    }
  },[]);

  const newsOrArticle = dataNews.dataNewsAndArticles[0]?.filter((news) => {
    return news.id == id && news.is_archive === false //============================ remembeer to check is archved
  })
  // const newsOrArticleTwo = !dataNews.status  && newsOrArticle[0];
  return (
    <div>
      <TitleHeader title={t(linksNavbar[3].name)} bgImageSrc={newsImage} />
    <div className="tw-py-2 tw-relative tw-flex tw-justify-center tw-items-center">
      <div className="tw-w-full">
        <div className="tw-w-[85%] sm:tw-w-[95%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
          {
            dataNews.loading ?
            <Loading />
            :
            dataNews.status === "fialed" 
            ? <ErrorMsg msg={dataNews.error || t("errorInGet")} />
            :
            newsOrArticle?.length === 1
            ? 
            <NewsDetails
            image={`${
              newsOrArticle[0].image_url !== ""
                ? BaseUrl + "file/" + newsOrArticle[0].image_url
                : imageNotFound
            }`}
            category={
              newsOrArticle[0].article_categories[0]?.category?.name || "No Category"
            }
            title={
              langCode === "en"
                ? newsOrArticle[0].en_title || "No Title"
                : newsOrArticle[0].ar_title || "لا يوجد عنوان"
            }
            desc={
              langCode === "en"
                ? newsOrArticle[0].en_body || "Not add description"
                : newsOrArticle[0].ar_body || "لم يتم إضافة وصف"
            }
            date={calcDays(newsOrArticle[0].createdAt) || ""}
            youtubeLink={newsOrArticle[0].source_url || ""}
            />
            : <NoData />
          }
        
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default DetailNews;
