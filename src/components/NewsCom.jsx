import React from "react";
import { useNavigate } from "react-router-dom"
import TitleAndDesc from "./shared/TitleAndDesc";
import { useTranslation } from "react-i18next";
import CardNews from "./shared/CardNews";
import testImage from "../images/img10.jpg";
import { dummayDataNews, linksNavbar } from "../Links-navbar/Links";

const NewsCom = ({inMain}) => {
  const { t } = useTranslation();
  const navigate = useNavigate()
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
            {dummayDataNews?.map(({ id, image, title, category, date }) => (
              <CardNews
                key={id}
                image={image}
                title={title}
                category={category}
                date={date}
                customNav={() => navigate(`${inMain ? linksNavbar[3].to + "/" + id : id }`) }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCom;
