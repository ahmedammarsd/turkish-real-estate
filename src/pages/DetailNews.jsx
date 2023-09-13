import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { dummayDataNews, linksNavbar } from "../Links-navbar/Links";
import NewsDetails from "../components/NewsDetails";
import TitleHeader from "../components/shared/TitleHeader";
import newsImage from "../images/imagecompressor/header4.jpg"
import RealEstateDetail from "../components/RealEstateDetail/RealEstateDetail";


const DetailNews = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const {image ,category , title ,desc, date ,youtubeLink} = dummayDataNews[id];
  const langCode = useSelector((state) => state.selectLang.currentLanguageCode);
  useEffect(() => {
    window.scrollTo({top: 100, behavior: "smooth"})
    document.title = t(linksNavbar[3].name);
  }, [langCode]);
  return (
    <div>
      <TitleHeader title={t(linksNavbar[3].name)} bgImageSrc={newsImage} />
    <div className="tw-py-2 tw-relative tw-flex tw-justify-center tw-items-center">
      <div className="tw-w-full">
        <div className="tw-w-[85%] sm:tw-w-[95%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
          <NewsDetails
          image={image}
          category={category}
          title={title}
          desc={desc}
          date={date}
          youtubeLink={youtubeLink}
          />
          <RealEstateDetail
           title="test"
           image={image}
           town="khartoum"
           townDirection="east"
           address="naser"
           stars={4}
           typeReal={"villa"}
           offerType={"rent"}
           typePayment={"cash"}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default DetailNews;
