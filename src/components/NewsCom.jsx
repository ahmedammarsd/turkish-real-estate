import React , { useMemo , useEffect} from "react";
import { useNavigate } from "react-router-dom"
import TitleAndDesc from "./shared/TitleAndDesc";
import { useTranslation } from "react-i18next";
import CardNews from "./shared/CardNews";
import testImage from "../images/imagecompressor/img10.jpg";
import { dummayDataNews, linksNavbar } from "../Links-navbar/Links";
import { useDispatch, useSelector } from "react-redux";
import { getNewsAndArticles } from "../features/NewsAndArticles";
import { BaseUrl } from "../utils/BaseUrl";

const NewsCom = ({inMain}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {date , loading , error} = useSelector( (state) => state.newsAndArticles);
  const selectLang = useSelector( (state) => state.selectLang);
  useMemo(() => {
    dispatch(getNewsAndArticles())
    setTimeout( () => console.log(date) , 10000)
  }, [])
  return (
    <div className="tw-py-2 tw-relative tw-flex tw-justify-center tw-items-center">
      <div className="tw-w-full">
        <div className="tw-w-[85%] sm:tw-w-[95%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
        {  
        inMain ?
        <div>
            <TitleAndDesc
              title={t("news")}
              desc={t("")}
              isTransparentForTitle={false}
              isTransparentForDesc={true}
            />
          </div>
          : null
}
          <div className="tw-grid tw-grid-cols-3 lg:tw-grid-cols-2 sm:tw-grid-cols-1 tw-items-center tw-gap-4 tw-mt-3">
            {
              loading 
              ?
              <h1>LOADING...</h1>
              :
              // date.length === 0 
              // ? <h1>No News</h1>
              // :
              date?.map(({id, image, ar_title , en_title, article_categories, createdAt }) => (
                <CardNews
                  key={id}
                  image={`${BaseUrl}file/${image}`}
                  title={selectLang.currenLanguageCode === "en" ? ar_title :en_title}
                  category={article_categories.category.name}
                  date={createdAt}
                  customNav={() => navigate(`${inMain ? linksNavbar[3].to + "/" + id : id }`) }
                />
              ))
            }
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCom;
