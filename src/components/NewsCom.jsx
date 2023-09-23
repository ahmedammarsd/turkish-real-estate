import React, { useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TitleAndDesc from "./shared/TitleAndDesc";
import { useTranslation } from "react-i18next";
import CardNews from "./shared/CardNews";
import { linksNavbar } from "../Links-navbar/Links";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getNewsAndArticles,
} from "../features/NewsAndArticlesSlice";
import { BaseUrl } from "../utils/BaseUrl";
import imageNotFound from "../images/imagecompressor/Image_not_available.png";
import ErrorMsg from "./shared/ErrorMsg";
import { useState } from "react";
import Pagination from "./Pagination";
import { VscSettings } from "react-icons/vsc";
import { calcDays } from "../utils/BaseUrl";
import Loading from "./shared/Loading";
import NoData from "./shared/NoData";

const NewsCom = ({ inMain }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataNews = useSelector((state) => state.newsAndArticles);
  const selectLang = useSelector((state) => state.selectLang);
  useEffect(() => {
    //
    if (dataNews.dataNewsAndArticles?.length === 0){
    dispatch(getNewsAndArticles());
    }
    if (!inMain) {
      dispatch(getCategories());
    }
  }, []);

  // STORE VALUE CATEGORY THAT SELECTED FOR USE IN FILTER
  const [category, setCategory] = useState("");
 
  // FILTER THE NEWS IS BREAKING AND IS NOT ARCHIVE
  const dataNewsFilter = dataNews.dataNewsAndArticles[0]?.filter((news) => {
    return news.is_breaking_news === true && news.is_archive === false;
  });
  // ARRAY FOR NEWS PAGE AND USE FILTER BY SELECTING THE CATEGORY
  const dataNewsFilterTwo = dataNews.dataNewsAndArticles[0]
    ?.filter((news) => { // FILTER THE NEWS IS ARCHIVE
      return news.is_archive === false;
    })
    .filter((news) => // FILTER THE NEWS BY CATEGORIES
      category === ""
        ? news
        : news?.article_categories[0]?.category?.name === category
    );
  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [newsInPage] = useState(6);

  // GET CURRENT NEWS
  const indexOfLastPage = currentPage * newsInPage;
  const indexOfFirstNews = indexOfLastPage - newsInPage;
  const currentNews = dataNewsFilterTwo?.slice(
    indexOfFirstNews,
    indexOfLastPage
  );

  // CHANGE PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // END PAGINATION
  return (
    <div className="tw-py-2 tw-relative tw-flex tw-justify-center tw-items-center">
      <div className="tw-w-full">
        <div className="tw-w-[85%] sm:tw-w-[95%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
          {inMain ? (
            <div>
              <TitleAndDesc
                title={t("news")}
                desc={t("")}
                isTransparentForTitle={false}
                isTransparentForDesc={true}
              />
            </div>
          ) : null} 
          {/*============================================= */}
          {inMain ? null : (
            // ==== START CATEGORY ====
            <div className=" tw-w-full">
              {dataNews.loadingCategories ? (
                <Loading />
              ) : dataNews.statusCategories === "failed" ? (
                <ErrorMsg msg={dataNews.errorCategories || t("errorInGet2") } />
              ) : 
              dataNews.categories[0]?.length !== 0 ?
              (
                <div className="tw-w-full tw-relative tw-flex tw-justify-center tw-items-center">
                  <span className={` tw-text-lg tw-p-2 tw-border-b-2 tw-border-main-blue tw-text-white tw-bg-main-blue`}>
                    <VscSettings />
                  </span>
                  <select
                    className={`tw-w-[50%] sm:tw-w-full tw-p-2 tw-border-b-2 tw-border-main-blue`}
                    onChange={(e) => [
                      setCategory(e.target.value),
                      console.log(e.target.value),
                    ]}
                  >
                    <option value="">{t("all")}</option>
                    {dataNews.categories[0]?.map((categoryy) => (
                      <option key={categoryy.id} value={categoryy.name}>
                        {categoryy.name || "no category"}
                      </option>
                    ))}
                  </select>
                </div>
              )
            :null
            }
            </div>
          // ==== END CATEGORY ====
          )}
          {/*============================================= */}

          {/*============================================= */}
          <div className={`tw-w-full ${inMain ? "" : "tw-mt-6"}`}>
            {dataNews.loading ? 
            // =========== START HANDLE NEWS AND ARTICLES ================
            (
              <Loading />
            ) : 
            dataNews.status === "failed" ? (
              <ErrorMsg msg={dataNews.error || t("errorInGet")} />
            ) : inMain ? (
              // ==== IN MAIN PAGE =======  NO FILTER CATEGORY 
              dataNewsFilter?.length === 0 ?
              <NoData />
              :
              <div className="tw-grid tw-grid-cols-3 lg:tw-grid-cols-2 sm:tw-grid-cols-1 tw-items-center tw-gap-4">
            {  dataNewsFilter
                ?.slice(0, 4)
                ?.map(
                  (
                    {
                      id,
                      image_url,
                      ar_title,
                      en_title,
                      article_categories,
                      createdAt,
                    },
                    index
                  ) => (
                    <CardNews
                      key={index}
                      image={`${
                        image_url !== ""
                          ? BaseUrl + "file/" + image_url
                          : imageNotFound
                      }`}
                      title={
                        selectLang.currentLanguageCode === "en"
                          ? en_title || "No Title"
                          : ar_title || "لا يوجد عنوان"
                      }
                      category={
                        article_categories[0]?.category?.name || "No Category"
                      }
                      date={calcDays(createdAt) || ""}
                      customNav={() =>
                        navigate(
                          `${inMain ? linksNavbar[3].to + "/" + id : id}`
                        )
                      }
                    />
                  )
                )
                    }
                </div>
            ) : (
              // ==== IN NEWS PAGE ======= CAN USE FILTER CATEGORY HERE AND DATA CHANGE
              currentNews?.length === 0 
                  ?
                  <NoData />
                  :
              <div className="tw-grid tw-grid-cols-3 lg:tw-grid-cols-2 sm:tw-grid-cols-1 tw-items-center tw-gap-4">
                {
              currentNews?.map(
                (
                  {
                    id,
                    image_url,
                    ar_title,
                    en_title,
                    article_categories,
                    createdAt,
                  },
                  index
                ) => (
                  <CardNews
                    key={index}
                    image={`${
                      image_url === ""
                        ? BaseUrl + "file/" + image_url
                        : imageNotFound
                    }`}
                    title={
                      selectLang.currenLanguageCode === "en"
                        ? en_title || "No Title"
                        : ar_title || "لا يوجد عنوان"
                    }
                    category={
                      article_categories[0]?.category?.name || "No Category"
                    }
                    date={calcDays(createdAt)}
                    customNav={() =>{
                      //console.log(new Date(createdAt.substring(0 , 9)));
                      navigate(`${inMain ? linksNavbar[3].to + "/" + id : id}`)
                    }
                    }
                  />
                )
              )
                  }
                  </div>
            )
            // ==== END HANDLE NEWS AND ARTICLES ====
            }
          </div>
            {/*============================================= */}

            {/*============================================= */}
          {!inMain ? (
            // !dataNews.loading &&
             dataNews.status !== "failed" ? (
              <div className=" tw-w-full tw-flex tw-justify-center tw-items-center tw-mt-7">
                <Pagination
                  InPage={newsInPage}
                  total={dataNewsFilterTwo?.length}
                  paginate={paginate}
                />
              </div>
            ) : null
          ) : null}
          {/*============================================= */}
        </div>
      </div>
    </div>
  );
};

export default NewsCom;
