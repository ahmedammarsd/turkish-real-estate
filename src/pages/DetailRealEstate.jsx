import React from "react";
import TitleHeader from "../components/shared/TitleHeader";
import imageRealEstate from "../images/imagecompressor/header1.jpg";
import RealEstateDetail from "../components/RealEstateDetail/RealEstateDetail";
import { useTranslation } from "react-i18next";
import { linksNavbar } from "../Links-navbar/Links";

const DetailRealEstate = () => {
  const { t } = useTranslation()
  let  desc = "ahmed ammmar sidddig , the war in sudan in five month and no one in know when finsh \n every one hope to back to his home \n and see the cloothes in the home ahmed ammmar sidddig , the war in sudan in five month and no one in know when finsh \n every one hope to back to his home \n and see the cloothes in the home  ahmed ammmar sidddig , the war in sudan in five month and no one in know when finsh \n every one hope to back to his home \n and see the cloothes in the home  ahmed ammmar sidddig , the war in sudan in five month and no one in know when finsh \n every one hope to back to his home \n and see the cloothes in the home ";
  return (
    <div>
      <TitleHeader title={t(linksNavbar[1].name)} bgImageSrc={imageRealEstate} />
      <div className="tw-py-2 tw-relative tw-flex tw-justify-center tw-items-center">
        <div className="tw-w-full">
          <div className="tw-w-[85%] sm:tw-w-[95%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
          <RealEstateDetail
           title="test"
           image={imageRealEstate}
           town="khartoum"
           townDirection="east"
           address="naser"
           stars={4}
           typeReal={"villa"}
           offerType={"rent"}
           typePayment={"cash"}
           desc={desc}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRealEstate;
