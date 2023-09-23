import React, { useEffect } from "react";
import TitleHeader from "../components/shared/TitleHeader";
import imageRealEstate from "../images/imagecompressor/header1.jpg";
import RealEstateDetail from "../components/RealEstateDetail/RealEstateDetail";
import { useTranslation } from "react-i18next";
import { linksNavbar } from "../Links-navbar/Links";
import { useDispatch, useSelector } from "react-redux";
import { getRealEstates } from "../features/RealEstateSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/shared/Loading";
import ErrorMsg from "../components/shared/ErrorMsg";
import NoData from "../components/shared/NoData";

const DetailRealEstate = () => {
  const { t } = useTranslation();
  const {idReal} = useParams();
  const dispatch = useDispatch();
  const langCode = useSelector((state) => state.selectLang.currentLanguageCode);
  const realEstates = useSelector((state) => state.realEstates);
  
  useEffect(() => {
    window.scrollTo({top: 100, behavior: "smooth"})
    if (realEstates.realEstates?.length === 0){
    dispatch(getRealEstates())
    }
  },[]);
  const detailRealEstate = realEstates.realEstates[0]?.filter((real) => real.id == idReal && real.is_available === true && real.is_archive === false);
  return (
    <div>
      <TitleHeader title={t(linksNavbar[1].name)} bgImageSrc={imageRealEstate} />
      <div className="tw-py-2 tw-relative tw-flex tw-justify-center tw-items-center">
        <div className="tw-w-full">
          <div className="tw-w-[85%] sm:tw-w-[95%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
            {
              realEstates.loading ?
              <Loading />
              : realEstates.status === "failed" ?
              <ErrorMsg msg={realEstates.error || t("errorInGet")}  />
              : detailRealEstate?.length === 1 ?
              <RealEstateDetail
              title={langCode === "en" ? detailRealEstate[0]?.en_title || t("notSpecify") : detailRealEstate[0]?.ar_title || t("notSpecify")}
              image={detailRealEstate[0]?.image_url}
              images={detailRealEstate[0]?.real_estate_images}
              town={detailRealEstate[0]?.residential_compound?.state?.city || t("notSpecify")}
              townDirection={detailRealEstate[0]?.residential_compound?.town_diraction || t("notSpecify")}
              address={langCode === "en" ? detailRealEstate[0]?.residential_compound?.en_address || t("notSpecify") : detailRealEstate[0]?.residential_compound?.ar_address || t("notSpecify")}
              stars={detailRealEstate[0]?.residential_compound?.start || 1}
              typeReal={detailRealEstate[0]?.type || t("notSpecify")}
              offerType={detailRealEstate[0]?.offer_type || t("notSpecify")}
              typePayment={detailRealEstate[0]?.payment_method || t("notSpecify")}
              desc={langCode === "en" ? detailRealEstate[0]?.en_description || t("notSpecify") : detailRealEstate[0]?.ar_description || t("notSpecify")}
              features={detailRealEstate[0]?.real_estate_features || ""}
              realEstateContent={detailRealEstate[0]?.real_estate_contents || ""}
              nearTourist={detailRealEstate[0]?.nearest_tourist_areas || ""}
              descCompaond={ langCode === "en" ? detailRealEstate[0]?.residential_compound?.ar_description || t("notSpecify") : detailRealEstate[0]?.residential_compound?.ar_description || t("notSpecify")}
              moreInfoCompound={langCode === "en" ? detailRealEstate[0]?.residential_compound?.en_project_detailed_information || t("notSpecify") : detailRealEstate[0]?.residential_compound?.ar_project_detailed_information || t("notSpecify")}
              linkYoutbe={detailRealEstate[0]?.residential_compound?.video_url || ""}
              latitude={detailRealEstate[0]?.residential_compound?.latitude || 0}
              longitude={detailRealEstate[0]?.residential_compound?.longitude || 0}
             />
             : <NoData />
            }
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRealEstate;
