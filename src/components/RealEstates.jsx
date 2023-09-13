import React from "react";
import TitleAndDesc from "./shared/TitleAndDesc";
import { useTranslation } from "react-i18next";
import CardRealEstate from "./shared/CardRealEstate";
import testImage from "../images/img5.jpg"

const RealEstates = () => {
    const { t } = useTranslation();
  return (
    <div className="tw-py-2 tw-relative tw-flex tw-justify-center tw-items-center">
      <div className="tw-w-full">
        <div className="tw-w-[85%] sm:tw-w-[95%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
            <div>
                <TitleAndDesc title={t("realEstate")} desc={t("")} isTransparentForTitle={false} isTransparentForDesc={true} />
            </div>
            <div className="tw-grid tw-grid-cols-3 lg:tw-grid-cols-2 sm:tw-grid-cols-1 tw-items-center tw-gap-1 tw-mt-3">
                <CardRealEstate 
                imageReal={testImage} 
                porpose={"for rent"}
                typeProperty={"apartment"}
                price={"100,000"}
                tilte={"golden urban house"}
                addressOne={"60 street"}
                addressTwo={"al-manshia"}
                numberAreaForInfoReal={"250"}
                numberRoomsForInfoReal={"3"}
                numberBathForInfoReal={"2"}
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstates;
